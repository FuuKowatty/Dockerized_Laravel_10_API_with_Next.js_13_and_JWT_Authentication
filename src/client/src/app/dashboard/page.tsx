import { MyComponent } from "@/components/MyComponent";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";

export default async function Page() {
  const json = await getCurrentUser();
  return (
    <>
      <Link
        href="/dashboard/settings"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Settings
      </Link>
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>

      <MyComponent user={json} />
    </>
  );
}
