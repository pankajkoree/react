import Image from "next/image";
import ecommerceimage from "../app/assets/ecommerceimage.jpg";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />

      {/* <Image
        src={ecommerceimage}
        alt="ecommerceimage"
        className="relative w-full"
      />

      <h1 className="relative flex justify-center text-center p-2 text-xl text-white bg-green-500">
        Footer
      </h1> */}
    </>
  );
}
