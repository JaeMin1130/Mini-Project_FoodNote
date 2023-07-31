import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import * as React from "react";
import List from "./List";
import Menu from "./Menu";

export default function Main() {
  return (
    <Grid container spacing={1}>
      <Grid xs={3}>
        {/* <MiniDrawer /> */}
        <Menu />
      </Grid>
      <Grid xs={9}>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Today's Meal
        </Typography>
      </Grid>
      <Grid xs={3}></Grid>
      <Grid xs={4.5}>
        <List />
      </Grid>
      <Grid xs={4.5}>
        <List />
      </Grid>
      <Grid xs={3}></Grid>
      <Grid xs={4.5}>
        <List />
      </Grid>
      <Grid xs={4.5}>
        <List />
      </Grid>
    </Grid>
  );
}
