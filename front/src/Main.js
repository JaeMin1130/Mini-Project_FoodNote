import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect, useState } from "react";
import { call } from "./api/ApiService";
import Menu from "./Menu";
import Search from "./Search";
import Drawer3 from "./drawer/Drawer3";

export default function Main() {
  const [userId, setUserId] = useState("user123");
  const [noteData, setNoteData] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    call(`/main/${userId}`, "GET", null);
  });

  return (
    <Grid container spacing={5}>
      <Grid xs={4}>
        <Menu searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        <Drawer3 variant="permanent" open={searchOpen}>
          <Search />
        </Drawer3>
      </Grid>
      <Grid xs={8}>
        <Typography variant="h2" sx={{ mt: 2 }}>
          Today's Meal
        </Typography>
      </Grid>
      <Grid xs={4}></Grid>
      <Grid xs={8}>{/* <List /> */}</Grid>
    </Grid>
  );
}
