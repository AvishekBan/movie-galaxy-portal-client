import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./Root";
import Allmovies from "./components/Allmovies";
import Addmovie from "./components/Addmovie";
import Home from "./components/Home";
import Myfavorites from "./components/Myfavorites";
import Register from "./components/Register";
import Login from "./components/Login";
import TvSeries from "./components/Tvseries";
import Error from "./components/Error";
import Banner from "./components/Banner";
import MovieDetails from "./components/MovieDetails";
import FeaturedMovies from "./components/FeaturedMovies";
import PlanSubscription from "./components/PlanSubscription";
import MovieCard from "./components/MovieCard";
import AuthProvider from "./providers/AuthProvider";
import PrivatePath from "./components/PrivatePath";
import UpdateMovie from "./components/UpdateMovie";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
         {
            path: "/allMovies",
            element: <Allmovies></Allmovies>,
            loader: () => fetch("http://localhost:5000/movie"),
         },
         {
            path: "/addmovie",
            element: <Addmovie></Addmovie>,
         },
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/myFavorites",
            element: (
               <PrivatePath>
                  <Myfavorites />
               </PrivatePath>
            ),
         },
         {
            path: "/tvseries",
            element: (
               <PrivatePath>
                  <TvSeries />
               </PrivatePath>
            ),
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/banner",
            element: <Banner></Banner>,
         },
         {
            path: "/movieDetails/:id",
            element: (
               <PrivatePath>
                  <MovieDetails />
               </PrivatePath>
            ),
            loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`),
         },
         {
            path: "/FeaturedMovies",
            element: <FeaturedMovies></FeaturedMovies>,
         },
         {
            path: "/PlanSubscription",
            element: <PlanSubscription></PlanSubscription>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/movieCard",
            element: <MovieCard></MovieCard>,
         },
         {
            path: "/updateMovie/:id",
            element: <UpdateMovie></UpdateMovie>,
            loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`),
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </StrictMode>
);
