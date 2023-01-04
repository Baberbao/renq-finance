import React from "react";
import Slider from "react-slick";

import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Team1 from "./assests/Team1.png";
import Team2 from "./assests/Team2.png";
import Team3 from "./assests/Team3.png";
import Team4 from "./assests/Team4.png";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Twitter,
  LinkedIn,
  ArrowRight,
  ArrowLeft,
  Facebook,
} from "@mui/icons-material";

const iconStyle = {
  "&:hover": {
    color: "#EF4D84",
  },
  transition: "0.4s",
  cursor: "pointer",
};
const comonBtnStyling = {
  display: "flex",
  position: "absolute",
  zIndex: 1,
  cursor: "pointer",
  top: "24px",
};
const TeamNextArrow = ({ onClick }) => {
  const matchesMeida = useMediaQuery("(max-width: 700px)");

  return (
    <Box
      sx={{
        ...comonBtnStyling,
        right: !matchesMeida ? 510 : 110,
        top: !matchesMeida ? "100%" : "100%",

        transition: ".5s ease",
      }}
      onClick={onClick}
    >
      <ArrowRight
        sx={{ color: "#EF4D84", fontSize: { xs: "4rem", md: "6rem" } }}
      />
    </Box>
  );
};

const TeamPrevArrow = ({ onClick }) => {
  const matchesMeida = useMediaQuery("(max-width: 700px)");
  return (
    <Box
      sx={{
        ...comonBtnStyling,
        right: !matchesMeida ? 545 : 135,
        top: !matchesMeida ? "100%" : "100%",

        transition: ".5s ease",
      }}
      onClick={onClick}
    >
      <ArrowLeft
        sx={{ color: "#EF4D84", fontSize: { xs: "4rem", md: "6rem" } }}
      />
    </Box>
  );
};

const teamSettings = {
  nextArrow: <TeamNextArrow />,
  prevArrow: <TeamPrevArrow />,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TeamSlider = () => {
  const teamArray = [
    {
      image: Team1,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <Facebook sx={iconStyle} />,
      icon2: <LinkedIn sx={iconStyle} />,
      icon3: <Twitter sx={iconStyle} />,
    },
    {
      image: Team2,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <Facebook sx={iconStyle} />,
      icon2: <LinkedIn sx={iconStyle} />,
      icon3: <Twitter sx={iconStyle} />,
    },
    {
      image: Team3,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <Facebook sx={iconStyle} />,
      icon2: <LinkedIn sx={iconStyle} />,
      icon3: <Twitter sx={iconStyle} />,
    },
    {
      image: Team4,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <Facebook sx={iconStyle} />,
      icon2: <LinkedIn sx={iconStyle} />,
      icon3: <Twitter sx={iconStyle} />,
    },

    {
      image: Team1,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <Facebook sx={iconStyle} />,
      icon2: <LinkedIn sx={iconStyle} />,
      icon3: <Twitter sx={iconStyle} />,
    },

    {
      image: Team2,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <Facebook sx={iconStyle} />,
      icon2: <LinkedIn sx={iconStyle} />,
      icon3: <Twitter sx={iconStyle} />,
    },

    {
      image: Team1,
      name: "Jason Morales",
      position: "CTO & Software Engineer",
      icon1: <Facebook sx={iconStyle} />,
      icon2: <LinkedIn sx={iconStyle} />,
      icon3: <Twitter sx={iconStyle} />,
    },
  ];
  return (
    <Box py="30px">
      <Slider {...teamSettings}>
        {teamArray.map(
          ({ image, name, position, icon1, icon2, icon3 }, index) => {
            return (
              <Box key={index} my={1}>
                <img src={image} alt="" width="100%" />
                <Box display="flex" alignItems="center" justifyContent="center">
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
              </Box>
            );
          }
        )}
      </Slider>
    </Box>
  );
};

export default TeamSlider;
