import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full"> 
      <h1 className="text-4xl font-bold">Job Board</h1>
      <p className="text-lg">Welcome to Production App!</p>
      <div className="flex gap-4 mt-2">
        <Link href="/jobs" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Jobs Page</Link>
        <Link href="/dashboard" className="bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800">Dashboard</Link>
      </div>
    </div>
  );
}

