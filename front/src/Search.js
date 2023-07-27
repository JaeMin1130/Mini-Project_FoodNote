import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Grid, IconButton, TextField } from "@mui/material";
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
    <Grid item xs={4} sx={{ mt: 2, display: "flex", alignItems: "center" }}>
      <Autocomplete
        options={foods}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onInputChange={onInputChange}
        value={keyword}
      />
      <IconButton>
        <SearchIcon sx={{ ml: 2, fontSize: 40 }} />
      </IconButton>
    </Grid>
  );
};

export default Search;
