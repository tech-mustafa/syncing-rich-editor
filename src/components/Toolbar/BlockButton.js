import { useSlate } from "slate-react";
import { Button, Icon } from "../Editor/Icons";
import {
  TEXT_ALIGN_TYPES,
  isBlockActive,
  toggleBlock,
} from "../../utils/Helpers";

export const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
