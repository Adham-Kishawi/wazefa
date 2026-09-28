import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-lg text-gray-600">Welcome to your dashboard</p>

      <div className="flex gap-4 mt-2">
        <Link
          href="/dashboard/jobs"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Dashboard Jobs
        </Link>
        <Link
          href="/"
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
