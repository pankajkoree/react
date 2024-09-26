'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return <button onClick={() => signIn()}>Login</button>;
  }

  return (
    <>
      <h1>Hello {session?.user?.name}</h1>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}
