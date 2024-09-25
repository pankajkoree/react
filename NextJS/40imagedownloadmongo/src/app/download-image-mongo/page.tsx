"use client";
import { error } from "console";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

const DownloadImageMongoDB = () => {
  //   let id: number;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/download-mongo-image");
        const result = await response.json();

        console.log(result);

        if (result.success) {
          setImages(result.images);
        } else {
          console.log("error");
        }
      } catch (error) {
        return NextResponse.json({
          error,
        });
      }
    };
    fetchImages();
  }, []);
  return (
    <div>
      <h1 className="relative flex justify-center text-center p-2 bg-blue-500 text-white text-2xl">
        Fetching the image from mongodb server
      </h1>
      <div className="relative flex flex-wrap">
        {images.map((image, i) => (
          <div className="m-2">
            <img
              src={`data:${image.contentType};base64,${Buffer.from(
                image.data
              ).toString("base64")}`}
              alt={image.name}
              className="max-w-[200px] max-h-[200px]"
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadImageMongoDB;
