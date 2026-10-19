import Link from "next/link";
import { Button } from "@/components/ui/button";

const mockApplications = [
  {
    id: "app-101",
    candidateName: "أحمد عبد الله",
    candidateEmail: "ahmed.abdullah@example.com",
    jobTitle: "Senior Full-Stack Engineer",
    appliedDate: "اليوم، 10:30 ص",
    matchScore: 94,
    status: "Shortlisted",
    experience: "5 سنوات خبرة",
  },
  {
    id: "app-102",
    candidateName: "سارة المنصوري",
    candidateEmail: "sara.almansoori@example.com",
    jobTitle: "Product Designer & UI/UX",
    appliedDate: "أمس، 04:15 م",
    matchScore: 89,
    status: "Under Review",
    experience: "4 سنوات خبرة",
  },
  {
    id: "app-103",
    candidateName: "محمود حسن",
    candidateEmail: "m.hassan@example.com",
    jobTitle: "DevOps & Cloud Specialist",
    appliedDate: "منذ يومين",
    matchScore: 78,
    status: "Under Review",
    experience: "3 سنوات خبرة",
  },
  {
    id: "app-104",
    candidateName: "عمر خالد",
    candidateEmail: "omar.kh@example.com",
    jobTitle: "Senior Full-Stack Engineer",
    appliedDate: "منذ 3 أيام",
    matchScore: 62,
    status: "Rejected",
    experience: "سنتان خبرة",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="space-y-6 pb-12">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border-2 border-black p-6 rounded-xl shadow-brutal">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#00F076] text-black border border-black rounded text-xs font-black uppercase mb-1 shadow-brutal-sm">
            إدارة المتقدمين
          </div>
          <h1 className="text-3xl font-black text-black">طلبات التقديم (Job Applications)</h1>
          <p className="text-sm text-neutral-600 font-bold">
            مراجعة وتقييم طلبات التوظيف ومتابعة مراحل المقابلات
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-2 bg-black text-[#00F076] font-mono font-black text-xs rounded-lg border-2 border-black shadow-brutal-sm">
            TOTAL: 1,280 CANDIDATES
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-[#00F076] text-black border-2 border-black rounded-lg font-black text-xs shadow-brutal-sm cursor-pointer">
          جميع الطلبات (4)
        </button>
        <button className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg font-bold text-xs hover:bg-[#F2F5EE] shadow-brutal-sm cursor-pointer">
          القائمة القصيرة (1)
        </button>
        <button className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg font-bold text-xs hover:bg-[#F2F5EE] shadow-brutal-sm cursor-pointer">
          قيد المراجعة (2)
        </button>
        <button className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg font-bold text-xs hover:bg-[#F2F5EE] shadow-brutal-sm cursor-pointer">
          مستبعد (1)
        </button>
      </div>

      {/* Applications Cards List */}
      <div className="space-y-4">
        {mockApplications.map((app) => (
          <div
            key={app.id}
            className="bg-white border-2 border-black rounded-xl p-5 shadow-brutal brutal-card-hover flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5 rounded border border-black">
                  {app.id}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded border border-black font-black text-xs ${
                    app.status === "Shortlisted"
                      ? "bg-[#00F076] text-black"
                      : app.status === "Under Review"
                      ? "bg-amber-300 text-black"
                      : "bg-[#FF5A5F]/20 text-[#FF5A5F]"
                  }`}
                >
                  {app.status === "Shortlisted"
                    ? "✓ في القائمة القصيرة"
                    : app.status === "Under Review"
                    ? "قيد المراجعة"
                    : "مستبعد"}
                </span>
                <span className="text-xs font-bold text-neutral-500">{app.appliedDate}</span>
              </div>

              <div>
                <h2 className="text-xl font-black text-black">
                  <Link href={`/dashboard/applications/${app.id}`} className="hover:underline">
                    {app.candidateName}
                  </Link>
                </h2>
                <div className="text-xs font-bold text-neutral-600 mt-0.5">
                  متقدم لوظيفة: <span className="text-black font-black">{app.jobTitle}</span> ({app.experience})
                </div>
              </div>
            </div>

            {/* Score & Action */}
            <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-200">
              <div className="text-right md:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#00F076]/30 border-2 border-black rounded font-mono font-black text-xs text-black">
                  <span>توافق:</span>
                  <span className="text-sm font-black text-black">{app.matchScore}%</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link href={`/dashboard/applications/${app.id}`}>
                  <Button variant="brutal" size="sm">
                    عرض الملف الكامل
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