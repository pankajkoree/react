"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

const page = () => {
  // 1st way
  //   this redirect directly directs to the home page when we try to access redirection page
  //   redirect("/home");

  // 2nd way, if the user will be loggedin, then can access the contact page, else will remain in redirection page
  //   const [loggedIn, setloggedIn] = useState(false);
  //   if (loggedIn) {
  //     redirect("/contact");
  //   }

  return (
    <>
      <h1 className="relative flex justify-center text-center p-2 text-3xl bg-blue-500 text-yellow-200">
        Redirection in not effective way
      </h1>

      {/* <button
        onClick={() => {
          setloggedIn(true);
        }}
        className="relative flex justify-center p-4 bg-blue-600 rounded-lg top-4 w-[300px] text-2xl left-[42%]"
      >
        Redirect to Contact
      </button> */}
    </>
  );
};

export default page;
