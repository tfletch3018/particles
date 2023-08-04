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
import ArtWork from "./pages/artWork";
import PhotoCarousel from "./pages/photoCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(

  <HashRouter>

    <Routes>

      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="/artWork" element={<ArtWork />} />
        <Route path="/photoCarousel" element={<PhotoCarousel />} />

      </Route>

    </Routes>
  </HashRouter>
);

