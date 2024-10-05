import React from "react";
import toast from "react-hot-toast";

const UserView = () => {
  try {
    // await fetch("")
  } catch (error) {
    toast.error("fetching data failed");
  }

  return (
    <div>
      <h1>Page seen to user</h1>
    </div>
  );
};

export default UserView;
