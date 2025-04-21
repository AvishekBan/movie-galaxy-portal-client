import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate, useLocation } from "react-router-dom";
const MovieDetails = () => {
   //    const navigate = useNavigate();
   //    const { state: movie } = useLocation();
   const handleDelete = () => {
      // logic to delete the movie goes here
      // then navigate back to All Movies
      //   navigate("/all-movies");
   };
   const handleAddToFavorites = () => {
      // logic to add to favorites
      //   alert(`${movie.title} added to favorites!`);
   };
   return (
      <div>
         <div className=" card card-side bg-base-100  shadow-lg rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <figure>
                  <img
                     src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                     alt="Movie"
                  />
               </figure>
               <div className="md:col-span-2 space-y-4">
                  <h1 className="text-3xl font-bold text-gray-800"></h1>
                  <p>
                     <span className="font-semibold">Genre:</span>
                  </p>
                  <p>
                     <span className="font-semibold">Duration:</span>
                  </p>
                  <p>
                     <span className="font-semibold">Release Year:</span>
                  </p>
                  <p>
                     <span className="font-semibold">Summary:</span>
                  </p>

                  <div className="flex gap-4 mt-6">
                     <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                     >
                        Delete Movie
                     </button>
                     <Link
                        to="/myFavorites"
                        onclick={handleAddToFavorites}
                        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
                     >
                        Add to Favorite
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MovieDetails;
