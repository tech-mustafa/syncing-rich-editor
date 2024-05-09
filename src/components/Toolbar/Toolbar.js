import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import CodeIcon from "@mui/icons-material/Code";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { ColorLens } from "@mui/icons-material";
import { Button as Mbutton } from "@mui/material";

import { Toolbar } from "../Editor/Icons";
import { BlockButton } from "./BlockButton";
import { ColorPallete } from "./ColorPallete";
import { MarkButton } from "./MarkButton";
import { InsertImageButton } from "./ImageInsertButton";
import SocialShare from "../Modal/SocialShare";
import { useState } from "react";

const BLOCK_BUTTONS = [
  { format: "heading-one", icon: <LooksOneIcon /> },
  { format: "heading-two", icon: <LooksTwoIcon /> },
  { format: "block-quote", icon: <FormatQuoteIcon /> },
  { format: "numbered-list", icon: <FormatListNumberedIcon /> },
  { format: "bulleted-list", icon: <FormatListBulletedIcon /> },
  { format: "left", icon: <FormatAlignLeftIcon /> },
  { format: "center", icon: <FormatAlignCenterIcon /> },
  { format: "right", icon: <FormatAlignRightIcon /> },
  { format: "justify", icon: <FormatAlignJustifyIcon /> },
];

const MARK_BUTTONS = [
  { format: "bold", icon: <FormatBoldIcon /> },
  { format: "italic", icon: <FormatItalicIcon /> },
  { format: "underline", icon: <FormatUnderlinedIcon /> },
  { format: "code", icon: <CodeIcon /> },
];

export const ToolBar = ({
  handleImageChange,
  handleColorPallete,
  openColorPallete,
  applyColor,
  docName,
  handleDocNameChange,
  clearEditor,
}) => {
  const [openShare, setOpenShare] = useState(false);
  return (
    <Toolbar className="toolbar">
      <div className="tools">
        {MARK_BUTTONS.map((btn) => (
          <MarkButton key={btn.format} format={btn.format} icon={btn.icon} />
        ))}
        {BLOCK_BUTTONS.map((btn) => (
          <BlockButton key={btn.format} format={btn.format} icon={btn.icon} />
        ))}
        <InsertImageButton
          icon={<InsertPhotoIcon />}
          handleImageChange={handleImageChange}
        />
        <ColorPallete
          format={"color"}
          icon={<ColorLens onClick={handleColorPallete} />}
          openColorPallete={openColorPallete}
          applyColor={applyColor}
        />

        <input
          type="text"
          className="input"
          value={docName}
          onChange={handleDocNameChange}
        />
      </div>
      <div>
        <Mbutton className="clear-button" onClick={clearEditor}>
          Clear
        </Mbutton>
        <Mbutton
          className="clear-button ml-5"
          onClick={() => {
            setOpenShare(true);
          }}
        >
          Share
        </Mbutton>
      </div>
      <SocialShare
        open={openShare}
        close={() => {
          setOpenShare(false);
        }}
      />
    </Toolbar>
  );
};
