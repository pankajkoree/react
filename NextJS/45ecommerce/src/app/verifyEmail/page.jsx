"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyEmail", { token });
      setVerified(true);
      setError(false);
    } catch (error) {
      setError(true);
      setVerified(false);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    if (urlToken) {
      setToken(urlToken);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-4 py-2">
      <h1 className="text-4xl mb-4">Verify Email</h1>

      {/* Input box for token */}
      <input
        type="text"
        className="border-2 border-gray-300 p-2 mb-4 w-full max-w-md"
        placeholder="Enter verification token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      {/* Verify button */}
      <button
        onClick={verifyUserEmail}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Verify
      </button>

      {/* Show the verification status */}
      {verified && (
        <div className="mt-4">
          <h2 className="text-2xl text-green-500">Email Verified!</h2>
        </div>
      )}

      {/* Show error message */}
      {error && (
        <div className="mt-4">
          <h2 className="text-2xl text-red-500">Error verifying email</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
