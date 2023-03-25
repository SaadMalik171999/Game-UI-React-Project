import React from "react";
import Footer from "../Components/Footer Section/Footer";
import Form from "../Components/Form Section/Form";
import Hero from "../Components/Hero Section/Hero";
import Navbar from "../Components/Navbar Section/Navbar";
import Project from "../Components/Project Section/Project";
import Trending from "../Components/Trending Section/Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trending />
      <Project />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
