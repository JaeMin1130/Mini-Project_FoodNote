import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { call } from "./api/ApiService";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useEffect } from "react";

export default function FoodList(props) {
  const item = props.item;
  // 최근 검색어에서 음식 클릭시 상세 정보 띄우기
  const showFoodInfo = (e) => {
    const foodNo = e.target.textContent.split(".")[0].replace("No", "");
    call(`/main/search/${foodNo}`, "GET", null).then((data) => props.setFoodData(data));
  };

  // 검색 기록 삭제(11번)
  const deleteSearchWord = (keyword) => {
    if (props.inNote) {
      props.setNoteLogs((prevLogs) => {
        const updatedLogs = prevLogs.filter((item) => item.foodName !== keyword);
        return updatedLogs;
      });
    } else {
      call(`/main/searchLog/delete/${keyword.split(" ")[0]}`, "DELETE", null);
      props.setLogs((prevLogs) => {
        const updatedLogs = prevLogs.filter((item) => item.foodName !== keyword);
        return updatedLogs;
      });
    }
  };

  const deleteNote = () => {
    const id = item.id;
    call(`/main/delete/${id}`, "DELETE", null);
    const updatedNote = props.noteData.filter((note) => note.id !== id);
    props.setNoteData(updatedNote);
  };

  return props.inList ? (
    <ListItemButton sx={{ p: 0 }}>
      <ListItemIcon>
        <FiberManualRecordIcon sx={{ fontSize: "15px" }} />
      </ListItemIcon>
      <ListItemText primary={item.foodName + " " + item.amount + item.unit}></ListItemText>
      <IconButton onClick={deleteNote}>
        <ClearIcon />
      </IconButton>
    </ListItemButton>
  ) : (
    <List sx={{ display: "flex", p: 0 }}>
      <ListItem disablePadding>
        <IconButton onClick={() => deleteSearchWord(item.foodName)}>
          <ClearIcon />
        </IconButton>
        <ListItemButton onClick={(e) => showFoodInfo(e)}>
          <ListItemText
            primary={item.amount ? item.foodName + " " + item.amount + item.unit : item.foodName}
          ></ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
