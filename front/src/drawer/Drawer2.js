import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const openedMixinSecondDrawer = (theme) => ({
  width: "30vw",
  maxWidth: "60vw",
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

const Drawer2 = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
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

export default Drawer2;
