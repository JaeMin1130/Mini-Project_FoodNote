import CalculateIcon from "@mui/icons-material/Calculate";
import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material";

export default function Calculator(props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, ml: 2 }}>
      <Typography variant="h6" fontWeight={"bolder"}>
        영양소 계산하기
      </Typography>
      <Box>
        <TextField
          id="outlined-password-input"
          autoComplete="current-password"
          label="먹은 양 입력"
          InputProps={{
            endAdornment: <InputAdornment position="start">{props.unit}</InputAdornment>,
          }}
          size="small"
          sx={{ width: "50%" }}
        />
        <IconButton>
          <CalculateIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
