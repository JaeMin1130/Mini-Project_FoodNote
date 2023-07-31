import { Box, CssBaseline } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import * as React from "react";
import MenuButton from "./MenuButton";
import Search from "./Search";
import Note from "./Note";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const openedMixin = (theme, open2) => ({
  width: "40vh",
  backgroundColor: "transparent",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme, open2) =>
  open2
    ? {
        width: `calc(${theme.spacing(7)} + 1px)`,
        backgroundColor: "transparent",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        [theme.breakpoints.up("sm")]: {
          width: `calc(${theme.spacing(8)} + 1px)`,
        },
      }
    : {
        width: `calc(${theme.spacing(7)} + 1px)`,
        backgroundColor: "transparent",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        [theme.breakpoints.up("sm")]: {
          width: `calc(${theme.spacing(8)} + 1px)`,
        },
      };

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open, open2 }) => ({
  width: "40vh",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),

  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Menu() {
  const [clicked, setClicked] = React.useState([false, false, false, false, false]);
  const clickHandler = (index) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setOpen2(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpen2(true);
  };

  const calendar = (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Box>
  );

  const eventTags = [<Search />, <Note />, calendar, <Search />, <Search />];

  return (
    <Box>
      <Drawer variant="permanent" open={open}>
        <CssBaseline />
        {[0, 1, 2, 3, 4].map((idx) => (
          <MenuButton
            index={idx}
            open={open}
            open2={open2}
            clicked={clicked[idx]}
            clickHandler={clickHandler}
            handleDrawer={!open ? handleDrawerOpen : handleDrawerClose}
          />
        ))}
      </Drawer>
      <Drawer variant="persistent" open={open2}></Drawer>
    </Box>
  );
}
