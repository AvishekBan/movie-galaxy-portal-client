import React from "react";
import { Link } from "react-router-dom";

const Allmovies = () => {
   return (
      <div className="card bg-base-100 w-96 shadow-sm">
         <figure>
            <img
               src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
               alt="Shoes"
            />
         </figure>
         <div className="card-body">
            <h2 className="card-title">
               Movie Title
               <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Genre</p>
            <p>Duration</p>
            <p>Release Year</p>
            <p>Rating</p>

            <div className="card-actions justify-end">
               <Link to="/movieDetails" className="btn bg-black text-white">
                  See Details
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Allmovies;
