import ClearIcon from "@mui/icons-material/Clear";
import {
  Autocomplete,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { call } from "./api/ApiService";
import { useEffect, useState } from "react";
import NutritionTable from "./NutritionTable";

const Search = (props) => {
  const [foodData, setFoodData] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [logs, setLogs] = useState([]);
  const [foodInfo, setFoodInfo] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const json = call(`/main/searchLog/user123`, "GET", null);
    setLogs(json.data.reverse());
  }, []);

  // food 테이블에서 음식 조회(6번)
  const findFood = (keyword) => {
    if (keyword != "") {
      const json = call(`/main/search/${keyword}`, "GET", null);
      setFoodData(json.data);
    }
  };

  // 최근 검색어에서 음식 클릭시 상세 정보 띄우기
  const showFoodInfo = (e) => {
    const foodNo = e.target.textContent.split(".")[0].replace("No", "");
    findFood(foodNo);
  };

  // 검색 기록 삭제(11번)
  const deleteSearchWord = (keyword) => {
    call(`/main/searchLog/delete/${keyword.split(" ")[0]}`, "DELETE", null);
    setLogs((prevLogs) => {
      const updatedLogs = prevLogs.filter((item) => item.keyword !== keyword);
      return updatedLogs;
    });
  };

  // 검색어 저장(7번), 음식 상세정보 띄우기, 최근 검색어에 바로 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveSearchWord(e);
    }
  };

  const saveSearchWord = (e) => {
    const value = e.target.textContent;

    if (value != "") {
      call(`/main/search/log/${value}`, "DELETE", null);

      const foodNo = value.split(" ")[0].replace(".", "").replace("No", "");
      findFood(foodNo);

      setLogs(() => {
        let logList = [];
        if (
          logs.map((item) => {
            if (item.keyword == value) return true;
          })
        ) {
          logList = logs.filter((item) => item.keyword !== value);
        }

        if (logList.length >= 15) {
          logList.pop();
        }

        logList.unshift({ keyword: value });
        return Array.from(logList);
      });
    }
  };

  // 검색어 자동 완성(10번)
  const onInputChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) findFood(keyword);
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  useEffect(() => {
    if (foodData.length >= 1) {
      setFoodList(() => {
        const uniqueFoodsSet = new Set();
        if (foodData != undefined) {
          foodData.forEach((item) => {
            const foodName = item.brand !== "전국(대표)" ? item.name + " (" + item.brand + ")" : item.name;
            const foodNo = `No${item.no}`;
            uniqueFoodsSet.add(`${foodNo}. ${foodName}`);
          });
        }
        return Array.from(uniqueFoodsSet);
      });
      if (foodData.length == 1) {
        setFoodInfo(foodData);
      }
    }
  }, [foodData]);

  useEffect(() => {
    if (foodInfo.length != 0) {
      setOpen(true);
    }
  }, [foodInfo]);

  return (
    <Box sx={{ width: "27vw", height: "90vh" }}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "20%" }}>
        <Typography variant="h4" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
          음식 검색
        </Typography>
        <Autocomplete
          options={foodList}
          renderInput={(params) => <TextField {...params} label="Search" />}
          onInputChange={onInputChange}
          onChange={saveSearchWord}
          onKeyDown={handleKeyDown}
          sx={{ maxWidth: "25vw", ml: 2 }}
        />
      </Box>
      <Divider sx={{ my: 4 }} />
      {open && (
        <Box sx={{ my: 3, height: "45%", width: "100%" }}>
          <Typography variant="h5" sx={{ ml: 2, my: 3 }} fontWeight={"bolder"}>
            영양 정보
          </Typography>
          <NutritionTable foodInfo={foodInfo["0"]} />
        </Box>
      )}
      {open && <Divider sx={{ mb: 4 }} />}
      <Box sx={{ height: "30%", maxWidth: "98%" }}>
        <Typography variant="h5" sx={{ mb: 2, ml: 2 }} fontWeight={"bolder"}>
          최근 검색 항목
        </Typography>
        <Box sx={{ maxHeight: open ? "21vh" : "35vh", overflowY: "auto" }}>
          {logs.map((item) => (
            <List sx={{ display: "flex", p: 0 }}>
              <ListItem disablePadding>
                <IconButton onClick={(keyword) => deleteSearchWord(item.keyword)}>
                  <ClearIcon />
                </IconButton>
                <ListItemButton onClick={showFoodInfo}>
                  <ListItemText primary={item.keyword}></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </Box>
      </Box>
      <Divider sx={{ mt: 1 }} />
    </Box>
  );
};

export default Search;
