import { Autocomplete, Box, Divider, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FoodList from "./FoodList";
import NutritionTable from "./NutritionTable";
import { call } from "./api/ApiService";
const Search = (props) => {
  const [foodData, setFoodData] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [logs, setLogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [noteValue, setNoteValue] = useState([]);
  const [amount, setAmount] = useState(0);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    call(`/main/searchLog/${userId}`, "GET", null)
      .then((data) => {
        setLogs(data.reverse());
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // food 테이블에서 음식 조회(6번)
  const findFood = (keyword) => {
    if (keyword !== "") {
      call(`/main/search/${keyword}`, "GET", null).then((data) => {
        if (data) {
          setFoodData(data.reverse());
        }
        if (props.inNote) {
          props.setFoodData(data);
        }
      });
    }
  };

  // 검색어 저장(7번), 음식 상세정보 띄우기, 최근 검색어에 바로 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      saveSearchWord(e);
    }
  };

  const saveSearchWord = (e) => {
    const value = e.target.textContent;
    setKeyword("");
    if (value !== "") {
      call(`/main/searchLog/save/${value}`, "GET", null);

      const foodNo = value.split(" ")[0].replace(".", "").replace("No", "");
      findFood(foodNo);

      setLogs(() => {
        let logList = [];
        if (
          logs.map((item) => {
            if (item.foodName === value) return true;
          })
        ) {
          logList = logs.filter((item) => item.foodName !== value);
        }
        if (logList.length >= 15) {
          logList.pop();
        }
        logList.unshift({ foodName: value });
        return Array.from(logList);
      });
      if (props.inNote) {
        props.setNoteLogs([...props.noteLogs, { foodName: value, amount: 0 }]);
      }
    }
  };
  // 검색어 자동 완성(10번)
  const onInputChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) {
        findFood(keyword);
      }
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  useEffect(() => {
    if (foodData.length >= 1) {
      setFoodList(() => {
        const uniqueFoodsSet = new Set();
        if (foodData !== undefined) {
          foodData.forEach((item) => {
            const foodName = item.brand !== "전국(대표)" ? item.name + " (" + item.brand + ")" : item.name;
            const foodNo = `No${item.no}`;
            uniqueFoodsSet.add(`${foodNo}. ${foodName}`);
          });
        }
        return Array.from(uniqueFoodsSet);
      });
      if (foodData.length === 1) {
        setOpen(true);
      }
    }
  }, [foodData]);

  return props.inNote ? (
    <Autocomplete
      options={foodList}
      renderInput={(params) => <TextField {...params} label="음식 찾기" />}
      onInputChange={onInputChange}
      onChange={saveSearchWord}
      onKeyDown={handleKeyDown}
      size="small"
      sx={{ width: "240px" }}
    />
  ) : (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ mt: 5, mx: 2 }}>
        <Typography variant="h4" fontWeight={"bolder"}>
          음식 검색
        </Typography>
        <Autocomplete
          options={foodList}
          renderInput={(params) => <TextField {...params} label="Search" />}
          onInputChange={onInputChange}
          onChange={saveSearchWord}
          onKeyDown={handleKeyDown}
          sx={{ my: 3, width: "80%" }}
          autoFocus
        />
      </Box>
      <Divider sx={{ my: 3 }} />
      {open && (
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ ml: 2, my: 3 }} fontWeight={"bolder"}>
            영양 정보
          </Typography>
          <NutritionTable
            foodData={foodData["0"]}
            noteValue={noteValue}
            setNoteValue={setNoteValue}
            amount={amount}
            setAmount={setAmount}
          />
        </Box>
      )}
      <Box>
        <Typography variant="h5" sx={{ mb: 2, ml: 2 }} fontWeight={"bolder"}>
          최근 검색 항목
        </Typography>
        <Box sx={{ maxHeight: open ? "21vh" : "35vh", overflowY: "auto" }}>
          {logs.map((item) => (
            <FoodList setFoodData={setFoodData} setLogs={setLogs} item={item} inSearch={true} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
