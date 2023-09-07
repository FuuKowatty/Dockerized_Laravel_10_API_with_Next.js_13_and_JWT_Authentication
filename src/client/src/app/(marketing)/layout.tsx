import Link from "next/link";

interface MarketingLayoutProps {
  children?: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <header className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            Logo
          </Link>

          <ul className="flex space-x-4">
            <li>
              <Link
                href="/login"
                className="text-white hover:underline"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <main className="container mx-auto my-4">{children}</main>
    </>
  );
}
