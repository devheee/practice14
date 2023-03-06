import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import Scroll from "./component/Scroll";
import "./css/main.css";
import "./css/reset.css";


const App = () => {

  return (
    <>
      <Scroll />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App;
