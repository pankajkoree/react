import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  let authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // TODO make it more easy
    // if (authStatus === true) {
    //   navigate("/");
    // } else if (authStatus === false) {
    //   navigate("/login");
    // }
    authStatus = false;
    authentication = true;
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// export default function Protected({ children, authentication = true }) {

//   const navigate = useNavigate();
//   const [loader, setLoader] = useState(true);
//   const authStatus = useSelector((state) => state.auth.status);

//   useEffect(() => {
//     console.log(authStatus)
//     console.log(authentication)
//     // If the route is for authenticated users and the user is not authenticated, redirect to login
//     if (authentication && !authStatus) {
//       navigate("/login");
//     }
//     // If the route is for non-authenticated users and the user is authenticated, redirect to home
//     else if (!authentication && authStatus) {
//       navigate("/");
//     }
//     setLoader(false);
//   }, [authStatus, navigate, authentication]);

//   return loader ? <h1>Loading...</h1> : <>{children}</>;
// }
