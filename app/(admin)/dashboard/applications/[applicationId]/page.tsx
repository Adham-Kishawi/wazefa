import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ applicationId: string }>;
};

export default async function ApplicationDetailPage({ params }: Props) {
  const { applicationId } = await params;

  return (
    <div className="space-y-6 max-w-4xl pb-16">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/dashboard/applications"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-black text-xs border-2 border-black rounded-lg shadow-brutal-sm hover:bg-[#F2F5EE] transition-all"
        >
          ← العودة لكل الطلبات
        </Link>
        <span className="font-mono text-xs font-black bg-black text-[#00F076] px-2.5 py-1 rounded border-2 border-black">
          CANDIDATE_FILE #{applicationId}
        </span>
      </div>

      {/* Main Candidate Card */}
      <div className="bg-white border-2 border-black rounded-xl p-6 sm:p-8 shadow-brutal space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b-2 border-black pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#00F076] text-black border border-black rounded text-xs font-black">
                ✓ مؤهل للمقابلة التقنية
              </span>
              <span className="text-xs font-bold text-neutral-500">تم التقديم في 14 أكتوبر 2026</span>
            </div>
            <h1 className="text-3xl font-black text-black">أحمد عبد الله</h1>
            <p className="text-sm font-bold text-neutral-600">
              متقدم لدور: <span className="text-black font-black">Senior Full-Stack Engineer</span>
            </p>
          </div>

          <div className="text-center sm:text-left p-3 bg-[#00F076]/30 border-2 border-black rounded-lg shadow-brutal-sm">
            <div className="text-xs font-black text-neutral-800">نسبة تطابق المهارات</div>
            <div className="text-3xl font-black text-black font-mono">94%</div>
          </div>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3 bg-[#F7F9F5] border-2 border-black rounded-lg">
            <span className="text-[11px] font-black text-neutral-500 uppercase block mb-0.5">
              البريد الإلكتروني
            </span>
            <span className="text-xs font-bold text-black font-mono block truncate">
              ahmed.abdullah@example.com
            </span>
          </div>

          <div className="p-3 bg-[#F7F9F5] border-2 border-black rounded-lg">
            <span className="text-[11px] font-black text-neutral-500 uppercase block mb-0.5">
              سنوات الخبرة
            </span>
            <span className="text-xs font-bold text-black block">5 سنوات في Next.js & React</span>
          </div>

          <div className="p-3 bg-[#F7F9F5] border-2 border-black rounded-lg">
            <span className="text-[11px] font-black text-neutral-500 uppercase block mb-0.5">
              المدينة / الدولة
            </span>
            <span className="text-xs font-bold text-black block">الرياض، المملكة العربية السعودية</span>
          </div>
        </div>

        {/* Skills & Highlights */}
        <div className="space-y-3">
          <h2 className="text-base font-black text-black">المهارات والتقنيات الأساسية:</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 15/16 App Router",
              "TypeScript",
              "Tailwind CSS",
              "Proxy / Middleware Architecture",
              "Node.js & Edge Functions",
              "PostgreSQL & Prisma",
              "Docker & CI/CD",
            ].map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 bg-white text-black font-bold text-xs border-2 border-black rounded shadow-brutal-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2 bg-[#F7F9F5] border-2 border-black rounded-lg p-4">
          <h3 className="text-sm font-black text-black">نبذة المرشح (Candidate Bio):</h3>
          <p className="text-xs font-bold text-neutral-700 leading-relaxed">
            مطور واجهات وخلفيات أول يمتلك خبرة تتجاوز 5 سنوات في بناء تطبيقات الويب عالية الأداء، متخصص في بيئة عمل Next.js وتصميم واجهات مبتكرة بأسلوب Neo-Brutalism مع خبرة متقدمة في معمارية النطاقات المتعددة والـ Proxy.
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-black">
          <div className="flex items-center gap-2">
            <Button variant="brutal" size="default">
              تحديد موعد مقابلة 📅
            </Button>
            <Button variant="brutalOutline" size="default">
              تحميل السيرة الذاتية (PDF)
            </Button>
          </div>

          <Button variant="brutalDestructive" size="sm">
            استبعاد الطلب
          </Button>
        </div>
      </div>
    </div>
  );
}
