import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import bg from "../images/bg.png";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";
import t5 from "../images/t5.png";
import t6 from "../images/t6.png";
import t7 from "../images/t7.png";
import t8 from "../images/t8.png";

export default function Tokens() {
  const tokenData = [
    {
      img: t1,
      head: "Renq Wallet",
      text: "The process of taking into account the collective opinion of a group",
    },
    {
      img: t2,
      head: "Renq Dex",
      text: "The process of taking into account the collective opinion of a group",
    },
    {
      img: t3,
      head: "Renq Aggregator ",
      text: "The process of taking into account the collective opinion of a group",
    },
    {
      img: t4,
      head: "Renq Farms",
      text: "The process of taking into account the collective opinion of a group",
    },

    {
      img: t6,
      head: "Renq Vault",
      text: "The process of taking into account the collective opinion of a group",
    },
    {
      img: t7,
      head: "Renq Lending Protocol ",
      text: "The process of taking into account the collective opinion of a group",
    },
    {
      img: t8,
      head: "Renq DeFi & NFT Launchpad",
      text: "The process of taking into account the collective opinion of a group",
    },
    {
      img: t5,
      head: "Renq Forums (DAO Governance)",
      text: "The process of taking into account the collective opinion of a group",
    },
  ];
  return (
    <>
      <Box
        py={4}
        sx={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            textAlign="center"
            mt={{ xs: 0, md: 8 }}
            fontFamily="Open Sans"
            fontWeight="700"
            fontSize={{ xs: "26px", md: "36px" }}
            color="#FFFFFF"
          >
            Why Choose Our Token?
          </Typography>
          <Typography
            textAlign="center"
            fontFamily="Open Sans"
            fontWeight="400"
            fontSize={{ xs: "13px", md: "14px" }}
            color="#FFFFFF"
          >
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            official
          </Typography>
          <Grid container spacing={3} my={5}>
            {tokenData.map(({ img, head, text }, i) => {
              return (
                <Grid
                  item
                  xs={6}
                  md={3}
                  key={i}
                  mt={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <img src={img} width="72px" height="72px" alt="" />
                  <Typography
                    mt={3}
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontWeight="700"
                    fontSize={{ xs: "18px", md: "20px" }}
                    color="#FFFFFF"
                  >
                    {head}
                  </Typography>
                  <Typography
                    mt={1}
                    textAlign="center"
                    fontFamily="Open Sans"
                    fontWeight="400"
                    fontSize={{ xs: "13px", md: "14px" }}
                    color="#FFFFFF"
                  >
                    {text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
