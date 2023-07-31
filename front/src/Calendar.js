import { Box, Divider, Typography } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Calendar() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", width: "100%" }}>
      <Typography variant="h5" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        달력
      </Typography>
      <Divider sx={{ my: 3 }} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Box>
  );
}
