import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../utils/FirebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useNavigate();

  useEffect(() => {
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
          Welcome!
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
    </Box>
  );
}

export default Home;
