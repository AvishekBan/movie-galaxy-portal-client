import React, { useState } from "react";

const genres = ["Comedy", "Drama", "Horror", "Action", "Romance"];
const years = [2024, 2023, 2022, 2021, 2020];

const Addmovie = () => {
   const [form, setForm] = useState({
      poster: "",
      title: "",
      genre: "",
      duration: "",
      releaseYear: "",
      rating: 0,
      summary: "",
   });

   const [errors, setErrors] = useState({});

   const validate = () => {
      const newErrors = {};

      if (!form.poster || !form.poster.startsWith("http")) {
         newErrors.poster = "Poster must be a valid URL";
      }
      if (!form.title || form.title.length < 2) {
         newErrors.title = "Title must be at least 2 characters long";
      }
      if (!form.genre) {
         newErrors.genre = "Please select a genre";
      }
      if (!form.duration || Number(form.duration) <= 60) {
         newErrors.duration = "Duration must be more than 60 minutes";
      }
      if (!form.releaseYear) {
         newErrors.releaseYear = "Please select a release year";
      }

      if (!form.summary || form.summary.length < 10) {
         newErrors.summary = "Summary must be at least 10 characters long";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
         console.log("Form Submitted:", form);
         // handle the actual movie add logic here
      }
   };

   return (
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🎬 Add a New Movie</h2>
         <form onSubmit={handleSubmit} className="space-y-6">
            {/* Poster */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Movie Poster URL</label>
               <input
                  type="text"
                  name="poster"
                  value={form.poster}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/poster.jpg"
               />
               {errors.poster && <p className="text-red-500 text-sm mt-1">{errors.poster}</p>}
            </div>

            {/* Title */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Movie Title</label>
               <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Inception"
               />
               {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Genre */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Genre</label>
               <select
                  name="genre"
                  value={form.genre}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                  <option value="">Select genre</option>
                  {genres.map((g) => (
                     <option key={g} value={g}>
                        {g}
                     </option>
                  ))}
               </select>
               {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre}</p>}
            </div>

            {/* Duration */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Duration (minutes)</label>
               <input
                  type="number"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 120"
               />
               {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
            </div>

            {/* Release Year */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Release Year</label>
               <select
                  name="releaseYear"
                  value={form.releaseYear}
                  onChange={handleChange}
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
                  <p className="text-red-500 text-sm mt-1">{errors.releaseYear}</p>
               )}
            </div>

            {/* Rating */}
            <div>
               <label className="block text-gray-700 font-medium mb-2">Rating</label>

               {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
            </div>

            {/* Summary */}
            <div>
               <label className="block text-gray-700 font-medium mb-1">Summary</label>
               <textarea
                  name="summary"
                  value={form.summary}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Brief summary of the movie..."
               />
               {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
            </div>

            {/* Submit */}
            <button
               type="submit"
               className="w-full py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl font-semibold shadow-md transition duration-200"
            >
               ➕ Add Movie
            </button>
         </form>
      </div>
   );
};

export default Addmovie;
