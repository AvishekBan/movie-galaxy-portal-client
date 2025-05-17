import { Link, useLocation } from "react-router-dom";

const MovieDetails = () => {
   const { state } = useLocation();
   const movie = state?.movie;

   if (!movie) {
      return <div className="text-center mt-10 text-red-500">No movie data provided.</div>;
   }

   const { poster, genre, duration, releaseYear, summary } = movie.form;
   return (
      <div>
         <div className=" card card-side bg-base-100  shadow-lg rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <figure>
                  <img src={poster} alt="Movie" />
               </figure>
               <div className="md:col-span-2 space-y-4">
                  <h1 className="text-3xl font-bold text-gray-800"></h1>
                  <p>
                     <span className="font-semibold">Genre:{genre}</span>
                  </p>
                  <p>
                     <span className="font-semibold">Duration:{duration}</span>
                  </p>
                  <p>
                     <span className="font-semibold">Release Year:{releaseYear}</span>
                  </p>
                  <p>
                     <span className="font-semibold">Summary:{summary}</span>
                  </p>

                  <div className="flex gap-4 mt-6">
                     <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        Delete Movie
                     </button>
                     <Link
                        to="/myFavorites"
                        className="btn btn-primary hover:bg-purple-600 transition"
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
