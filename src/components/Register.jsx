import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
   const handleSignUp = (e) => {
      e.preventDefault();
      console.log("form sign up");
   };

   return (
      <div className="hero bg-base-200 min-h-screen ">
         <div className="hero-content flex-col items-center text-center my-6 border-2 px-8 py-7  w-[400px] md:w-[600px] rounded-xl">
            <div className="text-center  pb-6 md:pb-10 lg:pb-14">
               <h1 className="text-5xl font-bold">Register Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <div onSubmit={handleSignUp} className="card-body">
                  <fieldset className="fieldset ">
                     <label className="fieldset-label ">Name</label>
                     <input type="Name" className="input " placeholder="Name" name="Name" />
                     <label className="fieldset-label">Email</label>
                     <input type="Email" className="input" placeholder="Email" name="Email" />

                     <label className="fieldset-label">Photo URL</label>
                     <input
                        type="url"
                        name="image"
                        className="input"
                        placeholder="Paste photo URL here"
                     />

                     <label className="fieldset-label">Password</label>
                     <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        name="Password"
                     />
                     <div>
                        <a className="link link-hover">Forgot password?</a>
                     </div>
                     <button className="btn btn-neutral mt-4">Register</button>
                     <div className="font-semibold flex justify-between">
                        Already have an account?
                        <Link to="/login" className="underline text-[#e01e37]">
                           Login Here
                        </Link>
                     </div>
                  </fieldset>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
