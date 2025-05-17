import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const FeaturedMovies = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/movie")
         .then((res) => res.json())
         .then((data) => {
            const sorted = data
               .map((item) => item.form)
               .sort((a, b) => b.rating - a.rating)
               .slice(0, 6);
            setMovies(sorted);
         });
   }, []);

   return (
      <div>
         <div className="divider divider-neutral poppins-semibold text-3xl">
            Featured<span className="text-purple-400">Movies</span>
         </div>

         <div className="flex flex-wrap justify-center gap-6">
            {movies.map((movie, index) => (
               <div key={index} className="card bg-base-100 w-96 shadow-sm">
                  <figure className="px-10 pt-10">
                     <img
                        src={movie.poster}
                        alt={movie.title}
                        className="rounded-xl h-64 object-cover"
                     />
                  </figure>
                  <div className="card-body items-center text-center">
                     <h2 className="card-title text-gray-600">{movie.title}</h2>
                     <div className="flex">
                        <p className="text-gray-600">{movie.genre}</p>
                        <div className="divider divider-horizontal"></div>
                        <p className="text-gray-600">{movie.duration} Min</p>
                        <div className="divider divider-horizontal"></div>
                        <p className="text-gray-600">{movie.releaseYear}</p>
                     </div>

                     <div className="flex items-center gap-2 mt-2">
                        <Rating
                           readonly
                           initialValue={movie.rating}
                           allowFraction
                           size={25}
                           SVGstyle={{ display: "inline-block" }}
                        />
                        <span className="text-gray-700 font-medium">{movie.rating.toFixed(1)}</span>
                     </div>
                     <div className="card-actions mt-4">
                        <Link to="/movieDetails" state={{ movie: { form: movie } }}>
                           <button className="btn btn-primary">See Details</button>
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FeaturedMovies;
