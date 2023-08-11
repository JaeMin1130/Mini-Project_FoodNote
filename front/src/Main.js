import { useEffect, useState } from "react";
import Menu from "./Menu";
import { call } from "./api/ApiService";

export default function Main() {
  const [userId, setUserId] = useState("user123");
  const [noteData, setNoteData] = useState({});
  const [searchOpen, setSearchOpen] = useState(false); // Main -> Menu -> Note
  useEffect(() => {
    call(`/main/${userId}`, "GET", null);
  });

  return <Menu searchOpen={searchOpen} setSearchOpen={setSearchOpen} />;
}
