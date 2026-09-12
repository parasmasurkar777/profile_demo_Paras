import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../pages/Nav'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import AllProduct from './AllProduct'
import ProductDetails from './ProductDetails'
import EcomProducts from './EcomProducts'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "images/img1.png" },
  { url: "images/img2.png" },
  { url: "images/img1.png" },
  
];
export default function MyProject() {
  let w = "100%";
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div>
          <SimpleImageSlider
            width={'100%'}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/allproduct" element={<AllProduct />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/ecomproduct" element={<EcomProducts />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
