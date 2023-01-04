import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

import bgdoc from "../images/bgdoc.png";
import pdf from "../images/pdf.png";
import design from "../images/design.png";
import design1 from "../images/design1.png";
import design2 from "../images/design2.png";

export default function Documents() {
  const matches = useMediaQuery("(max-width:960px)");

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1D0742",
        }}
      >
        <Container maxWidth="lg">
          <Box
            py={3}
            sx={{
              backgroundImage: `url(${bgdoc})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography
              textAlign="center"
              mt={{ xs: 0, md: 8 }}
              fontFamily="Open Sans"
              fontWeight="700"
              fontSize={{ xs: "26px", md: "36px" }}
              color="#FFFFFF"
            >
              Documents
            </Typography>
            <Typography
              textAlign="center"
              fontFamily="Open Sans"
              fontWeight="400"
              fontSize={{ xs: "13px", md: "14px" }}
              color="#FFFFFF"
            >
              Download the whitepaper and learn about ICO Token, the unique ICO
              Crypto approach and the <br /> team/advisors.
            </Typography>
            <Grid my={matches ? 4 : 10} container spacing={1}>
              <Grid
                item
                xs={12}
                md={4}
                mt={4}
                display="flex"
                justifyContent={matches ? "center" : "flex-end"}
              >
                <Box position="relative">
                  <Box
                    position="absolute"
                    bottom="20px"
                    left="-40px"
                    sx={{
                      background: `url(${design})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "118px",
                      height: "145px",
                      borderRadius: "7px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    WHITE
                    <br />
                    PAPER
                  </Box>
                  <Box
                    sx={{
                      width: "246px",
                      height: "135px",
                      background:
                        "linear-gradient(358.48deg, #1B1367 -0.14%, rgba(27, 20, 104, 0.19) 98.74%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "6px",
                    }}
                  >
                    <Typography
                      fontFamily="Open Sans"
                      fontWeight="400"
                      fontSize={{ xs: "13px", md: "14px" }}
                    >
                      Whitepaper
                    </Typography>
                    <Box
                      mt={1}
                      sx={{
                        background: "#2E2966",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "6px",
                      }}
                      pr={1}
                      width="66px"
                      height="30px"
                      fontFamily="Open Sans"
                      fontWeight="700"
                      fontSize={{ xs: "13px", md: "14px" }}
                    >
                      <img
                        src={pdf}
                        width="21px"
                        height="21px"
                        style={{ marginRight: "1px" }}
                        alt=""
                      />
                      PDF
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                mt={4}
                display="flex"
                justifyContent="center"
              >
                <Box position="relative">
                  <Box
                    position="absolute"
                    bottom="20px"
                    left="-40px"
                    sx={{
                      background: `url(${design1})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "118px",
                      height: "145px",
                      borderRadius: "7px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    ONE
                    <br />
                    PAGER
                  </Box>
                  <Box
                    sx={{
                      width: "246px",
                      height: "135px",
                      background:
                        "linear-gradient(358.48deg, #1B1367 -0.14%, rgba(27, 20, 104, 0.19) 98.74%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "6px",
                    }}
                  >
                    <Typography
                      fontFamily="Open Sans"
                      fontWeight="400"
                      fontSize={{ xs: "13px", md: "14px" }}
                    >
                      Whitepaper
                    </Typography>
                    <Box
                      mt={1}
                      sx={{
                        background: "#2E2966",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "6px",
                      }}
                      pr={1}
                      width="66px"
                      height="30px"
                      fontFamily="Open Sans"
                      fontWeight="700"
                      fontSize={{ xs: "13px", md: "14px" }}
                    >
                      <img
                        src={pdf}
                        width="21px"
                        height="21px"
                        style={{ marginRight: "1px" }}
                        alt=""
                      />
                      PDF
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                mt={4}
                display="flex"
                justifyContent={matches ? "center" : "flex-start"}
              >
                <Box position="relative">
                  <Box
                    position="absolute"
                    bottom="20px"
                    left="-40px"
                    sx={{
                      background: `url(${design2})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "118px",
                      height: "145px",
                      borderRadius: "7px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    AUDIT
                    <br />
                    REPORT
                  </Box>
                  <Box
                    sx={{
                      width: "246px",
                      height: "135px",
                      background:
                        "linear-gradient(358.48deg, #1B1367 -0.14%, rgba(27, 20, 104, 0.19) 98.74%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "6px",
                    }}
                  >
                    <Typography
                      fontFamily="Open Sans"
                      fontWeight="400"
                      fontSize={{ xs: "13px", md: "14px" }}
                    >
                      Whitepaper
                    </Typography>
                    <Box
                      mt={1}
                      sx={{
                        background: "#2E2966",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "6px",
                      }}
                      pr={1}
                      width="66px"
                      height="30px"
                      fontFamily="Open Sans"
                      fontWeight="700"
                      fontSize={{ xs: "13px", md: "14px" }}
                    >
                      <img
                        src={pdf}
                        width="21px"
                        height="21px"
                        style={{ marginRight: "1px" }}
                        alt=""
                      />
                      PDF
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
