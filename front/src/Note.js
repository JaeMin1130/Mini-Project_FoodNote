import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Calculator from "./Calculator";
import FoodList from "./FoodList";
import ImageLoader from "./ImageLoader";
import NoteButton from "./NoteButton";
import Search from "./Search";
import NutritionTable from "./NutritionTable";

export default function Note(props) {
  const [noteLogs, setNoteLogs] = useState([]);
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {}, [foodData]);

  return (
    <Box sx={{ width: "100%" }}>
      <ImageLoader />
      <Divider sx={{ my: 2 }} />
      <NoteButton />
      <Divider sx={{ my: 2 }} />
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", mb: 2 }}>
          <Typography variant="h6" fontWeight={"bolder"}>
            식단
          </Typography>
          <Search simple={true} noteLogs={noteLogs} setNoteLogs={setNoteLogs} />
        </Box>
        {noteLogs.map((item) => (
          <FoodList item={item} noteLogs={noteLogs} setNoteLogs={setNoteLogs} setFoodData={setFoodData} inNote={true} />
        ))}
      </Box>
      <Divider sx={{ my: 2 }} />
      <NutritionTable foodInfo={foodData["0"]} />
    </Box>
  );
}
