import { useSlate } from "slate-react";
import { Button, Icon } from "../Editor/Icons";
import { isMarkActive, toggleMark } from "../../utils/Helpers";

export const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
