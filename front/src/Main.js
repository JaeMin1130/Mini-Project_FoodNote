import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import List from "./List";
import Menu from "./Menu";
import { call } from "./api/ApiService";

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
    call(`/main/${userId}`, "GET", null).then((data) => {
      setNoteData(data);
    });
  }, []);

  useEffect(() => {
    console.log("noteData", noteData);

    const categorizedData = {};

    if (noteData) {
      noteData.forEach((item) => {
        const date = item.date.substring(0, 8);
        if (categorizedData[date]) {
          categorizedData[date].push(item);
        } else {
          categorizedData[date] = [item];
        }
      });
    }

    Object.keys(categorizedData).forEach((date) => {
      const categorizedMeals = {
        아침: [],
        점심: [],
        저녁: [],
      };
      categorizedData[date].forEach((meal) => {
        if (meal.mealType === "아침") {
          categorizedMeals.아침.push(meal);
        } else if (meal.mealType === "점심") {
          categorizedMeals.점심.push(meal);
        } else if (meal.mealType === "저녁") {
          categorizedMeals.저녁.push(meal);
        }
      });

      // Update categorizedData with categorized meals only
      categorizedData[date] = categorizedMeals;
    });

    setCategorizedNoteData(categorizedData);
  }, [noteData]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Menu
          today={today}
          date={date}
          setDate={setDate}
          noteData={noteData}
          setNoteData={setNoteData}
          categorizedNoteData={categorizedNoteData}
        />
      </Grid>
      <Grid item xs={8} sx={{ mt: 5 }}>
        <Typography variant="h2">{date}</Typography>
      </Grid>
      <Grid item xs={4}></Grid>
      {Object.keys(categorizedNoteData).includes(date) ? (
        <Grid item xs={5}>
          <List item={categorizedNoteData[date].아침} noteData={noteData} setNoteData={setNoteData} />
          <List item={categorizedNoteData[date].점심} noteData={noteData} setNoteData={setNoteData} />
          <List item={categorizedNoteData[date].저녁} noteData={noteData} setNoteData={setNoteData} />
        </Grid>
      ) : (
        <Grid item xs={5}>
          <img src="/unrecorded.gif" alt="unrecorded" height="100%" width="100%" />
        </Grid>
      )}
    </Grid>
  );
}
