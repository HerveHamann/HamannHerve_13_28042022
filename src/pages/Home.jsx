import React from "react";
import Feature from "../components/Feature";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const home = () => {
  return (
    <div>
      <Header />
      <div className="hero">
        <section className="hero-content">
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <div className="main">
        <Feature
          image="iconchat"
          title="You are our #1 priority"
          text=" Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less
            than 5 minutes."
        />
        <Feature
          image="iconmoney"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          image="iconsecurity"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe. "
        />
      </div>
      <Footer />
    </div>
  );
};

export default home;
