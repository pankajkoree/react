"use client";

const UserProfile = ({ params }) => {
  let data = params;
  data = Object.values(data);
  return (
    <div>
      <h1>User Profile Page</h1>
      <h2>Hello , {data}</h2>
    </div>
  );
};

export default UserProfile;
