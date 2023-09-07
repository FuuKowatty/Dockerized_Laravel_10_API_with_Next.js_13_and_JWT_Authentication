import UserNavigation from "@/components/UserNavigation";
import Link from "next/link";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <header className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            Logo
          </Link>

          <UserNavigation />
        </div>
      </header>

      <main className="container mx-auto my-4">{children}</main>
    </div>
  );
}
