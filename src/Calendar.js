import { Box, Divider, Typography } from "@mui/material";
import { DateCalendar, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";

import Badge from "@mui/material/Badge";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useEffect, useRef, useState } from "react";
import AlertError from "./alert/AlertError";

dayjs.extend(advancedFormat); // Load the advancedFormat plugin for custom formatting

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected = !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge key={props.day.toString()} overlap="circular" badgeContent={isSelected ? "✔" : undefined}>
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}
export default function Calendar(props) {
  const [open, setOpen] = useState(false);
  const today = props.today;

  const formatDate = (date) => {
    return dayjs(date).format("YY-MM-DD");
  };

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    if (Object.keys(props.categorizedNoteData).includes(formattedDate)) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    props.setDate(formattedDate);
  };

  const handleNoteDateChange = (date) => {
    const formattedDate = formatDate(date);
    const year = formattedDate.substring(0, 2);
    const month = formattedDate.substring(3, 5);
    const day = formattedDate.substring(6, 8);
    if (year > today.substring(0, 2) || month > today.substring(3, 5) || day > today.substring(6, 8)) {
      setOpen(true);
    } else {
      setOpen(false);
      props.setDate(formattedDate);
    }
  };

  function fakeFetch(month, { signal }) {
    return new Promise((resolve, reject) => {
      if (props.categorizedNoteData) {
        const daysToHighlight = Object.keys(props.categorizedNoteData)
          .filter((item) => item.substring(3, 5) === month)
          .map((item) => Number(item.substring(6, 8)));
        resolve({ daysToHighlight });

        signal.onabort = () => {
          reject(new DOMException("aborted", "AbortError"));
        };
      }
    });
  }

  const requestAbortController = useRef(null);
  const [highlightedDays, setHighlightedDays] = useState([]);

  const fetchHighlightedDays = (date) => {
    const formattedDate = formatDate(date);
    const controller = new AbortController();
    fakeFetch(formattedDate.substring(3, 5), {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(dayjs(props.today));
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return props.inNote ? (
    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mb: 1 }}>
      <Typography variant="h6" fontWeight={"bolder"}>
        기록일
      </Typography>
      {!open ? (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker defaultValue={dayjs(props.date)} onChange={handleNoteDateChange} />
        </LocalizationProvider>
      ) : (
        <AlertError open={open} setOpen={setOpen} text={"미래 날짜는 선택할 수 없습니다."} />
      )}
    </Box>
  ) : (
    <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", width: "100%" }}>
      <Typography variant="h4" sx={{ my: 5, mx: 2 }} fontWeight={"bolder"}>
        달력
      </Typography>
      <AlertError open={open} setOpen={setOpen} text={"해당 날짜에 기록한 식단이 없습니다."} />
      <Divider sx={{ my: 3 }} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={dayjs(props.today)}
          onMonthChange={handleMonthChange}
          onChange={handleDateChange}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
