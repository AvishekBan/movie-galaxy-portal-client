import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/google.png";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
   const { signInUser } = useContext(AuthContext);
   const { signInWithGoogle } = useContext(AuthContext);
   const location = useLocation();
   const route = useNavigate();

   const handleSignIn = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);

      if (!email || !password) {
         Swal.fire({ icon: "error", title: "Oops!", text: "Please fill all fields" });
         return;
      }

      signInUser(email, password)
         .then((result) => {
            route(location?.state ? location.state : "/");
            Swal.fire({ icon: "success", title: "Logged in!", text: "Welcome back!" });
            console.log(result.user);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then((result) => {
            route(location?.state ? location.state : "/");
            Swal.fire({ icon: "success", title: "Logged in!", text: "Welcome back!" });
            console.log(result.user);
         })
         .catch((error) => {
            Swal.fire({ icon: "error", title: "Error!", text: error.message });
         });
   };

   return (
      <div className="hero bg-base-200 min-h-screen ">
         <div className="hero-content flex-col items-center text-center my-6 border-2 px-8 py-7  w-[400px] md:w-[600px] rounded-xl">
            <div className="text-center  pb-6 md:pb-10 lg:pb-14">
               <h1 className="text-5xl font-bold">LogIn Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <form onSubmit={handleSignIn} className="card-body">
                  <fieldset className="fieldset ">
                     <label className="fieldset-label">Email</label>
                     <input type="email" className="input" placeholder="email" name="email" />

                     <label className="fieldset-label">Password</label>
                     <input
                        type="password"
                        className="input"
                        placeholder="password"
                        name="password"
                     />
                     <div>
                        <a className="link link-hover">Forgot password?</a>
                     </div>
                     <button className="btn btn-neutral mt-4">Log In</button>
                     <div className="font-medium flex justify-between">
                        Don't have an account?
                        <Link to="/register" className="underline text-[#e01e37]">
                           Create an account
                        </Link>
                     </div>
                  </fieldset>
                  <div className="divider font-bold my-4">Social Login</div>
               </form>
               <div className="pb-5">
                  <button className="ml-2.5 bg-white border border-gray-600 rounded-3xl px-2 py-2">
                     <div className="flex">
                        <img className="w-7  " src={img1} alt="" />
                        <div onClick={() => handleGoogleSignIn()} className="px-2 font-semibold">
                           Login with Google
                        </div>
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
