import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect, useState } from "react";
import { call } from "./api/ApiService";
import List from "./List";
import Menu from "./Menu";

export default function Main() {
  const [userId, setUserId] = useState("user123");
  const [noteData, setNoteData] = useState({});
  useEffect(() => {
    call(`/main/${userId}`, "GET", null);
  });

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
