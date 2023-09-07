import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">Login</h1>

      <LoginForm />

      <ul className="mt-8">
        <li>
          <Link
            href="/register"
            className="bg-gray-100 px-4 py-2 text-blue-500 hover:underline"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}
