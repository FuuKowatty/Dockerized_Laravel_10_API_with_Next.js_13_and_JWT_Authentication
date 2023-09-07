"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <h1 className="text-red-500">{error.message || "Something went wrong!"}</h1>

      <div className="mt-4">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => reset()}
        >
          Try again
        </button>
        <Link
          href="/"
          className="text-blue-500 hover:underline"
        >
          Home
        </Link>
      </div>
    </>
  );
}

export default Error;
