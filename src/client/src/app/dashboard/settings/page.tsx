import { ChangePasswordForm } from "@/components/ChangePasswordForm";
import UpdateUserForm from "@/components/UpdateUserForm";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <div className="container mx-auto my-4">
      <Link
        href="/dashboard"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Dashboard
      </Link>
      <h1 className="mb-4 text-2xl font-bold">Settings</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Update user</h2>
        <UpdateUserForm user={user} />
      </section>

      <section>
        <h2 className="text-xl font-semibold">Update password</h2>
        <ChangePasswordForm />
      </section>
    </div>
  );
}
