import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function NoteButton() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      <Typography variant="h6" fontWeight={"bolder"}>
        식사 시간
      </Typography>
      <RadioGroup row>
        <FormControlLabel value="아침" control={<Radio />} label="아침" />
        <FormControlLabel value="점심" control={<Radio />} label="점심" />
        <FormControlLabel value="저녁" control={<Radio />} label="저녁" />
      </RadioGroup>
    </Box>
  );
}
