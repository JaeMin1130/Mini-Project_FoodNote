import AddIcon from "@mui/icons-material/Add";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import * as React from "react";
import List from "./List";
import NutritionFact from "./NutritionFact";
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function Main() {
  return (
    <Box>
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <Typography variant="h2">Today's Note</Typography>
        </Grid>
        <Grid item xs={4} sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <TextField fullWidth placeholder="검색어를 입력해 주세요." label="Search" />
          <IconButton>
            <SearchIcon sx={{ ml: 2, fontSize: 40 }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List />
          <List />
        </Grid>
        <Grid item xs={6}>
          <List />
          <List />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Fab color="primary" aria-label="edit" href="/note">
            <EditIcon />
          </Fab>
          <Fab color="primary" sx={{ ml: 2, mr: 2 }} aria-label="add">
            <EqualizerIcon />
          </Fab>
          <Fab color="primary" aria-label="add">
            <LogoutIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
