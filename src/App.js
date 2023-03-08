import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import Scroll from "./component/Scroll";
import "./css/main.css";
import "./css/reset.css";
import Brand01 from "./component/Brand_01";
import Brand02 from "./component/Brand_02";
import Shop_ from "./component/Shop_";
import { DATA } from "./data/data";

const App = () => {

  return (
    <>
      <Scroll />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Brand01" element={<Brand01 />} />
        <Route path="/Brand02" element={<Brand02 />} />
        <Route path="/Shop01" element={<Shop_ DATA={DATA} />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App;
