"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

// Define the type for the comment
interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

// Function to fetch the comments from API
let fetchComment = async (): Promise<Comment[]> => {
  let fetchData = await fetch("https://jsonplaceholder.typicode.com/comments");

  // TypeScript doesn't know that the response from fetchData.json() is of type Comment[]
  // So we explicitly cast it using 'as' to tell TypeScript what type it should expect
  const data: Comment[] = await fetchData.json();
  return data;
};

const LoadingData = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCommentData = async () => {
      let fetchDataComment = await fetchComment();
      setComments(fetchDataComment);
      setLoading(false);
    };

    fetchCommentData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <>
      <h1 className="relative flex justify-center text-center text-3xl bg-blue-600 text-white p-2">
        Loading data using API and implementing the feature loader
      </h1>
      {loading ? (
        <Loader />
      ) : (
        comments.map((comment) => <h2 key={comment.id}>{comment.name}</h2>)
      )}
    </>
  );
};

export default LoadingData;
