import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Calculator from "./Calculator";
import FoodList from "./FoodList";
import ImageLoader from "./ImageLoader";
import NoteButton from "./NoteButton";
import Search from "./Search";

export default function Note(props) {
  const [noteLogs, setNoteLogs] = useState([]);
  return (
    <Box sx={{ width: "100%" }}>
      <ImageLoader />
      <Divider sx={{ my: 2 }} />
      <NoteButton />
      <Divider sx={{ my: 2 }} />
      <Box>
        <Search simple={true} setNoteLogs={setNoteLogs} />
        <Divider sx={{ my: 2 }} />
        <Box sx={{ ml: 4 }}>
          <Typography variant="h6" fontWeight={"bolder"}>
            식단
          </Typography>
          <FoodList item={noteLogs} />
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Calculator />
      {/* <NutritionTable /> */}
    </Box>
  );
}
