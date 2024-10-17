// // "use client";
// // import { useRouter } from "next/navigation";
// // import { Button } from "../../components/ui/button";
// // import { useState } from "react";
// // import axios from "axios";
// // import toast from "react-hot-toast";
// // import Link from "next/link";

// // const ProfilePage = () => {
// //   const router = useRouter();
// //   const [data, setData] = useState("nodata");

// //   const logout = async () => {
// //     try {
// //       const res = await axios.get("/api/users/logout");
// //       localStorage.removeItem("user");
// //       toast.success("Logout successfully...");
// //       router.push("/login");
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   const onGetUserData = async () => {
// //     const res = await axios.post("api/users/me");
// //     console.log(res);
// //     setData(res.data.data.username);
// //   };

// //   const gotoCart = () => {
// //     router.push("/carts");
// //   };
// //   return (
// //     <div className="relative flex flex-col items-center mb-8">
// //       <h1>Profile page</h1>
// //       <h2 onLoad={onGetUserData}>
// //         {data === "nodata" ? (
// //           "no data"
// //         ) : (
// //           <Button variant="link">
// //             <Link href={`/profile/${data}`}>{data}</Link>
// //           </Button>
// //         )}
// //       </h2>
// //       <br />
// //       <br />
// //       <Button variant="fetch" onClick={gotoCart}>
// //         Cart
// //       </Button>
// //       <br />
// //       <br />

// //       <Button variant="destructive" onClick={logout}>
// //         Logout
// //       </Button>
// //     </div>
// //   );
// // };

// // export default ProfilePage;

// "use client";
// import { useRouter } from "next/navigation";
// import { Button } from "../../components/ui/button";
// import { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Link from "next/link";

// const ProfilePage = () => {
//   const router = useRouter();
//   const [data, setData] = useState("nodata");

//   const logout = async () => {
//     try {
//       const res = await axios.get("/api/users/logout");
//       localStorage.removeItem("user");
//       toast.success("Logout successfully...");
//       router.push("/login");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const onGetUserData = async () => {
//     const res = await axios.post("/api/users/me");
//     setData(res.data.data.username);
//   };

//   const gotoCart = () => {
//     router.push("/carts");
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="hidden lg:flex flex-col w-1/4 bg-gray-100 dark:bg-gray-900 p-6 space-y-6 shadow-lg">
//         <nav className="space-y-4">
//           <Button
//             variant="link"
//             className="w-full text-left"
//             onClick={gotoCart}
//           >
//             Carts
//           </Button>
//           <Button variant="link" className="w-full text-left">
//             Orders
//           </Button>
//           <Button variant="link" className="w-full text-left">
//             User Details
//           </Button>
//           <Button
//             variant="link"
//             className="w-full text-left"
//             onClick={onGetUserData}
//           >
//             Profile
//           </Button>
//         </nav>
//         <div className="mt-auto">
//           <Button variant="destructive" className="w-full" onClick={logout}>
//             Logout
//           </Button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col items-center justify-center w-full lg:w-3/4 p-6">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
//           Profile Page
//         </h1>
//         <h2 className="text-2xl font-semibold mb-4">
//           {data === "nodata" ? (
//             "No data available"
//           ) : (
//             <Button variant="link">
//               <Link href={`/profile/${data}`}>{data}</Link>
//             </Button>
//           )}
//         </h2>

//         <Button variant="primary" onClick={gotoCart} className="mb-4">
//           Go to Cart
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
