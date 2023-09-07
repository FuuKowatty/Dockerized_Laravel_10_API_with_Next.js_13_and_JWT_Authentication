"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function UserNavigation() {
  return (
    <ul className="flex space-x-4">
      <li>
        <Link
          href="/dashboard"
          className="text-blue-500 hover:underline"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard/settings"
          className="text-blue-500 hover:underline"
        >
          Settings
        </Link>
      </li>
      <li>
        <button
          type="button"
          onClick={() => signOut()}
          className="font-bold text-white hover:underline"
        >
          Sign out
        </button>
      </li>
    </ul>
  );
}
