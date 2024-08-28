"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthComponent() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        {session ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome, {session.user.name || session.user.email}!
            </h2>
            <p className="mb-6">You are signed in as {session.user.email}.</p>
            <button
              onClick={() => signOut()}
              className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Our Platform</h2>
            <p className="mb-6">Please sign in to continue.</p>
            <button
              onClick={() => signIn()}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
