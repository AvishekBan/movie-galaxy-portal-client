import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export const SearchBar = ({ searchTerm, onChange }) => (
   <div className="w-full flex justify-center mb-8">
      <input
         type="text"
         placeholder="Search..."
         value={searchTerm}
         onChange={(e) => onChange(e.target.value)}
         className="input input-bordered w-full max-w-md text-lg border-b-fuchsia-800"
      />
   </div>
);

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
                  <p className="font-semibold flex items-center gap-2 mt-2">
                     <Rating
                        readonly
                        initialValue={rating}
                        allowFraction
                        size={25}
                        SVGstyle={{ display: "inline-block" }}
                     />
                     <span className="text-gray-700 font-medium">{rating.toFixed(1)}</span>
                  </p>
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
