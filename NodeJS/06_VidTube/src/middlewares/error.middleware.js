// import mongoose from "mongoose";
// import { ApiError } from "../utils/ApiError.js";

// const errorHandler = (err, req, res, next) => {
//   let error = err;

//   if (!(error instanceof ApiError)) {
//     const statusCode =
//       error.statusCode || error instanceof mongoose.Error ? 400 : 500;

//     const message = error.message || "something went wrong";
//     error = new ApiError(statusCode, message, error?.errors || [], err.stack);
//   }

//   const response = {
//     ...error,
//     message: error.message,
//     ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {}),
//   };

//   return res.status(error.statusCode).json(response);
// };

// export { errorHandler };

import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = error instanceof mongoose.Error ? 400 : 500;

    const message = error.message || "Something went wrong";
    error = new ApiError(statusCode, message, error.errors || [], err.stack);
  }

  const response = {
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {}),
  };

  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json(response);
};

export { errorHandler };
