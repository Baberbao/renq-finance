import React from "react";
import { Box, Container, styled, TextField, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import bg from "../images/footerBG.png";
import CustomButton from "../Utils/CustomButton";

const Heading = styled(Typography)({
  fontWeight: 700,
  fontSize: "36px",
  textAlign: "center",
  color: "white",
});
const Paragraph = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  color: "white",
  textAlign: "center",
  marginTop: "30px",
});

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "30px",
});
const IconBox = styled(Box)({
  background: "#403866",
  borderRadius: "7px",
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    background: "#EF4D84",
  },
  transition: "0.4s",
  cursor: "pointer",
});

const inputStyle = {
  mt: "30px",
  width: "100%",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid #312F55",
  borderRadius: "55px",
  backdropFilter: "blur(8.5px)",
  fontFamily: "'Open Sans'",
  fontStyle: "normal",
  fontWeight: 700,
  color: "rgba(255, 255, 255, 0.31)",
  fontSize: "13px",

  "& label.Mui-focused": {
    color: "rgba(255, 255, 255, 0.31)",
  },
  "& .MuiInput-underline:after": {
    border: "1px solid #312F55",
    borderRadius: "55px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #312F55",
      borderRadius: "55px",
    },
    "&:hover fieldset": {
      border: "1px solid #312F55",
      borderRadius: "55px",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #312F55",
      borderRadius: "55px",
    },
  },
  input: {
    fontFamily: "'Open Sans'",
    fontStyle: "normal",
    color: "rgba(255, 255, 255, 0.31)",
    fontWeight: 700,
    fontSize: "13px",
    border: "1px solid #312F55",
    borderRadius: "55px",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "white",
    },
  },
};

const icons = [
  <TwitterIcon />,
  <FacebookIcon />,
  <i class="fa-brands fa-discord"></i>,
  <i class="fa-brands fa-tiktok"></i>,
  <YouTubeIcon />,
  <TelegramIcon />,
];

const Footer = () => {
  return (
    <Box
      sx={{ background: `url(${bg})`, backgroundSize: "100% 100%", py: "30px" }}
    >
      <Container>
        <Heading sx={{ fontWeight: 700, fontSize: { md: "36px", xs: "25px" } }}>
          Don't Miss Out, Stay Updated
        </Heading>

        <Container maxWidth="md">
          <TextField
            autoComplete="off"
            sx={inputStyle}
            id="standard-name"
            placeholder="Enter your email address"
            InputProps={{
              endAdornment: (
                <CustomButton
                  sx={{ fontWeight: 700, fontSize: { md: "20px", xs: "14px" } }}
                >
                  Subscribe
                </CustomButton>
              ),
            }}
          />
        </Container>
        <Container maxWidth="sm">
          <Paragraph>
            Don’t hesitate to subscribe to latest news about ICo markets as well
            as crucial financial knowledge to become successful investors
            globally
          </Paragraph>
        </Container>
        <Container maxWidth="xs">
          <FlexBox px="30px">
            {icons.map((icon, i) => (
              <IconBox key={i}>{icon}</IconBox>
            ))}
          </FlexBox>
        </Container>
      </Container>
      <Box
        sx={{
          height: "2px",
          background: "rgba(255, 255, 255, 0.08)",
          mt: "50px",
        }}
      ></Box>

      <Paragraph>© 2022. All rights reserved by Renq</Paragraph>
    </Box>
  );
};

export default Footer;
