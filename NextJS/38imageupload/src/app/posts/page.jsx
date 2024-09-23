import Clicker from "./clicker";

const fetchPosts = async () => {
  let postData = await fetch("https://jsonplaceholder.typicode.com/posts");
  postData = await postData.json();
  return postData;
};

const page = async () => {
  let posts = await fetchPosts();
  return (
    <>
      <h1 className="relative flex justify-center text-3xl text-red-600 bg-lime-200 p-2">
        Fetch API in server side
      </h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative flex flex-col w-[400px] text-white bg-green-600 gap-2 border-2 border-red-300 mb-2 p-2"
        >
          <h3>User ID : {post.userId}</h3>
          <p>Title : {post.title}</p>
          <Clicker data={post.id} />
        </div>
      ))}
    </>
  );
};

export default page;
