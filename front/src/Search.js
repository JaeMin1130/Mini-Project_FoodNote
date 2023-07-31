import { Autocomplete, Box, Divider, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Search = () => {
  const [foods, setFoods] = useState([]);
  const [keyword, setKeyword] = useState("");

  const fetchData = () => {
    const apiUrl = "http://10.125.121.173:8080/main/search/" + keyword;
    console.log(apiUrl);
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => setFoods(data.map((item) => item.name)))
      .catch((err) => {
        console.log(err);
      });
    console.log(foods);
  };

  const onInputChange = (e) => {
    setKeyword(e.target.value);
    if (keyword != "") {
      fetchData();
    }
    console.log(keyword);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", width: "100%" }}>
      <Typography variant="h5" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        음식 검색
      </Typography>
      <Autocomplete
        options={foods}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onInputChange={onInputChange}
        value={keyword}
        sx={{ mx: 2 }}
      />
      <Divider sx={{ my: 3 }} />
      <Typography variant="body1" sx={{ mx: 2 }} fontWeight={"bolder"}>
        최근 검색 항목
      </Typography>
    </Box>
  );
};

export default Search;
