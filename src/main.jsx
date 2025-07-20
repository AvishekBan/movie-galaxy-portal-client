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
            loader: () => fetch("https://movie-portal-server-wine.vercel.app/movie"),
         },
         {
            path: "/addmovie",
            element: (
               <PrivatePath>
                  <Addmovie />
               </PrivatePath>
            ),
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
            loader: ({ params }) =>
               fetch(`https://movie-portal-server-wine.vercel.app/movies/${params.id}`),
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
            element: (
               <PrivatePath>
                  <UpdateMovie />
               </PrivatePath>
            ),
            loader: ({ params }) =>
               fetch(`https://movie-portal-server-wine.vercel.app/update/${params.id}`),
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
