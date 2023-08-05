import MenuIcon from "@mui/icons-material/Menu";
import { Box, CssBaseline, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import MenuButton from "./MenuButton";
import Note from "./Note";
import Search from "./Search";

const openedMixin = (theme) => ({
  width: "18vw",
  backgroundColor: "transparent",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "transparent",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
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

const openedMixinSecondDrawer = (theme) => ({
  width: "30vw",
  backgroundColor: "transparent",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixinSecondDrawer = (theme) => ({
  backgroundColor: "transparent",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: 0,
  },
});

const DrawerSecond = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixinSecondDrawer(theme),
    "& .MuiDrawer-paper": openedMixinSecondDrawer(theme),
  }),

  ...(!open && {
    ...closedMixinSecondDrawer(theme),
    "& .MuiDrawer-paper": closedMixinSecondDrawer(theme),
  }),
}));

export default function Menu() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [open, setOpen] = useState(true);

  const clickHandler = (index) => {
    if (clicked[index]) setOpen(true);
    else setOpen(false);
    const newClicked = [false, false, false, false, false];
    newClicked[index] = !clicked[index];
    setClicked(newClicked);
  };

  const menuButtons = (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mx: 1, my: 4 }}>
        <MenuIcon
          sx={{
            fontSize: 50,
          }}
        />
        {open && (
          <Typography variant="h4" sx={{ ml: 1, opacity: open ? 1 : 0, transition: "opacity 0.3s ease" }}>
            Menu
          </Typography>
        )}
      </Box>
      <Box>
        {[0, 1, 2, 3, 4].map((idx) => (
          <MenuButton index={idx} open={open} clicked={clicked[idx]} clickHandler={clickHandler} />
        ))}
      </Box>
    </Box>
  );
  const eventTags = [<Search />, <Note />, <Calendar />, <Search />, <Search />];

  return (
    <Box>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        {open && menuButtons}
      </Drawer>
      {eventTags.map((eventTag, idx) => (
        <DrawerSecond variant="permanent" PaperProps open={clicked[idx]} sx={{ maxWidth: "30vw" }}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            {menuButtons}
            {clicked[idx] ? eventTag : null}
          </Box>
        </DrawerSecond>
      ))}
    </Box>
  );
}
