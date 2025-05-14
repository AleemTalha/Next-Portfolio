"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-6">
      {session ? (
        <>
          <p className="text-lg mb-4">Welcome, {session.user.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => signIn("google")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sign In with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            Sign In with GitHub
          </button>
        </>
      )}
    </main>
  );
}
