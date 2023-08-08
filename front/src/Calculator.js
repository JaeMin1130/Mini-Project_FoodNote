import { Box, Divider, InputAdornment, TextField, Typography } from "@mui/material";

export default function Calculator() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mb: 2 }}>
      <Typography variant="h6" fontWeight={"bolder"}>
        영양소 계산하기
      </Typography>
      <TextField
        id="outlined-password-input"
        autoComplete="current-password"
        label="먹은 양 입력"
        InputProps={{
          endAdornment: <InputAdornment position="start">g</InputAdornment>,
        }}
        size="small"
      />
    </Box>
  );
}
