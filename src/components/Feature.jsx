import React from "react";
import iconchat from "../assets/img/iconchat.png";
import iconmoney from "../assets/img/iconmoney.png";
import iconsecurity from "../assets/img/iconsecurity.png";
const Feature = ({ image, title, text }) => {
  let imageContent = {
    iconchat: iconchat,
    iconmoney: iconmoney,
    iconsecurity: iconsecurity,
  };
  const imageRender = (item) => imageContent[item];
  let renderedImage = imageRender(image);
  return (
    <div className="container">
      <img src={renderedImage} alt={image} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
