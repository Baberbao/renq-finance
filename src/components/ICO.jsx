import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import ico from "../images/ico.png";
import image from "../images/image.png";

export default function ICO() {
  return (
    <>
      <Box
        py={5}
        sx={{
          backgroundColor: "#050330",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItem="center"
            >
              <Box>
                <img src={ico} width="100%" alt="" />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              //   justifyContent="center"
              alignItem="center"
              flexDirection="column"
            >
              <Typography
                mt={{ xs: 0, md: 8 }}
                fontFamily="Open Sans"
                fontWeight="700"
                fontSize={{ xs: "26px", md: "36px" }}
                color="#FFFFFF"
              >
                What is ICO?
              </Typography>
              <Typography
                fontFamily="Open Sans"
                fontWeight="400"
                fontSize={{ xs: "13px", md: "14px" }}
                color="#FFFFFF"
              >
                The world first platform to reward investors and traders build
                on ICO
              </Typography>
              <Box ml={2} mt={5} display="flex">
                <img src={image} height="246px" alt="" />
                <Box ml={3}>
                  <Typography
                    fontFamily="Open Sans"
                    fontWeight="700"
                    fontSize={{ xs: "20px", md: "20px" }}
                    color="#FFFFFF"
                  >
                    Decentralized Platform
                  </Typography>
                  <Typography
                    fontFamily="Open Sans"
                    fontWeight="400"
                    fontSize={{ xs: "14px", md: "14px" }}
                    color="#FFFFFF"
                  >
                    The platform helps investors to make easy to purchase and
                    sell their tokens
                  </Typography>
                  <Typography
                    mt={4}
                    fontFamily="Open Sans"
                    fontWeight="700"
                    fontSize={{ xs: "20px", md: "20px" }}
                    color="#FFFFFF"
                  >
                    Crowd Wisdom{" "}
                  </Typography>
                  <Typography
                    fontFamily="Open Sans"
                    fontWeight="400"
                    fontSize={{ xs: "14px", md: "14px" }}
                    color="#FFFFFF"
                  >
                    The process of taking into account the collective opinion of
                    a group sell their
                  </Typography>
                  <Typography
                    mt={4}
                    fontFamily="Open Sans"
                    fontWeight="700"
                    fontSize={{ xs: "20px", md: "20px" }}
                    color="#FFFFFF"
                  >
                    Decentralized Platform
                  </Typography>
                  <Typography
                    fontFamily="Open Sans"
                    fontWeight="400"
                    fontSize={{ xs: "14px", md: "14px" }}
                    color="#FFFFFF"
                  >
                    The platform helps investors to make easy to purchase and
                    sell their tokens
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
