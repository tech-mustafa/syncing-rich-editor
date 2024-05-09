import React from "react";
import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "../../liveblocks.config";
// import { CollaborativeRichTextEditor } from "./Editor";
import { useParams } from "react-router-dom";
import { CollaborativeRichTextEditorV2 } from "./index";

export function Room({ children }) {
  const { roomId } = useParams();
  return (
    <div className="App">
      <RoomProvider
        id={roomId}
        initialPresence={{
          cursor: null,
        }}
      >
        <ClientSideSuspense fallback={<div>Ooopsss...</div>}>
          {() => <CollaborativeRichTextEditorV2 roomId={roomId} />}
        </ClientSideSuspense>
      </RoomProvider>
    </div>
  );
}
