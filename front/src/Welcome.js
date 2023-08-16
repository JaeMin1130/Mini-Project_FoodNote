import { Box, Button, Container, Link, Typography } from "@mui/material";
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
          <img src="/MealNote.png" alt="MealNote 로고" width="80%" height="20%" />
          <LogIn />
        </Box>
      </Box>
    </Container>
  );
};

export default Welcome;
