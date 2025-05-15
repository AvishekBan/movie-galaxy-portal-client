// import React from "react";
// import Banner from "./Banner";
// import FeaturedMovies from "./FeaturedMovies";
// import PlanSubscription from "./PlanSubscription";
// import Certificate from "./Certificate";

// const Home = () => {
//    return (
//       <div>
//          <Banner></Banner>
//          <FeaturedMovies></FeaturedMovies>
//          <PlanSubscription></PlanSubscription>
//          <div className=" text-center justify-center">
//             <Certificate></Certificate>
//          </div>
//       </div>
//    );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import dark from "../assets/night.png";
import light from "../assets/brightness.png";
import Banner from "./Banner";
import FeaturedMovies from "./FeaturedMovies";
import PlanSubscription from "./PlanSubscription";
import Certificate from "./Certificate";

const Home = () => {
   const [darkMode, setDarkMode] = useState(true);

   useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
   }, [darkMode]);

   return (
      <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
         <div className="relative">
            <div className="absolute top-2 right-4 flex items-center gap-2 ">
               {darkMode ? (
                  <img src={dark} alt="" className="h-[24px] w-[24px]" />
               ) : (
                  <img src={light} alt="" className="h-[24px] w-[24px]" />
               )}
               <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="toggle "
               />
            </div>
            <Banner />
         </div>
         <FeaturedMovies />
         <PlanSubscription />
         <div className="text-center justify-center">
            <Certificate />
         </div>
      </div>
   );
};

export default Home;
