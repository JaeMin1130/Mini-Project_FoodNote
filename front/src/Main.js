import { useEffect, useState } from "react";
import Menu from "./Menu";
import { call } from "./api/ApiService";
import { Grid, Paper, Typography } from "@mui/material";
import List from "./List";

export default function Main() {
  const [noteData, setNoteData] = useState([]);
  const [categorizedNoteData, setCategorizedNoteData] = useState({});
  const userId = localStorage.getItem("userId");
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2); // Get the last two digits of the year
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1 and pad with 0 if needed
  const day = String(now.getDate()).padStart(2, "0");
  const today = `${year}-${month}-${day}`;
  const [date, setDate] = useState(today);

  useEffect(() => {
    console.log("start");
    call(`/main/${userId}`, "GET", null).then((data) => {
      setNoteData(data);
    });
  }, []);
  useEffect(() => {
    console.log("datedate", date);
  }, [date]);
  useEffect(() => {
    const categorizedData = {};

    noteData.forEach((item) => {
      const date = item.date.substring(0, 8);
      if (categorizedData[date]) {
        categorizedData[date].push(item);
      } else {
        categorizedData[date] = [item];
      }
    });

    console.log("categorizedData", categorizedData);
    Object.keys(categorizedData).forEach((date) => {
      const categorizedMeals = {
        breakfast: [],
        lunch: [],
        dinner: [],
      };
      categorizedData[date].forEach((meal) => {
        if (meal.mealType === "아침") {
          categorizedMeals.breakfast.push(meal);
        } else if (meal.mealType === "점심") {
          categorizedMeals.lunch.push(meal);
        } else if (meal.mealType === "저녁") {
          categorizedMeals.dinner.push(meal);
        }
      });

      // Update categorizedData with categorized meals only
      categorizedData[date] = categorizedMeals;
    });

    setCategorizedNoteData(categorizedData);
  }, [noteData]);

  // useEffect(() => {
  //   console.log("categorizedNoteData", categorizedNoteData);
  // }, [categorizedNoteData]);
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Menu
          today={today}
          setDate={setDate}
          categorizedNoteData={categorizedNoteData}
          setCategorizedNoteData={setCategorizedNoteData}
        />
      </Grid>
      <Grid item xs={8} sx={{ mt: 5 }}>
        <Typography variant="h2">{date}</Typography>
      </Grid>
      <Grid item xs={4}></Grid>
      {Object.keys(categorizedNoteData).length >= 1 ? (
        <Grid item xs={5}>
          <List item={categorizedNoteData[date].breakfast} />
          <List item={categorizedNoteData[date].lunch} />
          <List item={categorizedNoteData[date].dinner} />{" "}
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
}
