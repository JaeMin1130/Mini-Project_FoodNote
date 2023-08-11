import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "./api/api-config";

export default function LogIn() {
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
        // Extract authorization token from headers
        const accessToken = res.headers["authorization"];
        console.log("token", accessToken);
        localStorage.setItem("ACCESS_TOKEN", accessToken);
        console.log("token", localStorage.getItem("ACCESS_TOKEN"));
        navigate("/main");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      // Handle error or show error message to the user
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 3,
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
