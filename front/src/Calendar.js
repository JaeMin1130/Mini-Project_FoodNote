import { Box, Divider, Typography } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useState } from "react";
import AlertError from "./alert/AlertError";
dayjs.extend(advancedFormat); // Load the advancedFormat plugin for custom formatting

export default function Calendar(props) {
  const [open, setOpen] = useState(false);

  const formatDate = (date) => {
    return dayjs(date).format("YY-MM-DD");
  };

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    if (Object.keys(props.categorizedNoteData).includes(formattedDate)) {
      props.setDate(formattedDate);
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", width: "100%" }}>
      <Typography variant="h4" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        달력
      </Typography>
      <AlertError open={open} setOpen={setOpen} text={"해당 날짜에 기록한 식단이 없습니다."} />
      <Divider sx={{ my: 3 }} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleDateChange} />
      </LocalizationProvider>
    </Box>
  );
}
