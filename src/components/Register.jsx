import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
const Register = () => {
   const { createUser, user } = useContext(AuthContext);
   const route = useNavigate();

   useEffect(() => {
      if (user) {
         route("/");
      }
   }, [route, user]);

   const handleSignUp = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;
      const name = e.target.name.value; // ✨CHANGED
      const image = e.target.image.value; // ✨CHANGED
      console.log("form sign up", email, password);

      if (!name || !email || !image || !password) {
         Swal.fire({ icon: "error", title: "Error!", text: "Please fill all fields." }); // ✨CHANGED
         return;
      }

      if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
         Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Password must contain uppercase, lowercase and be at least 6 characters long.",
         }); // ✨CHANGED
         return; // ✨CHANGED
      }

      createUser(email, password)
         .then((result) => {
            Swal.fire({
               icon: "success",
               title: "Registration Successful!",
               text: "Your account has been created.",
            });
            console.log(result.user);
         })
         .catch((error) => {
            console.log("error", error);
         });
   };

   return (
      <div className="hero bg-base-200 min-h-screen ">
         <div className="hero-content flex-col items-center text-center my-6 border-2 px-8 py-7  w-[400px] md:w-[600px] rounded-xl">
            <div className="text-center  pb-6 md:pb-10 lg:pb-14">
               <h1 className="text-5xl font-bold">Register Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <form onSubmit={handleSignUp} className="card-body">
                  <fieldset className="fieldset ">
                     <label className="fieldset-label ">Name</label>
                     <input type="text" className="input " placeholder="Name" name="name" />
                     <label className="fieldset-label">Email</label>
                     <input type="email" className="input" placeholder="Email" name="email" />

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
                        name="password"
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
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
