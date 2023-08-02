import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import List from "./List";
import Menu from "./Menu";
import { useEffect, useState } from "react";

export default function Main() {
  const [userId, setUserId] = useState("user1");
  const [noteData, setNoteData] = useState([]);

  useEffect(() => {
    const url = `http://10.125.121.173:8080/main/${userId}`;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setNoteData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container spacing={1}>
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
