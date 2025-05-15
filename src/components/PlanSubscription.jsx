import React from "react";

const PlanSubscription = () => {
   return (
      <div>
         <div className="divider  poppins-semibold text-3xl my-20">
            Choose<span className="text-purple-400">The Plan</span>That Suits For You
         </div>
         <div className=" flex justify-between px-8">
            <div className="card w-96 bg-base-100 shadow-sm">
               <div className="card-body">
                  <span className="badge badge-xs badge-warning">Popular</span>
                  <div className="flex justify-between">
                     <h2 className="text-3xl font-bold text-gray-600">Basic</h2>
                     <span className="text-xl bg-green-500 text-white rounded-xl px-6 py-2 ">
                        FREE
                     </span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs text-purple-400">
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>High-resolution image generation</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-base-content/50 "
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="line-through">No ADs</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-base-content/50"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="line-through">Unlocked premium movie resources</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-base-content/50"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="line-through">AI-driven image enhancements</span>
                     </li>
                     <li className="opacity-50">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-base-content/50"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="line-through">100 TV Channels</span>
                     </li>
                     <li className="opacity-50">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-base-content/50"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="line-through">Unlimited downloading</span>
                     </li>
                  </ul>
                  <div className="mt-6">
                     <button className="btn btn-primary btn-block">Subscribe</button>
                  </div>
               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
               <div className="card-body">
                  <span className="badge badge-xs badge-warning">Popular</span>
                  <div className="flex justify-between">
                     <h2 className="text-3xl font-bold text-gray-600">Standard</h2>
                     <span className="text-xl">$15/mo</span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs text-purple-400">
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>High-resolution image generation</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>No ADs</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-base-content/50"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="line-through">Unlocked premium movie resources</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>AI-driven image enhancements</span>
                     </li>
                     <li className="opacity-50">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-base-content/50"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="line-through">100 TV Channels</span>
                     </li>
                     <li className="opacity-50">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-base-content/50"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span className="line-through">Unlimited downloading</span>
                     </li>
                  </ul>
                  <div className="mt-6">
                     <button className="btn btn-primary btn-block">Subscribe</button>
                  </div>
               </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
               <div className="card-body">
                  <span className="badge badge-xs badge-warning">Most Popular</span>
                  <div className="flex justify-between">
                     <h2 className="text-3xl font-bold text-gray-600">Premium</h2>
                     <span className="text-xl">$30/mo</span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs text-purple-400">
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>High-resolution image generation</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>No ADs</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span> Unlocked premium movie resources</span>
                     </li>
                     <li>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>AI-driven image enhancements</span>
                     </li>
                     <li className="opacity-50">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>100 TV Channels</span>
                     </li>
                     <li className="opacity-50">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="size-4 me-2 inline-block text-success"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                           />
                        </svg>
                        <span>Unlimited downloading</span>
                     </li>
                  </ul>
                  <div className="mt-6">
                     <button className="btn btn-primary btn-block">Subscribe</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PlanSubscription;
