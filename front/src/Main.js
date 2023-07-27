import EditIcon from "@mui/icons-material/Edit";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Fab, Grid, IconButton, TextField, Typography } from "@mui/material";
import * as React from "react";
import List from "./List";
import Search from "./Search";

export default function Main() {
  return (
    <Box>
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <Typography variant="h2">Today's Note</Typography>
        </Grid>
        <Search />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List />
          <List />
        </Grid>
        <Grid item xs={6}>
          <List />
          <List />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Fab color="primary" aria-label="edit" href="/note">
            <EditIcon />
          </Fab>
          <Fab color="primary" sx={{ ml: 2, mr: 2 }} aria-label="add">
            <EqualizerIcon />
          </Fab>
          <Fab color="primary" aria-label="add">
            <LogoutIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
