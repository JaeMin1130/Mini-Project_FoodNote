import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import LogIn from "./LogIn";

const Welcome = () => {
  return (
    <Container>
      <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* 첫 번째 열 */}
        <Box
          sx={{
            width: "45%",
            height: "60%",
          }}
        >
          <img
            src="/i.gif"
            alt="food"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        {/* 두 번째 열 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            border: "1px solid rgb(189, 188, 188)",
            width: "35%",
            height: "60%",
            marginLeft: -11,
            zIndex: 1,
          }}
        >
          <img src="/NutriScan.png" alt="NutriScan 로고" width="80%" />
          <LogIn />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <Typography variant="body1">"Don't have an account?"</Typography>
            <Link href="/join" variant="body2" fontSize={16}>
              {"Sign Up "}
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Welcome;
