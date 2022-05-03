import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import Form from "../components/Form";

const SignInPage = () => {
  return (
    <div className="user-page">
      <Header />
      <div className="main">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
