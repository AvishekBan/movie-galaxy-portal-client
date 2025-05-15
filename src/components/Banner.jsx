import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../assets/1b884bffabfe27f2271752c8c9da3f08.jpg";
import img3 from "../assets/dr strange.webp";
import img4 from "../assets/The-Batman-2022-Movie-Poster-01.webp";
import img5 from "../assets/breaking bad.jpg";
import img6 from "../assets/wp11484135.jpg";
import img7 from "../assets/yas-koss-d6ad21138001053-6215214974718.jpg";
import "animate.css";

const Banner = () => {
   const [showDetails, setShowDetails] = useState(false);
   const handleImageClick = () => {
      setShowDetails(true);

      setTimeout(() => {
         setShowDetails(false);
      }, 5000);
   };

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
                  <img
                     className="h-[500px] w-full object-center  shadow-lg"
                     src={img2}
                     alt=""
                     onClick={handleImageClick}
                  />

                  {showDetails && (
                     <div className="mt-4 text-center animate__animated animate__fadeInUp">
                        <h2 className="text-xl  font-bold mb-2 poppins-semibold">Sherlock</h2>
                        <div className="flex w-full text-gray-600">
                           <div className="card bg-base-300 rounded-box grid h-10 grow place-items-center border border-red-600">
                              Adventure
                           </div>
                           <div className="divider divider-horizontal"></div>
                           <div className="card bg-base-300 rounded-box grid h-10 grow place-items-center border border-red-600">
                              Detective
                           </div>
                           <div className="divider divider-horizontal"></div>
                           <div className="card bg-base-300 rounded-box grid h-10 grow place-items-center border border-red-600">
                              Crime
                           </div>
                        </div>
                        <p className="text-gray-600">
                           Sherlock Holmes A brilliant, eccentric, and often socially awkward
                           detective with exceptional powers of observation and deduction.
                        </p>
                     </div>
                  )}
               </div>
               <div className="px-4 py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-center  shadow-lg" src={img3} alt="" />
               </div>
               <div className="px-4  py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-center  shadow-lg" src={img4} alt="" />
               </div>
               <div className="px-4  py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-center  shadow-lg" src={img5} alt="" />
               </div>
               <div className="px-4  py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-center  shadow-lg" src={img6} alt="" />
               </div>
               <div className="px-4  py-4 transition-transform duration-300 ease-in-out slick-slide">
                  <img className="h-[500px] w-full object-center  shadow-lg" src={img7} alt="" />
               </div>
            </Slider>
         </div>
      </div>
   );
};

export default Banner;
