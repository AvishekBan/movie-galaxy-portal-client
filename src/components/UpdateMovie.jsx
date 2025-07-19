import { useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const genres = [
   "Comedy",
   "Drama",
   "Horror",
   "Action",
   "Romance",
   "Crime",
   "Sci-fi",
   "Fantasy",
   "Adventure",
];
const years = [
   2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009,
   2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993,
   1992, 1991, 1990,
];

const UpdateMovie = () => {
   const initialData = useLoaderData();
   const { id } = useParams();
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm();

   useEffect(() => {
      fetch(`http://localhost:5000/update/${id}`)
         .then((res) => res.json())
         .then((data) => {
            setValue("poster", data.poster || ""); // ✅ fixed
            setValue("title", data.title || ""); // ✅ fixed
            setValue("genre", data.genre || ""); // ✅ fixed
            setValue("duration", data.duration || ""); // ✅ fixed
            setValue("releaseYear", data.releaseYear || ""); // ✅ fixed
            setValue("rating", data.rating || 0); // ✅ fixed
            setValue("summary", data.summary || ""); // ✅ fixed
         })
         .catch((err) => console.error("Error loading movie:", err));
   }, [id, setValue]);

   const onSubmit = (data) => {
      fetch(`http://localhost:5000/update/${id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((result) => {
            Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Movie updated successfully!",
               showConfirmButton: false,
               timer: 1500,
            });
            console.log("Update result:", result);
         })
         .catch((err) => {
            console.error("Update failed:", err);
         });
   };

   const handleRating = (rate) => {
      setValue("rating", rate);
   };

   return (
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🎬 Update Your Movie</h2>
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Poster */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Movie Poster URL</label>
               <input
                  defaultValue={initialData?.form.poster}
                  type="text"
                  {...register("poster", { required: "poster is required" })}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/poster.jpg"
               />
               {errors.poster && (
                  <p className="text-red-500 text-sm mt-1">{errors.poster.message}</p>
               )}
            </div>

            {/* Title */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Movie Title</label>
               <input
                  defaultValue={initialData?.form.title}
                  type="text"
                  {...register("title", { required: "title is required" })}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Inception"
               />
               {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
            </div>

            {/* Genre */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Genre</label>
               <select
                  defaultValue={initialData?.form.genre}
                  {...register("genre", { required: "Genre is required" })}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                  <option value="">Select genre</option>
                  {genres.map((g) => (
                     <option key={g} value={g}>
                        {g}
                     </option>
                  ))}
               </select>
               {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>}
            </div>

            {/* Duration */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Duration (minutes)</label>
               <input
                  type="number"
                  defaultValue={initialData?.form.duration}
                  {...register("duration", { required: "Duration is required" })}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 120"
               />
               {errors.duration && (
                  <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>
               )}
            </div>

            {/* Release Year */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Release Year</label>
               <select
                  defaultValue={initialData?.form.releaseYear}
                  {...register("releaseYear", { required: "Release year is required" })}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                  <option value="">Select year</option>
                  {years.map((year) => (
                     <option key={year} value={year}>
                        {year}
                     </option>
                  ))}
               </select>
               {errors.releaseYear && (
                  <p className="text-red-500 text-sm mt-1">{errors.releaseYear.message}</p>
               )}
            </div>

            {/* Rating */}
            <div className="mb-4">
               <label className="block text-gray-700 font-medium mb-2">Rating</label>

               <Rating
                  onClick={handleRating}
                  initialValue={initialData?.form.rating} // ✅ Convert 0–5 back to 0–100 for stars
                  size={30}
                  allowFraction
                  SVGstyle={{ display: "inline-block" }}
               />
               {/* )} */}
               {/* /> */}
               {errors.rating && (
                  <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
               )}
            </div>

            {/* Summary */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Summary</label>
               <textarea
                  defaultValue={initialData?.form.summary}
                  {...register("summary", { required: "Summary is required" })}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Brief summary of the movie..."
               />
               {errors.summary && (
                  <p className="text-red-500 text-sm mt-1">{errors.summary.message}</p>
               )}
            </div>

            {/* Submit */}
            <button
               type="submit"
               className="w-full py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl font-semibold shadow-md transition duration-200"
            >
               ➕ Update Movie
            </button>
         </form>
      </div>
   );
};

export default UpdateMovie;
