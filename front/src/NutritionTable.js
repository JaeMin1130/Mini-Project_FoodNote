import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function NutritionTable(props) {
  const info = props.foodInfo;
  const [amount, setAmount] = useState(props.foodInfo.serving_size);
  const [noteValue, setNoteValue] = useState([]);

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
    setAmount(event.target.value);
  };

  useEffect(() => {
    if (info) {
      console.log("info", info);
      // setAmount(info.serving_size);

      // console.log("info.serving_size", info.serving_size);
      console.log("amount", amount / info.serving_size);

      setNoteValue(() => {
        let note = {};
        Object.keys(info).forEach((key) => {
          if (Object.keys(keyList).includes(key)) {
            console.log("key", key);
            const value = Math.round(info[key] * (amount / info.serving_size), 2);
            note[key] = value;
            console.log("value", value);
          }
        });
        return note;
      });
    }
  }, [amount]);

  useEffect(() => {
    console.log("noteValue", noteValue);
  }, [noteValue]);

  // useEffect(() => {
  //   console.log("amount", amount);
  //   if (info) {
  //     const debounce = setTimeout(() => {
  //       setInfo((prevInfo) => {
  //         const updatedInfo = { ...prevInfo };
  //         Object.keys(prevInfo).forEach((key) => {
  //           if (Object.keys(keyList).includes(key)) {
  //             updatedInfo[key] = Math.round(prevInfo[key] * (amount / prevInfo.serving_size), 2);
  //           }
  //         });
  //         return updatedInfo;
  //       });
  //     }, 500);
  //     return () => {
  //       clearTimeout(debounce);
  //     };
  //   }
  // }, [amount]);

  return (
    noteValue &&
    info && (
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, ml: 2 }}>
          <Typography variant="h6" fontWeight={"bolder"}>
            영양소 계산하기
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <TextField
              label="먹은 양 입력"
              InputProps={{
                endAdornment: <InputAdornment position="start">{info.unit}</InputAdornment>,
              }}
              size="small"
              sx={{ width: "80%" }}
              onChange={handleInputChange}
            />
            {/* <Button variant="outlined" onClick={(e) => onClickHandler(e)}>
              계산
            </Button> */}
          </Box>
        </Box>
        <TableContainer sx={{ bgcolor: "transparent" }}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>{info.name} </TableCell>
                <TableCell>1회 제공량당 함량({info.serving_size + " " + info.unit})</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(keyList).map((key, idx) => (
                <TableRow key={noteValue[key]}>
                  <TableCell component="th" scope="info">
                    {keyList[key]}
                  </TableCell>
                  <TableCell component="th" scope="info">
                    {noteValue[key] + " " + unit[idx]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  );
}
