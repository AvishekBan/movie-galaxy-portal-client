import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../assets/sherlock1.jpg";
import img3 from "../assets/https___hypebeast.com_image_2022_01_marvel-spider-man-no-way-home-entire-script-available-online-for-free-news-001.avif";
import img4 from "../assets/the-witcher-season-2.avif";
import img5 from "../assets/breaking bad.jpg";
import img6 from "../assets/GOT.jpg";
import img7 from "../assets/peaky-blinders.webp";
const Banner = () => {
   const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 3,
      autoplay: true,
      speed: 600,
      autoplaySpeed: 3000,
   };
   return (
      <div className="py-6 px-6 my-2 mx-2">
         <div className="slider-container ">
            <Slider {...settings}>
               <div className="px-4 py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <div></div>
                  <img className="h-[500px] w-full object-cover  shadow-lg" src={img2} alt="" />
               </div>
               <div className="px-4 py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-cover  shadow-lg" src={img3} alt="" />
               </div>
               <div className="px-4  py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-cover  shadow-lg" src={img4} alt="" />
               </div>
               <div className="px-4  py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-cover  shadow-lg" src={img5} alt="" />
               </div>
               <div className="px-4  py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-cover  shadow-lg" src={img6} alt="" />
               </div>
               <div className="px-4  py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-cover  shadow-lg" src={img7} alt="" />
               </div>
            </Slider>
         </div>
      </div>
   );
};

export default Banner;
