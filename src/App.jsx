import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";
import Comparsion from "./components/Comparsion";
import Documents from "./components/Documents";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IcoToken from "./components/IcoToken/IcoToken";
import Team from "./components/Team/Team";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import ICO from "./components/ICO";
import Partners from "./components/Partners";
import Tokens from "./components/Tokens";
import Home from "./components/Home.jsx/Home";
import NetworkChange from "./networkSwitch";
const web3 = new Web3(
  Web3.givenProvider
    ? Web3.givenProvider
    : "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let chain = async () => {
      const chainid = await web3.eth.getChainId();
      if (chainid !== 97) {
        setOpen(true);
      }
    };
    chain();
  }, []);

  return (
    <>
      <NetworkChange open={open} setOpen={setOpen} />
      <Home />
      <Partners />
      <ICO />
      <Documents />
      <Tokens />
      <Comparsion />
      <IcoToken />
      <Tokenomics />
      <Team />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
