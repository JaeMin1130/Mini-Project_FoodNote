import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect, useState } from "react";
import List from "./List";
import Menu from "./Menu";

export default function Main() {
  const [userId, setUserId] = useState("Iru");
  const [noteData, setNoteData] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/main/${userId}`;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setNoteData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid xs={4}>
        <Menu />
      </Grid>
      <Grid xs={8}>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Today's Meal
        </Typography>
      </Grid>
      <Grid xs={4}></Grid>
      <Grid xs={8}>
        <List />
      </Grid>
    </Grid>
  );
}
