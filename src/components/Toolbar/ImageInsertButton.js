import { useSlateStatic } from "slate-react";
import { Button, Icon } from "../Editor/Icons";

export const InsertImageButton = ({ icon, handleImageChange }) => {
  const editor = useSlateStatic();
  return (
    <Button
      onClick={() => {
        document.getElementById("image").click();
      }}
    >
      <Icon>{icon}</Icon>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={(e) => handleImageChange(e, editor)}
        accept="image/*"
        id="image"
      />
    </Button>
  );
};
