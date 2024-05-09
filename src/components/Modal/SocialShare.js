import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Check } from "@mui/icons-material";

export default function SocialShare({ close, open }) {
  const [done, setDone] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setDone(true);
      setTimeout(() => {
        setDone(false);
      }, 2000);
    });
  };

  return (
    <Dialog open={open} onClose={close} maxWidth="md">
      <DialogTitle>Share </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "550px",
            // border: "1px solid #7f7f7f",
            background: "#edeff6",
            height: "50px",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
            {window.location.href}
          </Typography>
          <button class="link-button" onClick={copy}>
            {!done ? "Copy" : <Check color="green" />}
          </button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="primary" onClick={close}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
