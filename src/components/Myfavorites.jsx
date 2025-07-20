import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Myfavorites = () => {
   const [favorites, setFavorites] = useState([]);
   const { user, loading } = useContext(AuthContext);

   useEffect(() => {
      fetch(`https://movie-portal-server-wine.vercel.app/favorites?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => setFavorites(data));
   }, [user]);

   if (loading) return null;

   const handleDelete = (id) => {
      fetch(`https://movie-portal-server-wine.vercel.app/favorites/${id}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      }).then(() => {
         Swal.fire({ icon: "success", title: "Removed from favorites!" });
      });
   };

   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
         {favorites.map((movie) => {
            return (
               <div key={movie._id} className="card bg-base-100 shadow-md p-4 rounded-2xl">
                  <img
                     src={movie.data.poster}
                     alt=""
                     className="rounded-xl h-[300px] w-full object-cover"
                  />
                  <h2 className="text-xl font-bold mt-2">{movie.data.title}</h2>
                  <p>
                     <strong>Genre:</strong> {movie.data.genre}
                  </p>
                  <p>
                     <strong>Duration:</strong> {movie.data.duration}
                  </p>
                  <p>
                     <strong>Release Year:</strong> {movie.data.releaseYear}
                  </p>
                  <p>
                     <strong>Rating:</strong> {movie.data.rating}
                  </p>

                  <button className="btn btn-error mt-4" onClick={() => handleDelete(movie._id)}>
                     Delete Favorite
                  </button>
               </div>
            );
         })}
      </div>
   );
};

export default Myfavorites;
