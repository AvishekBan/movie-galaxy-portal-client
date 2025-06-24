const Myfavorites = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
         {
            <div className="card bg-base-100 shadow-md p-4 rounded-2xl">
               <img src="" alt="" className="rounded-xl h-[300px] w-full object-cover" />
               <h2 className="text-xl font-bold mt-2"></h2>
               <p>
                  <strong>Genre:</strong>
               </p>
               <p>
                  <strong>Duration:</strong>
               </p>
               <p>
                  <strong>Release Year:</strong>
               </p>
               <p>
                  <strong>Rating:</strong>
               </p>
               <button className="btn btn-error mt-4">Delete Favorite</button>
            </div>
         }
      </div>
   );
};

export default Myfavorites;
