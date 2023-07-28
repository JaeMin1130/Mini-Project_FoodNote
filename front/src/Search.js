import { Autocomplete, Grid, IconButton, Paper, TextField } from "@mui/material";
import { useState } from "react";

const Search = () => {
  const [foods, setFoods] = useState([]);
  const [keyword, setKeyword] = useState("");

  const fetchData = () => {
    const apiUrl = "http://localhost:8080/search/" + keyword;
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
    <Autocomplete
      options={foods}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
      onInputChange={onInputChange}
      value={keyword}
    />
  );
};

export default Search;
