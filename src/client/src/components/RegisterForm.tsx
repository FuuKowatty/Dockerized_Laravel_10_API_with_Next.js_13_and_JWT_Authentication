"use client";

import fetchClient from "@/lib/fetch-client";
import { signIn } from "next-auth/react";
import { Input } from "./ui/Input";

export default function RegisterForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetchClient({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/register",
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw response;
      }

      const credentials = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      signIn("credentials", credentials);
    } catch (error) {
      if (error instanceof Response) {
        const response = await error.json();

        if (!response.errors) {
          throw error;
        }

        return Object.keys(response.errors).map((errorKey) => {
          const input = document.querySelector(`[name="${errorKey}"]`) as HTMLInputElement;
          input.setCustomValidity(response.errors[errorKey]);
          input.reportValidity();
        });
      }

      throw new Error("An error has occurred during registration request");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-100 px-16 py-8"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-gray-600"
        >
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          defaultValue="John Doe"
          className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

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
          defaultValue="john@avocado-media.nl"
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

      <div>
        <label
          htmlFor="password_confirmation"
          className="block text-gray-600"
        >
          Password confirmation
        </label>
        <Input
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          defaultValue="password"
          className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}
