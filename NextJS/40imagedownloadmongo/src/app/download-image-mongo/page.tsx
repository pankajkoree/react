"use client";
import { useEffect, useState } from "react";

type Image = {
  _id: string;
  name: string;
  contentType: string;
  data: string;
};

const DownloadImageMongoDB = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/download-mongo-image");
        const result = await response.json();

        if (result.success) {
          setImages(result.images);
        } else {
          console.error(
            "Error fetching images: ",
            result.message || "Unknown error"
          );
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false); // Ensure loading state is updated regardless of success or error
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }

  return (
    <div>
      <h1 className="relative flex justify-center text-center p-2 bg-blue-500 text-white text-2xl">
        Fetching the image from MongoDB server
      </h1>
      <div className="relative flex flex-wrap">
        {images.map((image: Image, index) => (
          <div className="m-2" key={`${image._id}-${index}`}>
            <img
              src={`data:${image.contentType};base64,${image.data}`}
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
