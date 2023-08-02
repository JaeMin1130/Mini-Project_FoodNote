import ClearIcon from "@mui/icons-material/Clear";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const openedMixin = (theme) => ({
  width: "15vw",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      flexDirection: "column", // Set the direction to column
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Search = (props) => {
  const [data, setData] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [logs, setLogs] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const url = "http://10.125.121.173:8080/main/searchLog/user123";
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setLogs(data.reverse()))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // food 테이블에서 음식 조회(6번)
  const findFood = (foodNo) => {
    if (foodNo != "") {
      const url = `http://10.125.121.173:8080/main/search/${foodNo}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // 최근 검색어에서 음식 클릭시 상세 정보 띄우기
  const showFoodInfo = (e) => {
    console.log(e.target.textContent);
    findFood(e.target.textContent);
  };

  // 검색 기록 삭제(11번)
  const deleteSearchWord = (keyword) => {
    const url = `http://10.125.121.173:8080/main/searchLog/delete/${keyword.split(" ")[0]}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    });
    setLogs((prevLogs) => {
      const updatedLogs = prevLogs.filter((item) => item.keyword !== keyword);
      return updatedLogs;
    });
  };

  // 검색어 저장(7번), 음식 상세정보 띄우기, 최근 검색어에 바로 추가
  const saveSearchWord = (e) => {
    const value = e.target.textContent;
    if (value != "") {
      const url = "http://10.125.121.173:8080/main/search/log/" + value;
      fetch(url).catch((err) => console.log(err));

      const foodNo = value.split(" ")[0].replace(".", "").replace("No", "");
      setFoodInfo(data.filter((item) => item.no == foodNo));
      setOpen(true);

      setLogs(() => {
        const logList = [...logs];
        if (logList.length >= 15) {
          logList.pop();
        }
        logList.unshift({ keyword: value });
        return Array.from(logList);
      });
    }
  };

  // useEffect(() => {
  //   console.log(foodInfo);
  //   console.log(open);
  // }, [foodInfo]);

  // 검색어 자동 완성(10번)
  const onInputChange = (e) => {
    setKeyword(e.target.value);
    findFood(keyword);
    setFoodList(() => {
      const uniqueFoodsSet = new Set();
      if (data != undefined) {
        data.forEach((item) => {
          const foodName = item.brand !== "전국(대표)" ? item.name + " (" + item.brand + ")" : item.name;
          const foodNo = `No${item.no}`;
          uniqueFoodsSet.add(`${foodNo}. ${foodName}`);
        });
      }
      return Array.from(uniqueFoodsSet);
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
          음식 검색
        </Typography>
        <Autocomplete
          options={foodList}
          renderInput={(params) => <TextField {...params} label="Search" />}
          onInputChange={onInputChange}
          onChange={saveSearchWord}
          sx={{ maxWidth: "18vw", ml: 2 }}
        />
      </Box>
      <Box>
        <Typography variant="body1" sx={{ mx: 2, my: 2 }} fontWeight={"bolder"}>
          최근 검색 항목
        </Typography>
        <Box sx={{ maxHeight: "27vh", maxWidth: "19.6vw", overflowY: "auto", overflowX: "auto" }}>
          {logs.map((item) => (
            <List sx={{ display: "flex" }}>
              <ListItem disablePadding>
                <IconButton onClick={(keyword) => deleteSearchWord(item.keyword)}>
                  <ClearIcon />
                </IconButton>
                <ListItemButton>
                  <ListItemText primary={item.keyword}></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </Box>
        <Divider sx={{ my: 0 }} />
      </Box>
      {/* <Drawer variant="permanent" open={open} anchor="top"> */}
      {open && (
        <Box>
          <Typography>{foodInfo.no}</Typography>
        </Box>
      )}
      {/* </Drawer> */}
    </Box>
  );
};

export default Search;
