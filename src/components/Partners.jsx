import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";

export default function Partners() {
  return (
    <>
      <Box
        py={2}
        sx={{
          backgroundColor: "#13073D",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            textAlign="center"
            fontFamily="Open Sans"
            fontWeight="700"
            fontSize={{ xs: "26px", md: "36px" }}
            color="#FFFFFF"
          >
            As seen in
          </Typography>
          <Marquee
            speed={50}
            pauseOnClick={true}
            pauseOnHover={true}
            gradient={false}
            // gradientColor={[255, 255, 255]}
            // gradientWidth={50}
            // style={{ paddingTop: "10px", paddingBottom: "10px" }}
          >
            <Box
              my={3}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <img src={m1} style={{ marginRight: "100px" }} alt="" />

              <img src={m2} style={{ marginRight: "100px" }} alt="" />

              <img src={m3} style={{ marginRight: "100px" }} alt="" />

              <img src={m4} style={{ marginRight: "100px" }} alt="" />
            </Box>
          </Marquee>
        </Container>
      </Box>
    </>
  );
}
