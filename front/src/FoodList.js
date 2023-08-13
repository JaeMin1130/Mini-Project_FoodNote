import { IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { call } from "./api/ApiService";

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

  return (
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
