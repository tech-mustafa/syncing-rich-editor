import { css } from "@emotion/css";
import { Button } from "@mui/material";
import { Transforms } from "slate";
import {
  ReactEditor,
  useFocused,
  useSelected,
  useSlateStatic,
} from "slate-react";
import DeleteIcon from "@mui/icons-material/Delete";

import { Icon } from "./Icons";

export const Image = ({ attributes, children, element }) => {
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);

  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes} draggable="true">
      {children}
      <div
        contentEditable={false}
        className={css`
          position: relative;
        `}
      >
        <img
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
          `}
          alt="embedimage"
        />
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: ${selected && focused ? "inline" : "none"};
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
            color: black;
          `}
        >
          <Icon>{<DeleteIcon />}</Icon>
        </Button>
      </div>
    </div>
  );
};
