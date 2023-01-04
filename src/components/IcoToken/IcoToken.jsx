import React from "react";

import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";

import IcoTokenImg from "./IcoToken.png";
const IcoHeading = styled(Box)({
  fontFamily: "Open Sans",
  fontWeight: 700,
  fontSize: "20px",
  color: "#FFFFFF",
});
const IcoText = styled(Box)({
  fontFamily: "Open Sans",
  fontSize: "14px",
  color: "#FFFFFF",
});
const IcoToken = () => {
  const matches = useMediaQuery("(max-width:700px)");
  const IcoArray = [
    {
      heading: "End",
      text: "Feb 10, 2022 (9:00AM GMT)",
    },
    {
      heading: "Number Of Tokens For Sale",
      text: "1.000.000 Tokens",
    },
    {
      heading: "Tokens Exchange Rate",
      text: "1 ETH = 650 ICC, 1 BTC = 1940 ICC",
    },
    {
      heading: "Minimal Transaction",
      text: "10 Tokens / Transaction",
    },
    {
      heading: "Acceptable Curencies",
      text: "ETH, BTC, LTC",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#050330", py: 1 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontWeight: 700,
            fontSize: "36px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          ICO Token Details
        </Typography>
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontSize: "14px",
            color: "#FFFFFF",
            textAlign: "center",
            my: "0.5rem",
          }}
        >
          Join the industry leaders to discuss where the markets are heading. We
          accept token payments.
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={6} md={4} my={2}>
            <Box
              sx={{
                border: "1px solid #ffffff",
                p: 2,
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <Box
                sx={{
                  p: 1,
                  background:
                    "linear-gradient(90.1deg, #4889DA 0.08%, #FB497F 101.84%)",
                  borderRadius: "6px",
                  my: "1rem",
                }}
              >
                <IcoHeading>Start</IcoHeading>
                <IcoText>Aug 8, 2021 (9:00AM GMT)</IcoText>
              </Box>
              {IcoArray.map(({ heading, text }, index) => {
                return (
                  <>
                    <Box
                      key={index}
                      sx={{
                        p: 1,
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "6px",
                        my: "1rem",
                      }}
                    >
                      <IcoHeading>{heading}</IcoHeading>
                      <IcoText>{text}</IcoText>
                    </Box>
                  </>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6.5}>
            <img
              src={IcoTokenImg}
              alt=""
              style={{ width: !matches ? "90%" : "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IcoToken;
