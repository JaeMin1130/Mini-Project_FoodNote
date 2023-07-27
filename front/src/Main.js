import EditIcon from "@mui/icons-material/Edit";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Fab, Grid, Popover, IconButton, TextField, Typography } from "@mui/material";
import * as React from "react";
import List from "./List";
import Search from "./Search";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";

export default function Main() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
          <Fab color="primary" href="/note">
            <EditIcon />
          </Fab>
          <Fab color="primary" sx={{ ml: 2 }} onClick={handleClick}>
            <CalendarMonthIcon />
          </Fab>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Popover>

          <Fab color="primary" sx={{ ml: 2, mr: 2 }}>
            <EqualizerIcon />
          </Fab>
          <Fab color="primary" href="/login">
            <LogoutIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
