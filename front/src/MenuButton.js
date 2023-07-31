import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Search from "./Search";
import Note from "./Note";

export default function MenuButton(props) {
  const clickHandler = props.clickHandler;
  const handleDrawer = props.handleDrawer;

  const idx = props.index;
  const navigate = useNavigate();
  // let clicked = [];
  // React.useEffect(() => {
  //   clicked = props.clicked[idx];
  //   console.log(clicked);
  // }, [props.clicked]);

  const clickSearch = () => {
    clickHandler(idx);
    handleDrawer();
  };
  const clickNote = () => {
    clickHandler(idx);
    handleDrawer();
  };
  const clickCal = () => {
    clickHandler(idx);
    handleDrawer();
  };

  const clickStat = () => {
    clickHandler(idx);
    handleDrawer();
  };

  const clickLogout = () => {
    clickHandler(idx);
    navigate("/login");
  };

  const iconList = [
    <SearchIcon sx={{ fontSize: 35 }} />,
    <EditIcon sx={{ fontSize: 35 }} />,
    <CalendarMonthIcon sx={{ fontSize: 35 }} />,
    <EqualizerIcon sx={{ fontSize: 35 }} />,
    <LogoutIcon sx={{ fontSize: 35 }} />,
  ];

  const iconName = ["검색", "기록", "달력", "통계", "로그아웃"];
  const clickEvents = [clickSearch, clickNote, clickCal, clickStat, clickLogout];

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={clickEvents[idx]}>
          {iconList[idx]}
          <ListItemText primary={iconName[idx]} sx={{ opacity: props.open ? 1 : 0, ml: 2 }} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
