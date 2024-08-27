import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  let authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    console.log(authStatus);
    console.log(authentication);
    // TODO make it more easy
    if (authStatus === true) {
      navigate("/");
    } else if (authStatus === false) {
      navigate("/login");
    }

    // if (authentication && authStatus !== authentication) {
    //   navigate("/login");
    // } else if (!authentication && authStatus !== authentication) {
    //   navigate("/");
    // }
  }, [authStatus, navigate, authentication]);
  if (children) {
    {
      children;
    }
  } else {
    <div
      style="
  .loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 6px;
    background:
      conic-gradient(from 135deg at top,currentColor 90deg, #0000 0) 0 calc(50% - 4px)/17px 8.5px,
      radial-gradient(farthest-side at bottom left,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) top right/50%  50% content-box content-box,
      radial-gradient(farthest-side at top        ,#0000 calc(100% - 6px),currentColor calc(100% - 5px) 99%,#0000) bottom   /100% 50% content-box content-box;
    background-repeat: no-repeat;
    animation: l11 1s infinite linear;
  }
  @keyframes l11{ 
    100%{transform: rotate(1turn)}
  }"
    ></div>;
  }
}
