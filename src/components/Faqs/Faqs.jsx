import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
});

let AccordionData = [
  {
    summary: "What Cryptocurrencies Can I Use To Purchase?",
    details:
      "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.",
  },
  {
    summary: "What Is ICO Crypto?",
    details:
      "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.",
  },
  {
    summary: "How Can I Participate In The ICO Token Sale?",
    details:
      "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.",
  },
  {
    summary: "How Do I Benefit From The ICO Token?",
    details:
      "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.",
  },
];
const Faqs = () => {
  const [expanded, setExpanded] = useState(false);
  // const check = useMediaQuery("(max-width:750px)")

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container>
      <Box py="50px">
        <Heading sx={{ fontWeight: 700, fontSize: { md: "36px", xs: "25px" } }}>
          Have Any Question?
        </Heading>
        <Paragraph textAlign={"center"}>
          Join the industry leaders to discuss where the markets are heading. We
          accept token payments
        </Paragraph>

        <Box mt="50px">
          {AccordionData.map((value, index) => {
            return (
              <Box sx={{ margin: "auto", width: "100%" }} key={index}>
                <Accordion
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  sx={{
                    marginTop: "20px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid #312F55",
                    backdropFilter: "blur(8.5px)",
                    borderRadius: "6px",
                    mb: "10px",
                  }}
                >
                  <AccordionSummary
                    aria-controls={`panel${index + 1}bh-content`}
                    id={`panel${index + 1}bh-header`}
                    className="borderRad"
                    expandIcon={
                      <KeyboardArrowDownIcon
                        sx={{ color: "white", fontSize: "30px" }}
                      />
                    }
                    sx={{
                      padding: "0px 20px 0px 0px",
                      my: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        px="20px"
                        textAlign="left"
                        fontSize={{ md: "20px", sm: "16px" }}
                        lineHeight={"40px"}
                        sx={{
                          color: "white",
                          fontWeight: "700",
                        }}
                      >
                        {value.summary}
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      paddingY: "10px",
                      marginTop: "-15px",
                    }}
                  >
                    <Box mt={2} textAlign="left">
                      <Paragraph textAlign="left">{value.details}</Paragraph>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Faqs;
