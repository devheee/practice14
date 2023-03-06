import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Brand from './component/Brand';
import Main from './component/Main';
import Scroll from './component/Scroll';
import Totop from './component/Totop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" component={<Main />} />
        <Route path="/Brand" element={<Brand />} />
      </Routes>
      <Scroll />
      <Totop />
      <App />

    </BrowserRouter>
  </React.StrictMode>
);

