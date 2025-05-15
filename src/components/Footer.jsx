import React from "react";
import img8 from "../assets/X_logo_2023_(white).png";

const Footer = () => {
   return (
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
         <aside className="grid-flow-col items-center">
            <a className="poppins-semibold text-xl pr-8">
               <span>Movie</span>
               <span className="text-purple-400">GAlaxy</span>
            </a>

            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
         </aside>

         <p className="text-gray-500 font-semibold">Contact No: 017******** </p>

         <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
               <img className="h-[24px] w-[24px]" src={img8} alt="" />
            </a>
            <a>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
               >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
               </svg>
            </a>
            <a>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
               >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
               </svg>
            </a>
         </nav>
      </footer>
   );
};

export default Footer;
