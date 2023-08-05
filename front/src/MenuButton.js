import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signout } from "./api/ApiService";

export default function MenuButton(props) {
  const clickHandler = props.clickHandler;
  const idx = props.index;
  const navigate = useNavigate();

  const clickSearch = () => {
    clickHandler(idx);
    navigate("/main/search");
  };
  const clickNote = () => {
    clickHandler(idx);
    navigate("/main/note");
  };
  const clickCal = () => {
    clickHandler(idx);
  };

  const clickStat = () => {
    clickHandler(idx);
  };

  const clickLogout = () => {
    clickHandler(idx);
    signout();
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
