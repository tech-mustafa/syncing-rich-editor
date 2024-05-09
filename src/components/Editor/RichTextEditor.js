import React, { useCallback, useEffect, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate } from "slate-react";
import { Editor, Transforms, createEditor } from "slate";

import { YjsEditor, withCursors, withYjs } from "@slate-yjs/core";
import { debounce } from "lodash";
import { doc, updateDoc } from "firebase/firestore";
import { Cursors } from "./Cursor";
import { Element } from "./Element";
import { Leaf } from "./Leaf";
import { withEmbeds, withImages } from "../../utils/EditorWrappers";
import { insertImage, toggleMark } from "../../utils/Helpers";
import { db } from "../../utils/FirebaseConfig";
import { NameGenerator } from "../../utils/NameGenerator";
import { generateVisibleRandomColor } from "../../utils/ColorGenerator";
import { ToolBar } from "../Toolbar/Toolbar";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const emptyNode = {
  children: [{ text: "" }],
};

const RichTextEditor = ({
  sharedType,
  provider,
  docId,
  docName: initDocName,
}) => {
  const [openColorPallete, setColorPallete] = useState(false);
  const [docName, setDocName] = useState(initDocName);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const userName = localStorage.getItem("user-name");

  const editor = useMemo(() => {
    const e = withImages(
      withEmbeds(
        withReact(
          withCursors(withYjs(createEditor(), sharedType), provider.awareness, {
            data: {
              name: userName || new NameGenerator().generateName(),
              color: generateVisibleRandomColor(),
            },
          })
        )
      )
    );
    const { normalizeNode } = e;
    e.normalizeNode = (entry) => {
      const [node] = entry;

      if (!Editor.isEditor(node) || node.children.length > 0) {
        return normalizeNode(entry);
      }

      Transforms.insertNodes(editor, emptyNode, { at: [0] });
    };

    return e;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    YjsEditor.connect(editor);
    return () => YjsEditor.disconnect(editor);
  }, [editor]);

  const handleImageChange = (e, editor) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    insertImage(editor, url);
  };

  const handleColorPallete = () => {
    setColorPallete((open) => !open);
  };

  const applyColor = (color) => {
    Editor.addMark(editor, "color", color.hex);
    setColorPallete(false);
  };

  const clearEditor = () => {
    editor.children.map((item) => {
      Transforms.delete(editor, { at: [0] });
      return item;
    });

    editor.children = [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ];
  };

  const handleDocNameChange = (e) => {
    const { value } = e.target;
    setDocName(value);
    handleDocNameChangeDebounced(value);
  };

  const handleDocNameChangeDebounced = debounce(async (value) => {
    const docRef = doc(db, "documents-for-editor", docId);
    await updateDoc(docRef, {
      name: value,
    });
  }, 1000);

  return (
    <Slate editor={editor} initialValue={[emptyNode]}>
      <ToolBar
        handleColorPallete={handleColorPallete}
        handleDocNameChange={handleDocNameChange}
        handleImageChange={handleImageChange}
        openColorPallete={openColorPallete}
        applyColor={applyColor}
        docName={docName}
        clearEditor={clearEditor}
        shareEditor={clearEditor}
      />
      <Cursors>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          // placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
          style={{
            minHeight: "100vh",
            border: "1px dashed grey",
            padding: "5px 20px",
            boxSizing: "border-box",
          }}
        />
      </Cursors>
    </Slate>
  );
};

export default RichTextEditor;
