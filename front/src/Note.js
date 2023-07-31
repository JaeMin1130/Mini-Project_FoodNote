import { Box, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Note() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", width: "100%" }}>
      <Typography variant="h5" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        기록하기
      </Typography>
      <Divider sx={{ my: 3 }} />
    </Box>
  );
}
