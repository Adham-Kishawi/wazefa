import Link from "next/link";



function JobsPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-4xl font-bold">Jobs Page</h1>
            <div className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-md shadow-md p-6 gap-2">
                <h2 className="text-2xl font-bold">Software Engineer</h2>
                <p className="text-lg">Full-time</p>
                <Link href="/jobs/1" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-2">Job Details Page</Link>
            </div>
            <Link href="/" className="text-blue-500 underline hover:text-blue-700">Back to Home</Link>
        </div>
    );
}
export default JobsPage;