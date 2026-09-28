import Link from "next/link";

export default function DashboardJobsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Dashboard - Jobs</h1>
      <p className="text-lg text-gray-600">Manage all job postings here</p>

      <div className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-md shadow-md p-6 gap-2">
        <h2 className="text-2xl font-bold">Software Engineer</h2>
        <p className="text-gray-500">Status: Active</p>
        <Link
          href="/jobs/1"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2"
        >
          View Job Details
        </Link>
      </div>

      <div className="flex gap-4 mt-2">
        <Link
          href="/dashboard"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
