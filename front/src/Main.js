import { useEffect, useState } from "react";
import Menu from "./Menu";
import { call } from "./api/ApiService";
import { Grid, Paper, Typography } from "@mui/material";
import List from "./List";

export default function Main() {
  const [noteData, setNoteData] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    call(`/main/${userId}`, "GET", null).then((data) => {
      setNoteData(data);
    });
  }, []);

  const categorizedNoteData = {
    breakfast: [],
    lunch: [],
    dinner: [],
  };

  useEffect(() => {
    noteData.forEach((item) => {
      if (item.mealType === "아침") {
        categorizedNoteData.breakfast.push(item);
      } else if (item.mealType === "점심") {
        categorizedNoteData.lunch.push(item);
      } else if (item.mealType === "저녁") {
        categorizedNoteData.dinner.push(item);
      }
    });
    console.log("categorized", categorizedNoteData);
  }, [noteData]);

  return (
    <Grid container spacing={1}>
      <Grid xs={4}>
        <Menu />
      </Grid>
      <Grid xs={8} sx={{ mt: 5 }}>
        <Typography variant="h2">Today's Meal</Typography>
      </Grid>
      <Grid xs={4}></Grid>
      {/* {noteData.length > 0 && (
        <Grid xs={5}>
          {Object.keys(categorizedNoteData).map((key) => (
            <List key={key} item={categorizedNoteData[key]} />
          ))}
        </Grid>
      )} */}
      <Grid xs={5}>
        <List item={categorizedNoteData.breakfast} />
        {/* <List item={categorizedNoteData.lunch} /> */}
        {/* <List item={categorizedNoteData.dinner} /> */}
      </Grid>
    </Grid>
  );
}
