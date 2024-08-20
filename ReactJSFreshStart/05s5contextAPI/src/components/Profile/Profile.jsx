import React, { useContext } from "react";
import userContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(userContext);
  if (!user) {
    return (
      <div className="relative w-[40%] flex flex-col h-44 border-2 gap-4 justify-center items-center top-12 left-[30%] text-3xl">
        <h2>Please login</h2>
      </div>
    );
  } else {
    return (
      <div className="relative w-[40%] flex flex-col h-44 border-2 gap-4 justify-center items-center top-12 left-[30%] text-3xl">
        <h2>Welcome {user.username}</h2>
      </div>
    );
  }
}

export default Profile;
