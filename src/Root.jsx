import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
   return (
      <div>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;
