"use client";

import { useEffect, useState } from "react";

const getProductsData = async () => {
  try {
    let response = await fetch(
      "http://localhost:3000/api/products/getProducts"
    );
    response = await response.json();
    if (response.success) {
      return response.results;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

const SpecificProductPage = ({ params }) => {
  const [specificProduct, setSpecificProduct] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsData();
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products && params?.product?.[0]) {
      const foundProduct = products.find(
        (product) => product.id === params.product[0]
      );
      if (foundProduct) {
        setSpecificProduct(foundProduct);
      }
    }
  }, [products, params]);

  return (
    <div className="container mx-auto p-4">
      {specificProduct ? (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={specificProduct.images[0]}
              alt={specificProduct.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 space-y-4">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {specificProduct.title}
              </h1>
              <p className="text-yellow-500">
                {Array(specificProduct.rating).fill("⭐").join(" ")} (
                {specificProduct.rating} / 5)
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700">{specificProduct.description}</p>

            {/* Product Details Table */}
            <div className="border-t pt-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Product Details
              </h2>
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <th className="pr-4 py-2 text-gray-600">Brand:</th>
                    <td className="py-2">{specificProduct.brand}</td>
                  </tr>
                  <tr>
                    <th className="pr-4 py-2 text-gray-600">Weight:</th>
                    <td className="py-2">{specificProduct.weight} kg</td>
                  </tr>
                  <tr>
                    <th className="pr-4 py-2 text-gray-600">Dimensions:</th>
                  </tr>
                  <tr>
                    <th className="pr-4 py-2 text-gray-600">Warranty:</th>
                    <td className="py-2">{specificProduct.warranty} years</td>
                  </tr>
                  <tr>
                    <th className="pr-4 py-2 text-gray-600">Availability:</th>
                    <td className="py-2">
                      {specificProduct.availability
                        ? "In Stock"
                        : "Out of Stock"}
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-4 py-2 text-gray-600">Price:</th>
                    <td className="py-2 text-xl font-bold text-gray-900">
                      ${specificProduct.price}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default SpecificProductPage;
