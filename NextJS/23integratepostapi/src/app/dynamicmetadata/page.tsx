import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <>
      <h1
        className={`relative flex text-center justify-center text-3xl p-2 bg-purple-400 text-red-600 ${poppins.className}`}
      >
        Dynamic Metadata
      </h1>
    </>
  );
};

export default page;

export function generateMetadata() {
  return {
    title: "dynamic metadata",
    description: "updating the metadata dynamically",
  };
}
