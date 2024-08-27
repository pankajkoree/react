import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  let authStatus = useSelector((state) => state.auth.status);
  console.log(authStatus);
  console.log(authentication);

  useEffect(() => {
    // TODO make it more easy
    if (authStatus === true && authentication === false) {
      navigate("/login");
    } else if (authStatus === true && authentication === true) {
      navigate("/signup");
    } else {
      navigate("/");
    }
  }, [authStatus, navigate, authentication]);
  if (children) {
    {
      return children;
    }
  } else {
    retrun(
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
      ></div>
    );
  }
}
