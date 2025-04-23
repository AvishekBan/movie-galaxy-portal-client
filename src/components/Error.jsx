import React from "react";
import errorImage from "../assets/404 error.jpg";
import { Link } from "react-router-dom";
const Error = () => {
   return (
      <div>
         <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-base-100 text-center">
            <img src={errorImage} alt="404 Error" className="w-96 h-auto max-w-full mb-6" />
            <Link to="/" className="btn btn-primary">
               Back To Home
            </Link>
         </div>
      </div>
   );
};

export default Error;
