import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Hadits from '../pages/Hadits/index'
import Slug from "../pages/Hadits/HaditSlug";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route   path="/" element={<Navbar />}>
            <Route  index element={<Home />}/>
            {/* <Route path="/about" element={<About />}/> */}
            <Route  path="/hadits" element={<Hadits />}/>
            <Route  path="/hadits/:slug" element={<Slug />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
