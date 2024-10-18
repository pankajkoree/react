"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EcommerceCard = ({
  id,
  src,
  alt,
  title,
  price,
  rating,
  addToCart,
  addToBuyNow,
}) => {
  const router = useRouter();
  let floorRating = Math.floor(rating);

  const gotoProduct = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div
      className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
      onClick={gotoProduct}
    >
      <div className="h-48 w-full mb-4">
        <Image
          loading="lazy"
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="object-contain h-full w-full transition-transform hover:scale-125 drop-shadow-xl"
        />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex justify-between mt-2">
        <p className="text-xl font-bold">${price}</p>
        <p className="text-sm text-gray-500">{"⭐".repeat(floorRating)}</p>
      </div>
      <div className="flex justify-between mt-4">
        <Button
          variant="carting"
          className="text-xl hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(id);
          }}
        >
          Add to cart
        </Button>
        <Button
          variant="buy"
          className="text-xl hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            addToBuyNow(id);
          }}
        >
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default EcommerceCard;
