import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const user = "Hervé";

const UserPage = () => {
  return (
    <div>
      <Header user={user} />
      Hihihi
      <Footer />
    </div>
  );
};

export default UserPage;
