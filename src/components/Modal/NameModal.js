import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { NameGenerator } from "../../utils/NameGenerator";

function NameModal({ open, setOpen }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError("");
  };

  const generateName = () => {
    const name = new NameGenerator();
    setName(name.generateName());
    setError("");
  };

  const start = () => {
    localStorage.setItem("user-name", name);
    if (!name) {
      setError("If you don't want to give your name, Generate a random one!!");
      return;
    }
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Who's Editing? </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle" sx={{ color: "gray" }}>
          Please provide your name for the collaborative editing
        </Typography>
        <TextField
          value={name}
          onChange={handleNameChange}
          sx={{ width: "100%", marginTop: "20px" }}
          variant="outlined"
        />
        {error && (
          <Typography variant="subtitle2" color="red">
            {error}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="Secondary" onClick={generateName}>
          Generate Random Name
        </Button>
        <Button variant="primary" onClick={start}>
          Start
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NameModal;
