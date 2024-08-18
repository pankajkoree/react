import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/failedCoderrr")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });
  return (
    <div>
      <div className="relative w-[30%] h-[300px] bg-gray-500 m-0 p-0 flex flex-col top-2 left-[35%] justify-center items-center rounded-lg text-white">
        <h1 className="relative text-2xl">{data.name}</h1>
        <img
          src={data.avatar_url}
          alt="avatar"
          className="relative top-4 w-[150px] h-[150px] rounded-full"
        />
        <div className="relative top-6 flex flex-row gap-10">
          <p>Followers : {data.followers}</p>
          <p>Followers : {data.following}</p>
        </div>
      </div>
    </div>
  );
}

export default Github;

// export const gitInfo = async () => {
//   const response = fetch("https://api.github.com/users/failedCoderrr");
//   return response.json();
// };
