import React from "react";
import {
  Box,
  Container,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import TelegramIcon from "@mui/icons-material/Telegram";
import CustomButton from "../Utils/CustomButton";

const Heading = styled(Typography)({
  fontWeight: 700,
  fontSize: "36px",
  color: "white",
});

const Paragraph = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
  color: "white",
});
const StyledInput = styled(TextField)({
  width: "100%",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid #312F55",
  backdropFilter: "blur(8.5px)",
  borderRadius: "6px",
  input: {
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "18px",
    color: "rgba(255, 255, 255, 0.31)",
  },
  marginTop: "20px",
});

const SubHeading = styled(Typography)({
  fontWeight: 700,
  fontSize: "20px",
  color: "white",
  marginLeft: "20px",
  "&:hover": {
    color: "#EF4D84",
    borderBottom: "1px solid #EF4D84",
  },
  cursor: "pointer",
});

const Outer = styled(Typography)({
  width: "74px",
  height: "74px",
  borderRadius: "50px",
  background: "linear-gradient(90.1deg, #4889DA 0.08%, #FB497F 101.84%)",
  "&:hover": {
    background: "white",
  },
  transition: "0.4s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const Iner = styled(Typography)({
  width: "73px",
  height: "73px",
  borderRadius: "50px",
  backgroundColor: "#1D0742",
  "&:hover": {
    background: "linear-gradient(90.1deg, #4889DA 0.08%, #FB497F 101.84%)",
  },
  transition: "0.4s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const iconStyle = {
  color: "white",
  fontSize: "30px",
  "&:hover": {
    color: "#1D0742",
  },
};

const data = [
  { icon: <MailOutlineIcon sx={iconStyle} />, text: "Info@yourcompany.com" },
  { icon: <WifiCalling3Icon sx={iconStyle} />, text: "+84 0977425031" },
  { icon: <TelegramIcon sx={iconStyle} />, text: "Join us on Telegram" },
];

const Contact = () => {
  return (
    <Box bgcolor={"#1D0742"} py="50px">
      <Container>
        <Grid container spacing={5}>
          <Grid item md={7} xs={12}>
            <Heading>Contact Us</Heading>
            <Paragraph>
              We are always open and we welcome and questions you have for our
              team. If you wish to get in touch, please fill out the form below.
            </Paragraph>
            <Box mt="40px">
              {data.map(({ icon, text }, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    py: "10px",
                  }}
                >
                  <Outer>
                    <Iner> {icon}</Iner>
                  </Outer>
                  <SubHeading> {text} </SubHeading>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <StyledInput placeholder="Name" />
            <StyledInput placeholder="Email" />
            <StyledInput placeholder="Phone Number" />
            <StyledInput placeholder="Message" />
            <CustomButton
              sx={{
                fontFamily: "'Prompt'",
                fontStyle: "normal",
                fontSize: "16px",

                mt: "40px",
              }}
            >
              SUBMIT YOUR MESSAGE
            </CustomButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
