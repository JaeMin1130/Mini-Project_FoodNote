import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const Search = (props) => {
  const [data, setData] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [logs, setLogs] = useState([]);

  const fetchData = (url) => {
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const url = "http://10.125.121.173:8080/main/searchLog/user123";
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setLogs(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [searchWords, setSearchWords] = useState();
  useEffect(() => {
    {
      setSearchWords(
        <List>
          {logs.map((item) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item.keyword} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      );
    }
  }, [logs]);

  const saveSearchWord = (event, value) => {
    if (value != null) {
      const url2 = "http://10.125.121.173:8080/main/search/log/" + value;
      fetch(url2).catch((err) => console.log(err));

      setLogs(() => {
        const logList = [...logs];
        logList.push(value);
        return Array.from(logList);
      });
    }
  };

  const onInputChange = (e) => {
    setKeyword(e.target.value);
    if (keyword != "") {
      const url1 = "http://10.125.121.173:8080/main/search/" + keyword;
      fetchData(url1);
    }
    setFoodList(() => {
      const uniqueFoodsSet = new Set();
      if (data != undefined) {
        data.forEach((item) => {
          const foodName = item.brand !== "전국(대표)" ? item.name + " (" + item.brand + ")" : item.name;
          uniqueFoodsSet.add(foodName);
        });
      }
      return Array.from(uniqueFoodsSet);
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", width: "100%" }}>
      <Typography variant="h5" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        음식 검색
      </Typography>
      <Autocomplete
        options={foodList}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onInputChange={onInputChange}
        onChange={saveSearchWord}
        sx={{ mx: 2 }}
      />
      <Divider sx={{ my: 3 }} />
      <Typography variant="body1" sx={{ mx: 2 }} fontWeight={"bolder"}>
        최근 검색 항목
      </Typography>
      {searchWords}
    </Box>
  );
};

export default Search;
