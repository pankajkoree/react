import Link from "next/link";
import home from "../assets/home.png";
import Image from "next/image";

function InitialPage() {
  return (
    <>
      <h1 className="relative flex justify-center text-center p-2 bg-blue-500 text-white text-3xl">
        Basic Routing{" "}
      </h1>
      <div className="relative flex justify-center top-20">
        <Link href={"/home"}>
          <Image src={home} alt="home" width={100} />
        </Link>
      </div>
    </>
  );
}

export default InitialPage;
