import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import AlertError from "./alert/AlertError";
import AlertSuccess from "./alert/AlertSuccess";
import { API_BASE_URL } from "./api/api-config";

export default function Join() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget); // Use event.currentTarget directly

    const formData = {
      userId: data.get("id"),
      password: data.get("password"),
    };

    console.log("id:", formData.userId);
    console.log("Password:", formData.password);

    const url = API_BASE_URL + "/users/join";

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.status === 200) {
        setOpen1(true);
      } else {
        setOpen(true);
      }
    });
  };

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 15 }}>
        <AppBar sx={{ backgroundColor: "white", height: 75 }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ mt: 2, flexGrow: 1, color: "grey" }}>
              <img src="./MealNote.png" alt="MealNote 로고" width={180} height={65} />
            </Typography>
            <Box>
              <Button
                color="inherit"
                sx={{ color: "rgb(59, 58, 58)", fontSize: "1.4rem", fontWeight: "bold", marginRight: 4 }}
                onClick={() => navigate("/MiniProject_MealNote/")}
              >
                Home
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <CssBaseline />

      <Box sx={{ height: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            width: 500,
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            border: "1px solid rgb(189, 188, 188)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="rgb(59, 58, 58)">
            {"Sign up"}
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="gray">
            식단을 기록하고 영양성분을 확인해보세요.
          </Typography>
          <Box
            noValidate
            sx={{
              height: "50%",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField required fullWidth id="id" label="ID" name="id" autoComplete="id" />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <Box>
              <AlertError open={open} setOpen={setOpen} text={"이미 존재하는 아이디입니다."} />
              {open1 && (
                <Box>
                  <AlertSuccess open={open1} setOpen={setOpen1} text={"회원가입이 완료되었습니다."} />
                  {/* <ListItemButton onClick={() => navigate("/MiniProject_MealNote/")} color="info">
                    <ListItemText primary="로그인 페이지로 이동하기"></ListItemText>
                  </ListItemButton> */}
                </Box>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#47b8fd",
                  color: "#white",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
