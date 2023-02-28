import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import "./css/main.css";
import "./css/reset.css";


const App = () => {

  return (
    <>
      <Header />
      <Main />
      {/* <Routes>
        <Route path="/" element={<Content01 />} />
        <Route path="/01" element={<Content01 />} />
        <Route path="/02" element={<Content02 />} />
        <Route path="/03" element={<Content03 />} />
        <Route path="/detail/:id" element={<Detail itm={itm} />} />
      </Routes> */}
      <Footer />
    </>
  )
}

export default App;