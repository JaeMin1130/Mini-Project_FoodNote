import {
  Box,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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

  const idx = props.index;
  const navigate = useNavigate();

  const clickSearch = () => {
    clickHandler(idx);
  };
  const clickNote = () => {
    clickHandler(idx);
  };
  const clickCal = () => {
    clickHandler(idx);
  };

  const clickStat = () => {
    clickHandler(idx);
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
      <ListItem>
        <ListItemButton onClick={clickEvents[idx]} sx={{ px: 0 }}>
          {iconList[idx]}
          {props.open && <ListItemText primary={iconName[idx]} sx={{ ml: 2 }} />}
        </ListItemButton>
      </ListItem>
    </List>
  );
}
