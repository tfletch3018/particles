import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./pages/home";
import artWork from "./pages/artWork";
import photoCarousel from "./pages/photoCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(

  <HashRouter>

    <Routes>

      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="/artWork" element={<artWork />} />
        <Route path="/photoCarousel" element={<photoCarousel />} />

      </Route>

    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
