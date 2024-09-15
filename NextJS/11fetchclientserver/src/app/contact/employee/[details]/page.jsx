"use client";

const employee = ({ params }) => {
  // console.log(params);
  return (
    <>
      <h1>Employee Details</h1>
      <h2>Employee name: {params.details}</h2>
    </>
  );
};

export default employee;
