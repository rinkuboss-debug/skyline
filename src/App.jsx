import React from "react";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Cta";
import Footer from "./components/Footer";
const App = () => {
  return <>
  <Header/>
  <Hero/>
  <Properties/>
  <Services/>
  <About/>
  <Testimonials/>
  <Blog/>
  <Contact/>
  <Footer/>

  </>;
};

export default App;
