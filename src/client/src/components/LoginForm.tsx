"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Input } from "./ui/Input";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const credentials = Object.fromEntries(formData);
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    signIn("credentials", { ...credentials, callbackUrl });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-100 px-16 py-8"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-gray-600"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue="test@test.com"
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-gray-600"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            defaultValue="password"
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      <FormError error={error} />
    </>
  );
}

function FormError({ error }: { error: string | null }) {
  if (!error) return null;

  const errorMessages: { [key: string]: string } = {
    CredentialsSignin: "Invalid credentials",
    Default: "Default Error Message",
  };

  return <p className="text-red-500">{errorMessages[error]}</p>;
}
