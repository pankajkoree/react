import { Button } from "@/components/ui/button";
import Image from "next/image";

const EcommerceCard = ({ src, alt, title, price, rating }) => {
  let floorRating = rating;
  floorRating = Math.floor(floorRating);
  return (
    <div className="border rounded-lg p-4 shadow-lg shadow-gray-600 dark:shadow-purple-900 dark:shadow-md dark:bg-gray-700 hover:shadow-lg transition-transform duration-200 ease-in-out hover:shadow-green-400 hover:scale-105 overflow-hidden dark:hover:shadow-green-400">
      {/* Product thumbnail */}
      <div className="h-48 w-full mb-4">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="object-contain h-full w-full transition-transform duration-200 ease-in-out hover:scale-125"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold">{title}</h2>
      {/* Price and rating */}
      <div className="flex justify-between mt-2">
        <p className="text-xl font-bold">${price}</p>
        <p className="text-sm text-gray-500">{"⭐".repeat(floorRating)}</p>
      </div>
      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <Button variant="carting">Add to cart</Button>
        <Button variant="buy">Buy now</Button>
      </div>
    </div>
  );
};

export default EcommerceCard;