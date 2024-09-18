import Image from "next/image";
import windowImage from "../../assets/w11.png";

const page = () => {
  return (
    <div>
      <h1 className="relative flex justify-center text-3xl bg-green-600 text-white p-2">
        Image component in Next JS for image optimization
      </h1>
      {/* Loading the image source from the local source */}
      <Image
        src={windowImage}
        alt="windows 11 colorful image"
        width={500}
        className="relative flex left-[37%] top-5 rounded-lg border-2 border-black"
      />
      <p className="relative flex justify-center top-5 text-2xl">
        Loaded image from the local source
      </p>
      {/* Loading the image source from the remote server */}
      <Image
        src={
          "https://images.pexels.com/photos/10571173/pexels-photo-10571173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="image from remote server"
        width={500}
        height={300}
        className="relative flex left-[37%] top-5 rounded-lg border-2 border-black"
      />
      <p className="relative flex justify-center top-5 text-2xl">
        Loaded image from the remote server
      </p>
    </div>
  );
};

export default page;
