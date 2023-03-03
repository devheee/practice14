import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Scroll from './component/Scroll';
import Totop from './component/Totop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Scroll />
      <Totop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

