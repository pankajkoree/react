import React from "react";
import { useParams } from "react-router-dom";

export default function () {
  const params = useParams();
  console.log(params)
  return (
    <div>
      <h1>contact us</h1>
    </div>
  );
}