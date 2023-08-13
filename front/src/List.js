import { Box, Paper, Typography } from "@mui/material";
import { useEffect } from "react";

export default function List(props) {
  const item = props.item;

  useEffect(() => {
    console.log("item", item);
  }, []);

  return (
    item && (
      <Paper elevation={8} sx={{ my: 7, height: "30vh" }}>
        <img
          src={`data:image/png;base64,${item[0].imageData}`}
          alt="Image"
          style={{
            width: "40%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Paper>
    )
  );
}
