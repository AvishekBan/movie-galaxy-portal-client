import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const Allmovies = () => {
   const movies = useLoaderData();
   return (
      <div className="m-20">
         <h1>{movies.length}</h1>
         <div className="grid md:grid-cols-3 gap-4">
            {movies.map((movie) => (
               <MovieCard key={movie._id} movie={movie}></MovieCard>
            ))}
         </div>
      </div>
   );
};

export default Allmovies;
