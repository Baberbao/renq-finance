import styled from "@emotion/styled";
import {
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress"; // circularProgressClasses,
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Graph1 from "./graph1.png";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .Mui-selected": {
    background: "linear-gradient(90.1deg, #4889DA 0.08%, #FB497F 101.84%)",
    color: "white !important ",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "#ffffff",
    position: "relative",
  },
  backgroundColor:
    theme.palette.mode === "dark" ? "red " : "rgba(255, 255, 255, 0.15)",
  borderRadius: "29px",

  [theme.breakpoints.up("md")]: {
    width: "31.4%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },

  textAlign: "center",
}));
const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "#ffffff",

  borderRadius: "32px",
  [theme.breakpoints.up("md")]: {
    fontFamily: "Open Sans",
    fontSize: "13px",
    padding: "7px 32px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: "25px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background:
      theme.palette.grey[theme.palette.mode === "#422B5D" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: "25px",
    background:
      theme.palette.mode === "light"
        ? "linear-gradient(90.1deg, #4889DA 0.08%, #FB497F 101.84%)"
        : "#422B5D",
  },
}));

function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={30}
        thickness={4}
        {...props}
        value={100}
      />
    </Box>
  );
}
const Tokenomics = () => {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery("(max-width:700px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Tokentext = styled(Typography)({
    fontFamily: "Prompt",
    fontWeight: 700,
    fontSize: "20px",
    color: "#FFFFFF",
  });
  const Progresstext = styled(Typography)({
    fontFamily: "Prompt",
    fontSize: "14px",
    color: "#FFFFFF",
  });
  return (
    <Box backgroundColor="#1D0742" p={4}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontWeight: 700,
            fontSize: { xs: "26px", md: "36px" },
            color: "#FFFFFF",
            textAlign: "center",
            mb: "5rem",
          }}
        >
          Token Allocation & Funds Distribution
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center">
          {" "}
          <StyledTabs
            variant={matches ? "scrollable" : "standard"}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <StyledTab label="Distribution" {...a11yProps(0)} />
            <StyledTab label="Funding Allocation" {...a11yProps(1)} />
          </StyledTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid
            container
            mt={5}
            display="flex"
            // alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  TOKEN FOR SALE
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>55,714,286</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    40%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={40} />
              </Box>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  LIQUIDITY
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>20,000,000</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    20%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  STACKING
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>4,285,714</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    4%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={4} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <img src={Graph1} alt="" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  TEAM
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>5,000,000</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    5%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={5} />
              </Box>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  CENTRALIZED eXCHANGES
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>15,000,000</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    15%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={15} />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid
            container
            mt={5}
            display="flex"
            // alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  TOKEN FOR SALE
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>55,714,286</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    40%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={40} />
              </Box>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  LIQUIDITY
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>20,000,000</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    20%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  STACKING
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>4,285,714</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    4%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={4} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <img src={Graph1} alt="" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  TEAM
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>5,000,000</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    5%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={5} />
              </Box>
              <Box my={5}>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: "#25B8BD",
                  }}
                >
                  CENTRALIZED EXCHANGES
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Tokentext>15,000,000</Tokentext>
                  <Progresstext fontWeight={400} fontSize="14px">
                    15%
                  </Progresstext>
                </Box>
                <BorderLinearProgress variant="determinate" value={15} />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
    </Box>
  );
};

export default Tokenomics;
