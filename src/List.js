import { Box, Card, Divider, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import ChipsArray from "./ChipsArray";
import FoodList from "./FoodList";

export default function List(props) {
  const data = props.item;

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Paper elevation={8} sx={{ my: 7, height: "30vh" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        {data[0].imageData ? (
          <img
            src={`data:image/png;base64,${data[0].imageData}`}
            alt=""
            style={{
              width: "40%",
              objectFit: "cover",
            }}
          />
        ) : (
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#eee",
              width: "43%",
            }}
          >
            <Typography variant="h4" fontWeight={"bolder"}>
              사진 없음
            </Typography>
          </Card>
        )}
        <Box sx={{ mx: 2, width: "60%" }}>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bolder", mr: 2 }}>
              {data[0].mealType}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              {/* {data[0].date[9] == 0 ? "오전 " + data[0].date.substring(9, 14) : "오후 " + data[0].date.substring(9, 14)} */}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <ChipsArray data={data} />
          <Divider sx={{ my: 2 }} />
          <Box sx={{ maxHeight: "10vh", overflowY: "auto" }}>
            {data.map((list, idx) => (
              <FoodList key={idx} item={list} inList={true} noteData={props.noteData} setNoteData={props.setNoteData} />
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
