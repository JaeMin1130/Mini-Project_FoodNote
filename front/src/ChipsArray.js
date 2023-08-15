import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray(props) {
  const nutrition = props.data;
  const chipData = [
    { key: "칼", label: nutrition.reduce((total, item) => total + item.calories, 0) + "kcal" },
    { key: "탄", label: nutrition.reduce((total, item) => total + item.carbohydrate, 0) + "g" },
    { key: "단", label: nutrition.reduce((total, item) => total + item.protein, 0) + "g" },
    { key: "지", label: nutrition.reduce((total, item) => total + item.fat, 0) + "g" },
    { key: "당", label: nutrition.reduce((total, item) => total + item.sugars, 0) + "g" },
    { key: "나", label: nutrition.reduce((total, item) => total + item.sodium, 0) + "mg" },
    { key: "콜", label: nutrition.reduce((total, item) => total + item.cholesterol, 0) + "mg" },
    { key: "카", label: nutrition.reduce((total, item) => total + item.caffeine, 0) + "mg" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((item) => (
        <ListItem key={item.key}>
          <Chip label={item.key + " " + item.label} />
        </ListItem>
      ))}
    </Box>
  );
}
