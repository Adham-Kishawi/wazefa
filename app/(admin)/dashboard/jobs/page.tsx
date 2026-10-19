import Link from "next/link";
import { Button } from "@/components/ui/button";

const mockJobs = [
  {
    id: "1",
    title: "Senior Full-Stack Engineer (Next.js & TypeScript)",
    department: "Engineering",
    location: "عن بُعد (Remote)",
    type: "دوام كامل (Full-Time)",
    salary: "$4,500 - $6,500",
    status: "Active",
    applicantsCount: 42,
    postedAt: "منذ يومين",
  },
  {
    id: "2",
    title: "Product Designer & UI/UX Specialist",
    department: "Design",
    location: "الرياض / هجين (Hybrid)",
    type: "دوام كامل (Full-Time)",
    salary: "$3,800 - $5,200",
    status: "Active",
    applicantsCount: 29,
    postedAt: "منذ 4 أيام",
  },
  {
    id: "3",
    title: "DevOps & Cloud Infrastructure Engineer",
    department: "Infrastructure",
    location: "عن بُعد (Remote)",
    type: "عقد سنوي (Contract)",
    salary: "$5,000 - $7,000",
    status: "Draft",
    applicantsCount: 14,
    postedAt: "منذ أسبوع",
  },
  {
    id: "4",
    title: "Growth Marketing & SEO Specialist",
    department: "Marketing",
    location: "القاهرة (On-site)",
    type: "دوام كامل (Full-Time)",
    salary: "$2,500 - $3,500",
    status: "Closed",
    applicantsCount: 88,
    postedAt: "منذ أسبوعين",
  },
];

export default function DashboardJobsPage() {
  return (
    <div className="space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border-2 border-black p-6 rounded-xl shadow-brutal">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#00F076] text-black border border-black rounded text-xs font-black uppercase mb-1 shadow-brutal-sm">
            إدارة الشواغر
          </div>
          <h1 className="text-3xl font-black text-black">إدارة الوظائف (Jobs Management)</h1>
          <p className="text-sm text-neutral-600 font-bold">
            عرض وتعديل والتحكم في كافة الوظائف المنشورة على المنصة
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard/jobs/new">
            <Button variant="brutal" size="lg">
              + إضافة وظيفة جديدة
            </Button>
          </Link>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white border-2 border-black p-4 rounded-xl shadow-brutal flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="ابحث عن وظيفة، قسم، أو مهارة..."
            className="w-full bg-[#F7F9F5] border-2 border-black rounded-lg px-4 py-2.5 text-sm font-bold placeholder:text-neutral-500 focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <button className="px-3 py-1.5 bg-[#00F076] text-black border-2 border-black rounded-lg font-black text-xs shadow-brutal-sm cursor-pointer">
            الكل (4)
          </button>
          <button className="px-3 py-1.5 bg-white text-black border-2 border-black rounded-lg font-bold text-xs hover:bg-[#F2F5EE] cursor-pointer">
            نشطة (2)
          </button>
          <button className="px-3 py-1.5 bg-white text-black border-2 border-black rounded-lg font-bold text-xs hover:bg-[#F2F5EE] cursor-pointer">
            مسودة (1)
          </button>
          <button className="px-3 py-1.5 bg-white text-black border-2 border-black rounded-lg font-bold text-xs hover:bg-[#F2F5EE] cursor-pointer">
            مغلقة (1)
          </button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {mockJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border-2 border-black rounded-xl p-5 shadow-brutal brutal-card-hover flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`px-2.5 py-0.5 rounded border border-black font-black text-xs ${
                    job.status === "Active"
                      ? "bg-[#00F076] text-black"
                      : job.status === "Draft"
                      ? "bg-amber-300 text-black"
                      : "bg-neutral-200 text-neutral-700"
                  }`}
                >
                  {job.status === "Active" ? "● نشطة" : job.status === "Draft" ? "مسودة" : "مغلقة"}
                </span>
                <span className="text-xs font-bold bg-[#F2F5EE] border border-black px-2 py-0.5 rounded text-neutral-800">
                  {job.department}
                </span>
                <span className="text-xs font-bold text-neutral-500">
                  {job.postedAt}
                </span>
              </div>

              <h2 className="text-xl font-black text-black hover:text-[#00BF5D] transition-colors">
                <Link href={`/dashboard/jobs/${job.id}`}>
                  {job.title}
                </Link>
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-neutral-600">
                <span className="flex items-center gap-1">
                  📍 {job.location}
                </span>
                <span className="flex items-center gap-1">
                  ⏰ {job.type}
                </span>
                <span className="flex items-center gap-1 font-mono text-black font-black bg-[#00F076]/20 px-1.5 py-0.5 rounded border border-black">
                  💰 {job.salary}
                </span>
              </div>
            </div>

            {/* Actions & Stats */}
            <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-200">
              <div className="text-right md:text-left pl-2">
                <div className="text-lg font-black text-black">{job.applicantsCount}</div>
                <div className="text-[11px] font-bold text-neutral-500">متقدم للوظيفة</div>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`/dashboard/jobs/${job.id}`}>
                  <Button variant="brutal" size="sm">
                    عرض التفاصيل
                  </Button>
                </Link>
                <Link href={`/dashboard/jobs/new`}>
                  <Button variant="brutalOutline" size="sm">
                    تعديل
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
