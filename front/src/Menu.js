import MenuIcon from "@mui/icons-material/Menu";
import { Box, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import Calendar from "./Calendar";
import MenuButton from "./MenuButton";
import Note from "./Note";
import Search from "./Search";
import Drawer from "./drawer/Drawer";
import Drawer2 from "./drawer/Drawer2";

export default function Menu(props) {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [open, setOpen] = useState(true);

  const clickHandler = (index) => {
    if (clicked[index]) setOpen(true);
    else setOpen(false);
    const newClicked = [false, false, false, false, false];
    newClicked[index] = !clicked[index];
    setClicked(newClicked);
  };

  const menuButtons = (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mx: 1, my: 4 }}>
        <MenuIcon
          sx={{
            fontSize: 50,
          }}
        />
        {open && (
          <Typography variant="h4" sx={{ ml: 1, opacity: open ? 1 : 0, transition: "opacity 0.3s ease" }}>
            Menu
          </Typography>
        )}
      </Box>
      <Box>
        {[0, 1, 2, 3, 4].map((idx) => (
          <MenuButton index={idx} open={open} clicked={clicked[idx]} clickHandler={clickHandler} />
        ))}
      </Box>
    </Box>
  );
  const eventTags = [
    <Search />,
    <Note noteData={props.noteData} setNoteData={props.setNoteData} date={props.date} />,
    <Calendar setDate={props.setDate} categorizedNoteData={props.categorizedNoteData} />,
    <Search />,
    <Search />,
  ];

  return (
    <Box>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        {open && menuButtons}
      </Drawer>
      {eventTags.map((eventTag, idx) => (
        <Drawer2 variant="permanent" open={clicked[idx]}>
          <Box sx={{ display: "flex" }}>
            {menuButtons}
            {clicked[idx] ? eventTag : null}
          </Box>
        </Drawer2>
      ))}
    </Box>
  );
}
