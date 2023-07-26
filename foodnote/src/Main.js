import AddIcon from "@mui/icons-material/Add";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Box, Fab, Grid } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import * as React from "react";
import List from "./List";
import NutritionFact from "./NutritionFact";

export default function Main() {
  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "MobileDatePicker", "DesktopDatePicker", "StaticDatePicker"]}>
              <DemoItem label="Responsive variant">
                <DatePicker />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List />
        </Grid>
        <Grid item xs={6}>
          <List />
        </Grid>
      </Grid>
      <NutritionFact />
      <Fab color="primary" aria-label="add" href="/note">
        <AddIcon />
      </Fab>
      <Fab color="primary" aria-label="add">
        <EqualizerIcon />
      </Fab>
    </Grid>
  );
}
