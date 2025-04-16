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

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
         {
            path: "/allMovies",
            element: <Allmovies></Allmovies>,
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
            element: <Myfavorites></Myfavorites>,
         },
         {
            path: "/tvseries",
            element: <TvSeries></TvSeries>,
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
            path: "/login",
            element: <Login></Login>,
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
