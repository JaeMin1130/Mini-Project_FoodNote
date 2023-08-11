import { Container } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";

const Welcome = () => {
  return (
    <Container>
      <h1>Welcome to Our Website!</h1>
      <p>
        Thank you for visiting our website. We are excited to have you here! Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed tincidunt purus in velit feugiat, sit amet feugiat massa tristique.
      </p>
      <Link href="login" role="button">
        로그인
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link href="join" role="button">
        회원가입
      </Link>
    </Container>
  );
};

export default Welcome;
