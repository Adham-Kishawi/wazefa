type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return [{ id: "1" }];
}

async function JobDetailsPage({ params }: Props) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Job Details Page</h1>

      <div className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-md shadow-md p-6">
        <h1 className="text-3xl font-bold">Software Engineer</h1>
        <p className="text-lg">Full-time</p>
        <p className="text-gray-500">Remote</p>
        <p className="text-gray-500">2+ Years Experience</p>

        <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mt-4">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobDetailsPage;