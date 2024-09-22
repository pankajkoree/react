import getData from "../loadData";

const UserID = async (props: any) => {
  const data = getData();
  const users = await data;
  const userId = props.params.id;
  const userInfo = users[userId - 1];
  return (
    <>
      <div>
        <div className="relative flex justify-center text-center bg-black p-2 text-3xl text-white">
          <h1>Getting Users Data</h1>
        </div>
        <div className="relative flex flex-col left-[35%] text-center bg-blue-700 p-4 text-xl text-white top-8  w-[30%] rounded-lg">
          <h2 className="text-2xl underline">{userInfo.username} </h2>
          <p>Email : {userInfo.email}</p>
          <p>Phone : {userInfo.phone}</p>
          <p>Company : {userInfo.company.name}</p>
        </div>
      </div>
    </>
  );
};

export default UserID;

export const generateStaticParams = async () => {
  const data = getData();
  const users = await data;
  return users.map((user: { id: { toString: () => any } }) => ({
    id: user.id.toString(),
  }));
};
