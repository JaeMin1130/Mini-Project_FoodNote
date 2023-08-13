import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Calculator from "./Calculator";
import FoodList from "./FoodList";
import ImageLoader from "./ImageLoader";
import NoteButton from "./NoteButton";
import Search from "./Search";
import NutritionTable from "./NutritionTable";
import { call } from "./api/ApiService";
import { API_BASE_URL } from "./api/api-config";
import axios from "axios";

export default function Note(props) {
  const [noteLogs, setNoteLogs] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [noteValue, setNoteValue] = useState([]);
  const [amount, setAmount] = useState(0);
  const [imageUpload, setImageUpload] = useState([]);
  const [mealType, setMealType] = useState("");

  const submitHandler = async () => {
    try {
      for (const noteData of noteLogs) {
        noteData.mealType = mealType;
        const formData = new FormData();
        const json = JSON.stringify(noteData);
        const blob = new Blob([json], { type: "application/json" });
        formData.append("note", blob);
        formData.append("file", imageUpload[0]);

        await axios.post(API_BASE_URL + "/main/note", formData, {
          headers: {
            Authorization: localStorage.getItem("ACCESS_TOKEN"),
            "Content-Type": "multipart/form-data",
          },
        });
      }
      setNoteLogs([]);
      setFoodData([]);
      setNoteValue([]);
      setAmount(0);
      setImageUpload([]);
      setMealType("");
    } catch (error) {}
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "26vw" }}>
      <ImageLoader imageUpload={imageUpload} setImageUpload={setImageUpload} />
      <Divider sx={{ my: 2 }} />
      <NoteButton setMealType={setMealType} />
      <Divider sx={{ my: 2 }} />
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", mb: 2 }}>
          <Typography variant="h6" fontWeight={"bolder"}>
            식단
          </Typography>
          <Search inNote={true} setFoodData={setFoodData} noteLogs={noteLogs} setNoteLogs={setNoteLogs} />
        </Box>
        {noteLogs.map((item) => (
          <FoodList item={item} noteLogs={noteLogs} setNoteLogs={setNoteLogs} setFoodData={setFoodData} inNote={true} />
        ))}
        {noteLogs.length >= 1 && (
          <Box sx={{ display: "flex", justifyContent: "end", mr: 5 }}>
            <Button variant="outlined" onClick={submitHandler}>
              저장하기
            </Button>
          </Box>
        )}
      </Box>
      <Divider sx={{ my: 2 }} />
      {foodData.length == 1 && (
        <NutritionTable
          foodData={foodData["0"]}
          noteValue={noteValue}
          setNoteValue={setNoteValue}
          amount={amount}
          setAmount={setAmount}
          noteLogs={noteLogs}
          setNoteLogs={setNoteLogs}
          inNote={true}
        />
      )}
    </Box>
  );
}
