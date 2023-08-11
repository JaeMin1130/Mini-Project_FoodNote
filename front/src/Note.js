import React, { useCallback, useState } from "react";
import { Box, Button, Divider, Fab, Grid, IconButton, ToggleButtonGroup, useThemeProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDropzone } from "react-dropzone";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import ImageLoader from "./ImageLoader";
import NoteButton from "./NoteButton";
import FoodList from "./FoodList";
import Calculator from "./Calculator";
import NutritionTable from "./NutritionTable";
import Search from "./Search";
import Drawer2 from "./drawer/Drawer2";

export default function Note(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <ImageLoader />
      <Divider sx={{ my: 3 }} />
      <NoteButton />
      <Divider sx={{ my: 3 }} />
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={"bolder"}>
            식단
          </Typography>
          <Button onClick={() => props.setSearchOpen(!props.SearchOpen)}>음식 찾기</Button>
        </Box>
        <FoodList item={""} />
        <FoodList item={""} />
        <FoodList item={""} />
        <FoodList item={""} />
      </Box>
      <Divider sx={{ my: 3 }} />
      <Calculator />
      {/* <NutritionTable /> */}
    </Box>
  );
}
