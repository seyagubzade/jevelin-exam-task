import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import Features from "./Features";
import VideoIntro from "./VideoIntro";
import Products from "./Products";
import CustomerReview from "./CustomerReview";
import Socials from "./Socials";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Hero />
      <Features />
      <VideoIntro />
      <Products />
      <CustomerReview />
      <Socials />
    </div>
  );
};

export default Home;
