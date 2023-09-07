import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold">Register</h1>

      <RegisterForm />

      <ul className="mt-4">
        <li>
          <Link
            href="/login"
            className="bg-gray-100 px-4 py-2 text-blue-500 hover:underline"
          >
            Login
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}
