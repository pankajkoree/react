"use client";

import "./style.css";
import { useState } from "react";

interface UploadResponse {
  success: boolean;
  response?: string;
}

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!file) {
      alert("Please upload a file...");
      return;
    }

    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      alert("Invalid file type. Only JPEG, PNG, and GIF are allowed.");
      return;
    }

    const data = new FormData();
    data.append("file", file);

    setLoading(true);
    try {
      const result = await fetch("/api/upload-image-mongo", {
        method: "POST",
        body: data,
      });
      const response: UploadResponse = await result.json();

      if (response.success) {
        alert("File successfully uploaded... ❤️");
        setFile(null);
      } else {
        setErrorMessage(response.response || "Failed to upload.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setErrorMessage("An error occurred during upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="relative flex justify-center text-center p-2 text-3xl text-white bg-red-600">
        Uploading the Image to the MongoDB Server
      </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="relative flex top-5 left-8">
          <input
            id="file-upload"
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            accept="image/jpeg, image/png, image/gif"
            required
            className="hidden"
          />
          <span className="cursor-pointer border rounded px-4 py-2 bg-gray-200">
            {file ? file.name : "Choose a file..."}
          </span>
        </label>

        <button
          className="animated-button relative top-16 left-5"
          type="submit"
          disabled={loading}
        >
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">{"Upload"}</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </form>

      {errorMessage && <div className="text-red-600 mt-4">{errorMessage}</div>}
    </>
  );
};

export default ImageUpload;
