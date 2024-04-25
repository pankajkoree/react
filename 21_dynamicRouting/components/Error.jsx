import React from "react";
import { useRouteError } from "react-router-dom";

export default function () {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Something went wrong... {error.status}</h1>
    </div>
  );
}
