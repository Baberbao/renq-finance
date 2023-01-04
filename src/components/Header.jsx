import React, { useContext, useState } from "react";

import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { makeStyles, styled } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { AppContext } from "../utils";
import { Paper, Typography } from "@mui/material";
import { ToastNotify } from "../ConnectivityAssets/hooks";

import logo from "../images/logo.png";
import CustomButton from "../Utils/CustomButton";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#1C0D38 !important",
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export const StyledLink = styled(Typography)({
  "&:hover": {
    color: "#EF4D84",
    borderBottom: "1px solid #EF4D84",
  },
  "&:active": {
    color: "#EF4D84",
    borderBottom: "1px solid #EF4D84",
  },
  fontWeight: 700,
  fontSize: "12px",
  transition: "0.4s",
  cursor: "pointer",
});

const sideArray = [
  "About",
  "Team",
  "Ecosystem",
  "Whitepaper",
  "Glam",
  "How to Buy",
  "Careers",
];

export default function Header() {
  const { account, connect, disconnect } = useContext(AppContext);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const matches = useMediaQuery("(max-width:1080px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-20} display="flex" justifyContent="center">
        <Box width="200px">
          <img width="100%" src={logo} alt="logo" />
        </Box>
      </Box>
      <List>
        {sideArray.map((text, index) => (
          <ListItem
            key={index}
            style={{
              justifyContent: "center",
              borderBottom: "1px solid #EF4D84",
              marginTop: "10px",
            }}
          >
            <StyledLink fontSize={"12px"}>{text}</StyledLink>
          </ListItem>
        ))}
      </List>
      <Box mt={2} display="flex" justifyContent="center">
        {account ? (
          <CustomButton sx={{ width: "180px" }} onClick={() => disconnect()}>
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </CustomButton>
        ) : (
          <CustomButton sx={{ width: "180px" }} onClick={() => connect()}>
            Connect Wallet
          </CustomButton>
        )}
      </Box>
    </div>
  );
  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: "transparent",
          zIndex: "100px",
        }}
        height="92px"
        width="100%"
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box width="150px">
                <img width="100%" src={logo} alt="logo" />
              </Box>
            </Box>

            {matches ? (
              <Box display={"flex"} justifyContent="flex-end">
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                          color: "white",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper style={{ background: "#1C0D38" }}>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent={matches1 ? "end" : "space-between"}
                alignItems="center"
              >
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Hidden mdDown>
                    <Box mr={4}>
                      <StyledLink fontSize={"13px"} fontWeight="700">
                        About
                      </StyledLink>
                    </Box>
                    <Box mr={4}>
                      <StyledLink fontSize={"13px"} fontWeight="700">
                        Team
                      </StyledLink>
                    </Box>

                    <Box mr={4}>
                      <StyledLink fontSize={"13px"} fontWeight="700">
                        Ecosystem
                      </StyledLink>
                    </Box>
                    <Box mr={4}>
                      <StyledLink fontSize={"13px"} fontWeight="700">
                        Whitepaper
                      </StyledLink>
                    </Box>
                    <Box mr={4}>
                      <StyledLink fontSize={"13px"} fontWeight="700">
                        Glam
                      </StyledLink>
                    </Box>
                    <Box mr={4}>
                      <StyledLink fontSize={"13px"} fontWeight="700">
                        How to Buy
                      </StyledLink>
                    </Box>
                    <Box mr={4}>
                      <StyledLink fontSize={"13px"} fontWeight="700">
                        Careers
                      </StyledLink>
                    </Box>
                    {account ? (
                      <CustomButton
                        sx={{ width: "180px" }}
                        onClick={() => disconnect()}
                      >
                        {account.slice(0, 4) + "..." + account.slice(-4)}
                      </CustomButton>
                    ) : (
                      <CustomButton
                        sx={{ width: "180px" }}
                        onClick={() => connect()}
                      >
                        Connect Wallet
                      </CustomButton>
                    )}
                  </Hidden>
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}
