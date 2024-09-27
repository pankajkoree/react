"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import star from "../../assets/star-regular.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let productData = await fetch("https://dummyjson.com/products");
      productData = await productData.json();
      setProducts(productData.products);
    };
    getProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {" "}
      {/* Container for cards */}
      {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          {" "}
          {/* Responsive widths */}
          <Card>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle> {/* Use product title */}
              <CardDescription>{product.description}</CardDescription>{" "}
              {/* Use product description */}
            </CardHeader>
            <CardContent>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
              />{" "}
              <p>Price: ${product.price}</p>
            </CardContent>
            <CardFooter>
              <p>
                Rating: {product.rating}{" "}
                <Image src={star} alt="star" width={16} height={16} />
              </p>{" "}
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Page;
