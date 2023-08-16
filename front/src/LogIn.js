import { Box, Button, Container, CssBaseline, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "./api/api-config";
import AlertError from "./alert/AlertError";
import { useState } from "react";

export default function LogIn() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      userId: data.get("id"),
      password: data.get("password"),
    };
    const url = API_BASE_URL + "/users/login";

    try {
      const res = await axios.post(url, formData);
      if (res.status === 200) {
        const accessToken = res.headers["authorization"];
        localStorage.setItem("ACCESS_TOKEN", accessToken);
        localStorage.setItem("userId", data.get("id"));
        navigate("/main");
      }
    } catch (error) {
      setOpen(true);
      console.error("Error during API call:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="id" label="ID" name="id" autoFocus />
          <TextField
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            required
            fullWidth
          />
          <AlertError
            open={open}
            setOpen={setOpen}
            text={"아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: "10px", backgroundColor: "#47b8fd", color: "#white", fontWeight: "bold" }}
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
