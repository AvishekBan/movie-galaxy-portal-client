import React from "react";
import Banner from "./Banner";
import FeaturedMovies from "./FeaturedMovies";
import PlanSubscription from "./PlanSubscription";
import Certificate from "./Certificate";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <FeaturedMovies></FeaturedMovies>
         <PlanSubscription></PlanSubscription>
         <div className=" text-center justify-center">
            <Certificate></Certificate>
         </div>
      </div>
   );
};

export default Home;
