import { Box, Divider, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import ChipsArray from "./ChipsArray";
import FoodList from "./FoodList";

export default function List(props) {
  const data = props.item;

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Paper elevation={8} sx={{ my: 7, height: "30vh" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <img
          src={`data:image/png;base64,${data[0].imageData}`}
          alt="Image"
          style={{
            width: "40%",
            objectFit: "cover",
          }}
        />
        <Box sx={{ mx: 2, width: "60%" }}>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bolder", mr: 2 }}>
              {data[0].mealType}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              {data[0].date[9] == 0 ? "오전 " + data[0].date.substring(9, 14) : "오후 " + data[0].date.substring(9, 14)}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <ChipsArray data={data} />
          <Divider sx={{ my: 2 }} />
          <Box sx={{ maxHeight: "10vh", overflowY: "auto" }}>
            {data.map((list, idx) => (
              <FoodList key={idx} item={list} inList={true} />
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
