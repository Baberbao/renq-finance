import React from "react";

import {
  Box,
  Container,
  Grid,
  Slider,
  styled,
  Typography,
} from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

import homeimg from "../../images/homeimg.png";
import Vector from "../../images/Vector.png";
import youtube from "../../images/youtube.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import tictok from "../../images/tiktok.png";
import discord from "../../images/discord.png";
import cardicon1 from "../../images/cardicon1.png";
import cardicon2 from "../../images/cardicon2.png";
import cardicon3 from "../../images/cardicon3.png";
import cardicon4 from "../../images/cardicon4.png";

import CustomButton from "../../Utils/CustomButton";
import Header from "../Header";

const Paragraph = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "19px",
  color: "#FFFFFF",
});

const Paragraph2 = styled(Typography)({
  fontFamily: "'Prompt'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "19px",
  color: "#FFFFFF",
});

const MianHeading = styled(Typography)({
  fontFamily: "'Prompt'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "128.2%",
  color: "#FFFFFF",
});

const marks = [
  {
    value: 16,
  },
  {
    value: 50,
  },
  {
    value: 85,
  },
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: "#4889DA",
  height: "33px",
  padding: "15px 0",
  borderRadius: "29px",
  "& .MuiSlider-thumb": {
    visibility: "hidden",
  },

  "& .MuiSlider-track": {
    border: "none",
    backgroundImage: "linear-gradient(90.1deg, #4889DA 0.08%, #FB497F 101.84%)",
  },
  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#ffff",
    height: "37px",
    width: 2,
    color: "#ffff",
  },
}));
const cardImage = [cardicon1, cardicon2, cardicon3, cardicon4];
const data = [twitter, facebook, Vector, youtube, tictok, discord];

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${homeimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Header />
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            display="flex"
            py={7}
          >
            <Grid item md={6} xs={12}>
              <Box>
                <Paragraph2
                  sx={{
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "29px",
                    width: "fit-content",
                    height: "33px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    pr: 1.5,
                    py: 2.5,
                  }}
                >
                  <Paragraph2
                    sx={{
                      width: "100px",
                      height: "26px",
                      background: "#FFFFFF",
                      borderRadius: "29px",
                      color: "black",
                      m: "5px",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center",
                      py: 2,
                      mr: 1,
                    }}
                  >
                    75% SAVE
                  </Paragraph2>
                  For the Black Friday weekend
                </Paragraph2>

                {/* Main Heading */}

                <MianHeading mt={3}>
                  Powering Data For The New Equity Blockchain.
                </MianHeading>
                <Paragraph my={4}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </Paragraph>

                <Box my={4} gap={3} display={"flex"} flexWrap="wrap">
                  <CustomButton
                    endIcon={
                      <ExpandCircleDownIcon
                        style={{
                          fontSize: "25px",
                          transform: "rotate(270deg)",
                        }}
                      />
                    }
                    sx={{ width: { xs: "100%", md: "auto" }, pl: 1.5 }}
                  >
                    REGISTER & BUY TOKEN NOW
                  </CustomButton>
                  <CustomButton
                    startIcon={
                      <DownloadForOfflineIcon style={{ fontSize: "25px" }} />
                    }
                    mt={{ md: 0, xs: 2 }}
                    sx={{ width: { xs: "100%", md: "auto" }, pr: 1.5 }}
                  >
                    WhitePaper
                  </CustomButton>
                </Box>

                {/*  icon of this sections */}

                <Box gap={3} display="flex">
                  {data.map((item, index) => {
                    return (
                      <img
                        key={index}
                        src={item}
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Grid>

            {/* Presale stage 1 Card data  */}

            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid #7A7A7A",
                  backdropFilter: "blur(9px)",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Prompt'",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "28px",
                      lineHeight: "42px",
                      color: "#FFFFFF",
                      my: 4,
                    }}
                  >
                    Presale stage 1
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "0.5px solid #7A7A7A",
                      pb: 1,
                    }}
                  >
                    <Paragraph2>Current token price</Paragraph2>
                    <Paragraph2>0.58 ETH</Paragraph2>
                  </Box>
                  <Paragraph mt={1}>
                    {" "}
                    Some small line saying price will increase soon so buy now
                  </Paragraph>

                  {/* Progress bar */}

                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 4,
                      }}
                    >
                      <Paragraph2>
                        Raised -{" "}
                        <span style={{ color: "#EE477E" }}>1,450 Tokens</span>{" "}
                      </Paragraph2>
                      <Paragraph2>
                        Target-{" "}
                        <span style={{ color: "#EE477E" }}>150,000 Token</span>
                      </Paragraph2>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                      }}
                    >
                      <IOSSlider
                        aria-label="ios slider"
                        marks={marks}
                        value={60}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          top: { md: 18, xs: 23 },
                          left: "30%",
                        }}
                      >
                        60,490
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        mt: -1,
                      }}
                    >
                      <Paragraph2>Soft Cap</Paragraph2>
                      <Paragraph2>Crowdsale</Paragraph2>
                      <Paragraph2>Hard cap</Paragraph2>
                    </Box>
                  </Box>

                  <CustomButton
                    sx={{
                      width: "100%",
                      mt: 4,
                    }}
                  >
                    Connect Wallet
                  </CustomButton>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      my: 4,
                    }}
                  >
                    <Paragraph borderBottom="0.5px solid #7A7A7A">
                      How to buy?
                    </Paragraph>
                    <Paragraph borderBottom="0.5px solid #7A7A7A">
                      New to crypto?
                    </Paragraph>
                  </Box>
                </Box>
                <Box
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    py: 1.5,
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                  }}
                >
                  {cardImage.map((item, index) => {
                    return (
                      <img
                        key={index}
                        src={item}
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
