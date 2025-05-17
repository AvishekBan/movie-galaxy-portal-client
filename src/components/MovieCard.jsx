import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
   const { poster, title, genre, duration, releaseYear, rating } = movie.form;
   return (
      <div className="card bg-base-100 w-96 shadow-sm">
         <figure>
            <img className="w-full h-60" src={poster} alt="" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">
               {title}
               <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="divider divider-secondary"></div>

            <div className="flex ">
               <div className="">
                  <p className="font-semibold ">Genre: {genre}</p>
                  <p className="font-semibold ">Duration: {duration} min</p>
               </div>
               <div className="divider divider-horizontal"></div>
               <div>
                  <p className="font-semibold ">Year: {releaseYear}</p>
                  <p className="font-semibold ">Rating: {rating}</p>
               </div>
            </div>

            <div className="card-actions justify-end">
               <Link to="/movieDetails" state={{ movie }} className="btn bg-black text-white">
                  See Details
               </Link>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default MovieCard;
