import React from "react";

import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Team1 from "./assests/Team1.png";
import Team2 from "./assests/Team2.png";
import Team3 from "./assests/Team3.png";
import Team4 from "./assests/Team4.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TeamSlider from "./TeamSlider";

const iconStyle = {
  "&:hover": {
    color: "#EF4D84",
  },
  transition: "0.4s",
  cursor: "pointer",
};

const Team = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const teamArray = [
    {
      image: Team1,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <FacebookIcon sx={iconStyle} />,
      icon2: <LinkedInIcon sx={iconStyle} />,
      icon3: <TwitterIcon sx={iconStyle} />,
    },
    {
      image: Team2,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <FacebookIcon sx={iconStyle} />,
      icon2: <LinkedInIcon sx={iconStyle} />,
      icon3: <TwitterIcon sx={iconStyle} />,
    },
    {
      image: Team3,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <FacebookIcon sx={iconStyle} />,
      icon2: <LinkedInIcon sx={iconStyle} />,
      icon3: <TwitterIcon sx={iconStyle} />,
    },
    {
      image: Team4,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <FacebookIcon sx={iconStyle} />,
      icon2: <LinkedInIcon sx={iconStyle} />,
      icon3: <TwitterIcon sx={iconStyle} />,
    },

    {
      image: Team1,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <FacebookIcon sx={iconStyle} />,
      icon2: <LinkedInIcon sx={iconStyle} />,
      icon3: <TwitterIcon sx={iconStyle} />,
    },

    {
      image: Team2,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <FacebookIcon sx={iconStyle} />,
      icon2: <LinkedInIcon sx={iconStyle} />,
      icon3: <TwitterIcon sx={iconStyle} />,
    },

    {
      image: Team1,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <FacebookIcon sx={iconStyle} />,
      icon2: <LinkedInIcon sx={iconStyle} />,
      icon3: <TwitterIcon sx={iconStyle} />,
    },
  ];
  return (
    <Box backgroundColor="#100C3D" py={4}>
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
          Executive Team
        </Typography>
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontSize: "14px",
            color: "#FFFFFF",
            textAlign: "center",
            mt: "0.5rem",
            mb: "3rem",
          }}
        >
          Our team player alway finds effective ways to improve the product and
          process
        </Typography>
        {matches ? (
          <TeamSlider />
        ) : (
          <Grid container justifyContent="center" spacing={1.8}>
            {teamArray.map(
              ({ image, name, position, icon1, icon2, icon3 }, index) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={index} my={1}>
                    <img src={image} alt="" width="100%" />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box
                        sx={{
                          background: "rgba(16, 16, 16, 0.14)",
                          border: "1px solid rgba(212, 212, 212, 0.4)",
                          backdropFilter: "blur(8.5px)",
                          borderRadius: "6px",
                          p: 1,
                          width: "220px",
                          mt: -18,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Open Sans",
                            fontWeight: 700,
                            fontSize: "16px",
                            color: "#FFFFFF",
                            textAlign: "center",
                          }}
                        >
                          {name}
                        </Typography>
                        <Typography
                          fontFamily="Open Sans"
                          fontSize="12px"
                          textAlign="center"
                          my={1}
                        >
                          {position}
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          gap="15px"
                        >
                          {icon1} {icon2} {icon3}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              }
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Team;
