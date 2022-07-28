import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Main from "./Main";
import Business from "./Business";
import Solution from "./Solution";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Header, Footer } from "../components/Common";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/business" element={<Business />}></Route>
          <Route path="/solution" element={<Solution />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
