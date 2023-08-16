import { Box, Divider, Typography } from "@mui/material";

export default function Statistic() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" fontWeight={"bolder"} sx={{ mt: 5, mx: 2 }}>
        통계
      </Typography>
      <Divider sx={{ my: 3 }} />
    </Box>
  );
}
