import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
   return (
      <div>
         <div className="mb-16">
            <NavBar></NavBar>
         </div>

         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;
