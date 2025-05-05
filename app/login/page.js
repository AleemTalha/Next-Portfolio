"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-gray-700">You are not signed in.</p>
          <button
            onClick={() => signIn("github")}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <p className="text-green-700 font-semibold">Session Data:</p>
        <pre className="bg-gray-600 p-4 rounded text-left">
          {JSON.stringify(session, null, 2)}
        </pre>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

