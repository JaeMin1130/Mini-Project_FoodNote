import EditIcon from "@mui/icons-material/Edit";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Fab, Popover, IconButton, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import * as React from "react";
import List from "./List";
import Search from "./Search";
import PopupButton from "./PopupButton";
import Menu from "./Menu";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";

export default function Main() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Menu />
      </Grid>

      <Grid xs={3}>
        <Typography variant="h2">Today's Meal</Typography>
      </Grid>
      <Grid xs={4.5}>
        <List />
        <List />
      </Grid>
      <Grid xs={4.5}>
        <List />
        <List />
      </Grid>
    </Grid>
  );
}
