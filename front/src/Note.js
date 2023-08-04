import React, { useCallback, useState } from "react";
import { Box, Button, Divider, Fab, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDropzone } from "react-dropzone";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import ImageLoader from "./ImageLoader";
import Search from "./Search";
export default function Note() {
  return (
    <Box sx={{ width: "26vw", height: "90vh" }}>
      <Typography variant="h4" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        기록하기
      </Typography>
      <Divider sx={{ width: "27vw", mb: 3 }} />
      <ImageLoader />
      {/* <Search /> */}
    </Box>
  );
}
