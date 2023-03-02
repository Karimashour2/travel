import React from "react";
import "./SelectsImg.css";
import borabora from "../../assets/borabora.jpg";
import borabora2 from "../../assets/borabora2.jpg";
import keywest from "../../assets/keywest.jpg";
import maldives from "../../assets/maldives.jpg";
import maldives2 from "../../assets/maldives2.jpg";
import maldives3 from "../../assets/maldives3.jpg";

const SelectsImg = () => {
  const imgs = [
    { image: borabora, title: "Borabora" },
    { image: borabora2, title: "Emerald Bay" },
    { image: keywest, title: "Key West" },
    { image: maldives, title: "maldives" },
    { image: maldives2, title: "Grenada" },
    { image: maldives3, title: "Barbados" },
  ];

  return (
    <div className="container">
      <div className="selects-img">
        {imgs.map((img, i) => (
          <div className="img" key={i}>
            <img src={img.image} alt={img.title} />
            <div className="overlay"></div>
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectsImg;
