import React, { Component } from "react";
import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Blog2 from "../components/Blog2";
import Workflow from "../components/Workflow";
import Integrations from "../components/Integrations";
import Connection from "../components/Connection";
import Streamline from "../components/Streamline";
import Security from "../components/Security";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Scaling from "../components/Scaling";
import Extapp from "../components/Extapp";

import ScrollButton from "../components/ScrollButton";
import Adv from "../components/Adv";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Element name="Top" id="top"></Element>
        <Navbar />
        <Element name="Hero" id="hero"></Element>
        <Hero />
        <div className="my-10">
          <Blog />
        </div>
        <div className="my-10">
          <Blog2 />
        </div>
        <div className="mt-10">
          <Workflow />
        </div>
        <div className="mt-10">
          <Integrations />
        </div>
        <div>
          <Connection />
        </div>
        <div>
          <Streamline />
        </div>
        <div>
          <Scaling />
        </div>
        <div>
          <Security />
        </div>
        <div>
          <Extapp />
        </div>
        <div>
          <Adv />
        </div>
        <Element name="Pricing" id="pricing"></Element>
        <div>
          <Pricing />
        </div>
        <Element name="Features" id="features"></Element>
        <div>
          <Features />
        </div>

        <ScrollButton />
        <Footer />
      </div>
    );
  }
}
