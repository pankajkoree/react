"use client";

import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { CarouselPage } from "../app/carousel/CarouselPage";
import ProductList from "../app/ProductsList/ProductList";

export default function Home() {
  return (
    <>
      <Navbar />

      <CarouselPage />

      <ProductList />

      <Footer />
    </>
  );
}
