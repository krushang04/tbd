import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shipment from "../store/Preshipment.jpg";
import expediting from "../store/Expediting.jpg";
import inspection from "../store/inspection.jpg";
import classes from "./MySlider.module.css";

function MySlider() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Allow infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 2, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per change
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as per your needs
        settings: {
          slidesToShow: 2, // Number of slides to show at the breakpoint
        },
      },
      {
        breakpoint: 480, // Adjust the breakpoint as per your needs
        settings: {
          slidesToShow: 1, // Number of slides to show at the breakpoint
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={classes.slider__cover}>
      <div className={classes.img_div}>
        <img src={inspection} className={classes.slider_img} alt="Slide 1" />
      </div>
      <div className={classes.img_div}>
        <img src={shipment} className={classes.slider_img} alt="Slide 2" />
      </div>
      <div className={classes.img_div}>
        <img src={expediting} className={classes.slider_img} alt="Slide 3" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
}

export default MySlider;
