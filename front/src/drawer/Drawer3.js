import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const openedMixinDrawer = (theme) => ({
  width: "30vw",
  maxWidth: "60vw",
  backgroundColor: "transparent",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixinDrawer = (theme) => ({
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

const Drawer3 = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  flexShrink: 0,
  boxSizing: "border-box",
  anchor: "bottom",
  ...(open && {
    ...openedMixinDrawer(theme),
    "& .MuiDrawer-paper": openedMixinDrawer(theme),
  }),

  ...(!open && {
    ...closedMixinDrawer(theme),
    "& .MuiDrawer-paper": closedMixinDrawer(theme),
  }),
}));

export default Drawer3;
