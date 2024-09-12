"use client";
import { list } from "postcss";
import { useEffect, useState } from "react";

const page = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(await usersData.json());
    };
    getUsers();
  }, []);
  console.log(users);
  return (
    <>
      <h1>Fetch API Clientside</h1>

      {users.map((user) => (
        <div key={user.id} className="relative bg-blue-700 text-white w-[400px] p-2 border">
          <h2>Name : {user.name}</h2>
          <h3>Username : {user.username}</h3>
          <p>Email : {user.email}</p>
          <p>Contact no : {user.phone}</p>
        </div>
      ))}
    </>
  );
};

export default page;
