"use client";

import "./style.css";
import { useState } from "react";

interface UploadResponse {
  success: boolean;
  response?: string;
}

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(file);

    if (!file) {
      alert("please upload the file...");
      return;
    }

    const data = new FormData();
    data.append("file", file);

    try {
      let result = await fetch("/api/upload-image-mongo", {
        method: "POST",
        body: data,
      });
      const response: UploadResponse = await result.json();

      if (response.success) {
        alert("File Successfully uploaded... ❤️");
      } else {
        alert("Failed to upload..");
      }
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };

  return (
    <>
      <h1 className="relative flex justify-center text-center p-2 text-3xl text-white bg-red-600">
        Uploading the image on the mongoDB server
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          className="relative flex top-5 left-8"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button
          className="animated-button relative top-16 left-5"
          type="submit"
        >
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Upload</span>
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
    </>
  );
};

export default ImageUpload;
