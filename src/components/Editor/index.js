import { useEffect, useMemo, useState } from "react";
import { useRoom } from "../../liveblocks.config";
import LiveblocksProvider from "@liveblocks/yjs";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/FirebaseConfig";
import RichTextEditor from "./RichTextEditor";
import * as Y from "yjs";

export const CollaborativeRichTextEditorV2 = ({ roomId }) => {
  const room = useRoom();
  const [connected, setConnected] = useState(false);
  const [sharedType, setSharedType] = useState();
  const [provider, setProvider] = useState();
  const [loading, setLoading] = useState(false);
  const [docId, setDocId] = useState("");
  const [docName, setDocName] = useState("Untitled-Editor");

  useEffect(() => {
    const yDoc = new Y.Doc();
    const yProvider = new LiveblocksProvider(room, yDoc);
    const sharedDoc = yDoc.get("slate", Y.XmlText);
    yProvider.on("sync", setConnected);

    setSharedType(sharedDoc);
    setProvider(yProvider);

    return () => {
      yDoc?.destroy();
      yProvider?.off("sync", setConnected);
      yProvider?.destroy();
    };
  }, [room]);
  const getData = useMemo(() => {
    const getData = async () => {
      setLoading(true);
      const q = query(
        collection(db, "documents-for-editor"),
        where("roomId", "==", roomId)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        const ref = await addDoc(collection(db, "documents-for-editor"), {
          roomId,
          name: "Untitled-Editor",
        });
        setDocId(ref.id);
      } else {
        setDocId(querySnapshot.docs[0].id);
        setDocName(querySnapshot.docs[0].data().name);
      }
      setLoading(false);
    };
    return getData;
  }, [roomId]);

  useEffect(() => {
    //if the document is available fetch it and initialize values, if not then create a new document.
    //set the docId to state in both the cases

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!connected || !sharedType || !provider || loading) {
    return <div>Loading...</div>;
  }

  return (
    <RichTextEditor
      provider={provider}
      sharedType={sharedType}
      roomId={roomId}
      docId={docId}
      docName={docName}
    />
  );
};
