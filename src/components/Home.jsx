import React from "react";
import Banner from "./Banner";
import FeaturedMovies from "./FeaturedMovies";
import PlanSubscription from "./PlanSubscription";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <FeaturedMovies></FeaturedMovies>
         <PlanSubscription></PlanSubscription>
      </div>
   );
};

export default Home;
