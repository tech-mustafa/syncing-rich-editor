import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../utils/FirebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";
import NameModal from "../Modal/NameModal";
import { Edit } from "@mui/icons-material";

function Home() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState("");

  const [loading, setLoading] = useState(true);
  const router = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem("user-name");
    if (!name) {
      setOpen(true);
    }
    const getData = async () => {
      const q = query(collection(db, "documents-for-editor"));
      const querySnapshot = await getDocs(q);
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setData(() => list);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h2" sx={{ fontWeight: "500" }}>
          Welcome {localStorage.getItem("user-name")}!{" "}
          <Edit
            sx={{ cursor: "pointer", color: "gray" }}
            onClick={() => {
              setOpen(true);
            }}
          />
        </Typography>
      </Box>
      <Box className={"doc-box-wrapper"}>
        <Box
          className={"doc-box"}
          onClick={() => {
            router(`/editor/${v4()}`);
          }}
        >
          Create New +
        </Box>
        {loading && <CircularProgress />}
        {data.map((doc) => (
          <Box
            className={"doc-box"}
            onClick={() => {
              router(`/editor/${doc.roomId}`);
            }}
          >
            {doc.name}
          </Box>
        ))}
      </Box>
      <NameModal open={open} setOpen={setOpen} />
    </Box>
  );
}

export default Home;
