import Link from "next/link";
import getData from "./loadData";

const page = async () => {
  const data = getData();
  const users = await data;
  return (
    <>
      <h1 className="relative flex justify-center text-center bg-black p-2 text-3xl text-white">
        Static Site Generation
      </h1>
      {users.map(
        (
          user: {
            name: string;
            id: number;
          },
          i: any
        ) => (
          <h1 key={i}>
            <Link href={`/ssg/${user.id}`}>
              {" "}
              {user.id} :- Name : {user.name}
            </Link>
          </h1>
        )
      )}
    </>
  );
};

export default page;

