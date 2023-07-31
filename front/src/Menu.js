import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Divider,
  Drawer,
  FormControlLabel,
  ListItemButton,
  ListItemText,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import * as React from "react";
import MenuButton from "./MenuButton";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Search from "./Search";

export default function Menu() {
  const [clicked, setClicked] = React.useState([false, false, false, false, false]);
  const clickHandler = (index) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  const calendar = (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Box>
  );

  return (
    <Paper sx={{ bgcolor: "transparent", position: "fixed", height: "100vh", width: "40vh" }} elevation={2}>
      <Box sx={{ display: "flex", mt: 3, ml: 2 }}>
        <MenuIcon sx={{ fontSize: 55, mt: 0.5 }} />
        <Typography variant="h3">Menu</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "30vh",
          ml: 1,
          mt: 9,
        }}
      >
        <React.Fragment>
          <MenuButton index={0} clickHandler={clickHandler} />
          <Drawer anchor={"left"} open={clicked[0]} onClose={clickHandler}>
            <Box role="presentation">
              <Search />
            </Box>
          </Drawer>
        </React.Fragment>
        <MenuButton index={1} />
        <FormControlLabel control={<MenuButton index={2} clickHandler={clickHandler} />} />
        <MenuButton index={3} />
        <MenuButton index={4} />
        <Slide direction="up" in={clicked[2]}>
          {calendar}
        </Slide>
      </Box>
    </Paper>
  );
}
