import { useEffect, useState } from "react";
import Menu from "./Menu";
import { call } from "./api/ApiService";
import { Grid, Paper, Typography } from "@mui/material";
import List from "./List";

export default function Main() {
  const [noteData, setNoteData] = useState([]);
  const [categorizedNoteData, setCategorizedNoteData] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    call(`/main/${userId}`, "GET", null).then((data) => {
      setNoteData(data);
    });
  }, []);

  useEffect(() => {
    const categorizedData = {
      breakfast: [],
      lunch: [],
      dinner: [],
    };

    noteData.forEach((item) => {
      if (item.mealType === "아침") {
        categorizedData.breakfast.push(item);
      } else if (item.mealType === "점심") {
        categorizedData.lunch.push(item);
      } else if (item.mealType === "저녁") {
        categorizedData.dinner.push(item);
      }
    });

    setCategorizedNoteData(categorizedData);
  }, [noteData]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Menu />
      </Grid>
      <Grid item xs={8} sx={{ mt: 5 }}>
        <Typography variant="h2">Today's Meal</Typography>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={5}>
        <List item={categorizedNoteData.breakfast} />
        <List item={categorizedNoteData.lunch} />
        <List item={categorizedNoteData.dinner} />
      </Grid>
    </Grid>
  );
}
