import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";

import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function NutritionTable(props) {
  const foodData = props.foodData;
  const noteValue = props.noteValue;
  const noteLogs = props.noteLogs;
  const amount = props.amount;

  useEffect(() => {
    if (foodData) {
      props.setAmount(foodData.serving_size);
    }
  }, [foodData]);

  const keyList = {
    calories: "칼로리(㎉)",
    carbohydrate: "탄수화물(g)",
    protein: "단백질(g)",
    fat: "지방(g)",
    sugars: "당(g)",
    sodium: "나트륨(mg)",
    cholesterol: "콜레스테롤(mg)",
    caffeine: "카페인(mg)",
  };

  const unit = ["kcal", "g", "g", "g", "g", "mg", "mg", "mg"];

  const handleInputChange = (event) => {
    const debounce = setTimeout(() => {
      props.setAmount(event.target.value);
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  };

  const onClickHandler = () => {
    if (noteLogs) {
      const target = noteLogs.filter((item) => item.foodName.includes(foodData.no));

      target["0"].amount = amount;
      Object.keys(noteValue).forEach((key) => {
        target["0"][key] = noteValue[key];
      });
      target["0"].serving_size = foodData.serving_size;
      target["0"].unit = foodData.unit;
      target["0"].brand = foodData.brand;
      target["0"].userId = localStorage.getItem("userId");

      const idx = noteLogs.findIndex((item) => item.foodName === target[0].foodName);
      props.setNoteLogs((prevLogs) => {
        const updatedLogs = [...prevLogs];
        updatedLogs[idx] = target[0];
        return updatedLogs;
      });
    }
  };

  useEffect(() => {
    if (foodData) {
      props.setNoteValue(() => {
        let note = {};
        Object.keys(foodData).forEach((key) => {
          if (Object.keys(keyList).includes(key)) {
            const value = Math.round(foodData[key] * (amount / foodData.serving_size), 2);
            note[key] = value;
          }
        });
        return note;
      });
    }
  }, [foodData, amount]);

  return (
    props.noteValue && (
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, ml: 2 }}>
          <Typography variant="h6" fontWeight={"bolder"}>
            영양소 계산하기
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
            <TextField
              label="먹은 양 입력"
              InputProps={{
                endAdornment: <InputAdornment position="start">{foodData.unit}</InputAdornment>,
              }}
              size="small"
              sx={{ width: "60%" }}
              onChange={handleInputChange}
              autoFocus
              defaultValue={foodData.serving_size}
            />
            {props.inNote && (
              <IconButton>
                <AddIcon onClick={onClickHandler} />
              </IconButton>
            )}
          </Box>
        </Box>
        <TableContainer sx={{ bgcolor: "transparent" }}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>{foodData.name} </TableCell>
                <TableCell>1회 제공량당 함량({foodData.serving_size + " " + foodData.unit})</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(keyList).map((key, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th">{keyList[key]}</TableCell>
                  <TableCell component="th">{props.noteValue[key] + " " + unit[idx]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  );
}
