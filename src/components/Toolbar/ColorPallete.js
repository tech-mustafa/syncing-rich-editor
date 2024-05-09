import { SketchPicker } from "react-color";

export const ColorPallete = ({ icon, openColorPallete, applyColor }) => {
  return (
    <div style={{ position: "relative" }}>
      {icon}
      {openColorPallete && (
        <div style={{ position: "absolute", zIndex: 9999 }}>
          <SketchPicker onChangeComplete={applyColor} />
        </div>
      )}
    </div>
  );
};
