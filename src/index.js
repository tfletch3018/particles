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
import SampleOne from './pages/sampleOne';
import SampleTwo from './pages/sampleTwo';
import ImageOne from './pages/imageOne';
import ImageTwo from './pages/imageTwo';
import SlideShow from './pages/slideShow';
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
        <Route path="/home/sampleOne" element={<SampleOne />} />
        <Route path="/home/sampleTwo" element={<SampleTwo />} />
        <Route path="/artWork/imageOne" element={<ImageOne />} />
        <Route path="/artWork/imageTwo" element={<ImageTwo />} />
        <Route path="/photoCarousel/slideShow" element={<SlideShow />} />

      </Route>

    </Routes>
  </HashRouter>
);

