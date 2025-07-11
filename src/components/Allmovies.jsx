import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { SearchBar } from "./MovieCard";
const Allmovies = () => {
   const movies = useLoaderData();
   const [searchTerm, setSearchTerm] = useState("");

   const filteredMovies = movies.filter((movie) =>
      movie.form.title.toLowerCase().includes(searchTerm.toLowerCase())
   );
   return (
      <div className="m-20">
         <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
         <h1 className="font-semibold text-2xl text-gray-600 py-4">
            {filteredMovies.length} movie{filteredMovies.length !== 1 && "s"} found
         </h1>
         <div className="grid md:grid-cols-3 gap-4">
            {filteredMovies.map((movie) => (
               <MovieCard key={movie._id} movie={movie}></MovieCard>
            ))}
         </div>
      </div>
   );
};

export default Allmovies;
