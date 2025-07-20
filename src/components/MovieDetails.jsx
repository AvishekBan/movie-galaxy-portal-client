import { Link, useLoaderData } from "react-router-dom";
import Delete from "../assets/delete_12319558.png";
import Favourite from "../assets/chat_5251836.png";
import Update from "../assets/Update.png";
import Swal from "sweetalert2";
import { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";

const MovieDetails = () => {
   const detail = useLoaderData();

   const { user } = useContext(AuthContext);

   if (!detail) {
      return <div className="text-center mt-10 text-red-500">No movie data provided.</div>;
   }

   const { poster, genre, duration, releaseYear, summary } = detail.form;
   const { _id } = detail;

   const handleDelete = (_id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`https://movie-portal-server-wine.vercel.app/movie/${_id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.deleteCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your Movie has been deleted.",
                        icon: "success",
                     });
                  }
               });
         }
      });
   };
   const handleFavorite = (movie) => {
      const data = movie.form;
      fetch("https://movie-portal-server-wine.vercel.app/favorites", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ data, userEmail: user?.email }), // full movie object
      })
         .then((res) => res.json())
         .then(() => Swal.fire({ icon: "success", title: "Added to favorites!" }));
   };
   return (
      <div>
         <div className=" card card-side bg-base-100 m-20  shadow-lg rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-14">
               <div>
                  <img
                     src={poster}
                     alt="Movie"
                     className="h-[400px] w-full object-center rounded-2xl "
                  />
               </div>

               <div className="md:col-span-2 space-y-4">
                  <h1 className="text-3xl font-bold text-gray-800"></h1>
                  <p>
                     <span className="font-semibold text-gray-700">Genre: {genre}</span>
                  </p>
                  <p>
                     <span className="font-semibold text-gray-700">Duration: {duration}</span>
                  </p>
                  <p>
                     <span className="font-semibold text-gray-700">
                        Release Year: {releaseYear}
                     </span>
                  </p>
                  <p>
                     <span className="font-semibold text-gray-700">Summary: {summary}</span>
                  </p>

                  <div className="lg:flex lg:gap-10 mt-6 md:inline-block ">
                     <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-secondary hover:bg-red-600 transition"
                     >
                        Delete Movie <img src={Delete} alt="" className="h-[20px] w-[20px] flex" />
                     </button>

                     <button
                        onClick={() => {
                           handleFavorite(detail);
                        }}
                        className="btn btn-primary hover:bg-blue-950 transition"
                     >
                        Add to Favorite <img src={Favourite} alt="" className="h-[20px] w-[20px]" />
                     </button>

                     <Link
                        to={`/updateMovie/${detail._id}`}
                        className="btn btn-success hover:bg-cyan-300 transition "
                     >
                        Update Movie <img src={Update} alt="" className="h-[20px] w-[20px]" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MovieDetails;
