import { Box, Container } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";
import LogIn from "./LogIn";
import "./Welcome.css";
import { Grid } from "@mui/material";

const Welcome = () => {
  return (
    <Container className="container">
      <div id="a1" className="c1">
        <div id="a2">
          <img src="/food1.gif" alt="Food GIF" width="540" height="300" />
        </div>
        <div className="c2">
          <div id="a3" className="image-container">
            <img src="/NutriScan.png" alt="NutriScan Logo" className="logo-image" />
            <LogIn />
          </div>
          <div className="grid1">
            <Grid marginRight="25px" fontSize={16}>
              Don't have an account?
              <Link href="/join" variant="body2" marginLeft="5px" marginRight="16px" fontSize={16}>
                {"  Sign Up"}
              </Link>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;
