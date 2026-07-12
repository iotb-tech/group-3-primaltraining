import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import JoinCommunity from "./JoinCommunity";
import CTA from "./CTA";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />

      <main className="w-full max-w-[1484px] mx-auto overflow-x-hidden pt-[80px]">
        <Hero />
        <JoinCommunity />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
