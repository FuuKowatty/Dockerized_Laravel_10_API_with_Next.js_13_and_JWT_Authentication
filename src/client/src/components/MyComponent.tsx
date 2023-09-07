"use client";

export function MyComponent({ user }: { user: any }) {
  return <h1 className="mb-4 text-2xl font-bold">Hello {user.name}</h1>;
}
