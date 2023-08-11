import { Box, Drawer, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect, useState } from "react";
import { call } from "./api/ApiService";
import Menu from "./Menu";
import Search from "./Search";
import Drawer3 from "./drawer/Drawer3";
import Drawer2 from "./drawer/Drawer2";

export default function Main() {
  const [userId, setUserId] = useState("user123");
  const [noteData, setNoteData] = useState({});
  const [searchOpen, setSearchOpen] = useState(false); // Main -> Menu -> Note
  useEffect(() => {
    call(`/main/${userId}`, "GET", null);
  });

  return (
    <Box sx={{ display: "flex" }}>
      <Menu searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Drawer open={searchOpen} anchor="bottom">
        <Search />
      </Drawer>
    </Box>
  );
}
