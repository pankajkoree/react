import React from "react";

const page = ({ params }) => {
  return (
    <>
      <h1>Blog No: {params.posts[0]} </h1>
      <h2>Post No: {params.posts[1]} </h2>
    </>
  );
};

export default page;
