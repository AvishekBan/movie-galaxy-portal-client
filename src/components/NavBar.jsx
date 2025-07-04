import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Logout from "../assets/logout_4034229.png";

const NavBar = () => {
   const { user, logout } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleLogout = () => {
      logout()
         .then((result) => {
            console.log(result.user);
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const links = (
      <>
         <Link to="/" className="font-bold  cursor-pointer hover:border-b-2   border-white ">
            Home
         </Link>
         <Link
            to="/allMovies"
            className="font-bold  cursor-pointer hover:border-b-2   border-white "
         >
            All Movies
         </Link>
         <Link to="/addmovie" className="font-bold  cursor-pointer hover:border-b-2   border-white">
            Add Movie
         </Link>
         <Link
            to="/myFavorites"
            className="font-bold cursor-pointer hover:border-b-2   border-white"
         >
            My favorites
         </Link>
         <Link to="/tvseries" className="font-bold cursor-pointer hover:border-b-2   border-white">
            Tv Series
         </Link>
         <Link to="/register" className="font-bold  cursor-pointer hover:border-b-2   border-white">
            Register
         </Link>

         {user ? (
            <div>
               <button
                  onClick={handleLogout}
                  className=" flex items-center gap-2 font-bold  text-red-700 cursor-pointer hover:border-b-2 border-white"
               >
                  <span>Logout</span>

                  <img className="w-[20px] h-[20px]" src={Logout} alt="" />
               </button>
            </div>
         ) : (
            <Link to="/login" className="font-bold cursor-pointer hover:border-b-3   border-white">
               Login
            </Link>
         )}
      </>
   );
   return (
      <div
         className="navbar  fixed top-0 w-full    z-50 bg-white/10 backdrop-blur-md border-b border-white/20 grayscale text-gray-800
       shadow-sm flex"
      >
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     {" "}
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />{" "}
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
               >
                  {links}
               </ul>
            </div>

            <a className="poppins-semibold text-xl">
               <span>Movie</span>
               <span className="text-purple-400">GAlaxy</span>
            </a>
         </div>
         <div className="navbar-center hidden  lg:flex">
            <ul className="menu menu-horizontal    gap-8 pr-24">{links}</ul>
         </div>
         <div className="relative group w-10 mr-2    md:mr-5">
            {user && (
               <>
                  <img className="rounded-full" src={user.photoURL} alt={user.displayName} />
                  <div className="absolute  -left-5 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                     {user.displayName}
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default NavBar;
