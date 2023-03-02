import React from "react";
import "./CarouselImg.css";
import borabora from "../../assets/borabora.jpg";
import borabora2 from "../../assets/borabora2.jpg";
import keywest from "../../assets/keywest.jpg";
import maldives from "../../assets/maldives.jpg";
import maldives2 from "../../assets/maldives2.jpg";
import maldives3 from "../../assets/maldives3.jpg";
import { Carousel } from "react-bootstrap";

const CarouselImg = () => {
  const imgs = [
    { image: borabora, title: "Borabora" },
    { image: borabora2, title: "Emerald Bay" },
    { image: keywest, title: "Key West" },
    { image: maldives, title: "maldives" },
    { image: maldives2, title: "Grenada" },
    { image: maldives3, title: "Barbados" },
  ];
  return (
    <div>
      <Carousel interval={3000} className='carousel'>
        {imgs.map((img) => (
          <Carousel.Item key={img.title}>
            <img className="d-block w-100" src={img.image} alt={img.title} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImg;
