import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Alert, Box, Collapse, CssBaseline, Divider, IconButton, Typography, useThemeProps } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { styled } from "@mui/material/styles";

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

    console.log("Selected Date:", formattedDate);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", width: "100%" }}>
      <Typography variant="h5" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        달력
      </Typography>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="error"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
          sx={{ mb: 2 }}
        >
          해당 날짜에 기록한 식단이 없습니다.
        </Alert>
      </Collapse>
      <Divider sx={{ my: 3 }} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={handleDateChange} />
      </LocalizationProvider>
    </Box>
  );
}
