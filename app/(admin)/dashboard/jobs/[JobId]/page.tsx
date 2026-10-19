import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ JobId: string }>;
};

export default async function JobDetailPage({ params }: Props) {
  const { JobId } = await params;

  return (
    <div className="space-y-6 max-w-5xl pb-16">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/dashboard/jobs"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-black text-xs border-2 border-black rounded-lg shadow-brutal-sm hover:bg-[#F2F5EE] transition-all"
        >
          ← العودة لكافة الوظائف
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-black bg-black text-[#00F076] px-2.5 py-1 rounded border-2 border-black">
            JOB_ID #{JobId}
          </span>
          <span className="px-2.5 py-1 bg-[#00F076] text-black font-black text-xs rounded border-2 border-black shadow-brutal-sm">
            ● حالة العرض: نشطة
          </span>
        </div>
      </div>

      {/* Hero Overview Card */}
      <div className="bg-white border-2 border-black rounded-xl p-6 sm:p-8 shadow-brutal space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b-2 border-black pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#F2F5EE] border border-black rounded text-xs font-black">
                هندسة البرمجيات
              </span>
              <span className="text-xs font-bold text-neutral-500">تم النشر في 12 أكتوبر 2026</span>
            </div>
            <h1 className="text-3xl font-black text-black">
              Senior Full-Stack Engineer (Next.js & TypeScript)
            </h1>
            <p className="text-sm font-bold text-neutral-600">
              الرياض، المملكة العربية السعودية (خيار العمل عن بُعد متاح)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/dashboard/jobs/new">
              <Button variant="brutal" size="sm">
                تعديل البيانات
              </Button>
            </Link>
            <Button variant="brutalDestructive" size="sm">
              إيقاف الإعلان
            </Button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[#F7F9F5] border-2 border-black p-4 rounded-lg shadow-brutal-sm">
            <span className="text-[11px] font-black uppercase text-neutral-600 block mb-1">
              إجمالي المتقدمين
            </span>
            <div className="text-2xl font-black text-black">42 مرشح</div>
          </div>

          <div className="bg-[#00F076] border-2 border-black p-4 rounded-lg shadow-brutal-sm">
            <span className="text-[11px] font-black uppercase text-black block mb-1">
              في القائمة القصيرة
            </span>
            <div className="text-2xl font-black text-black">8 مرشحين</div>
          </div>

          <div className="bg-[#F7F9F5] border-2 border-black p-4 rounded-lg shadow-brutal-sm">
            <span className="text-[11px] font-black uppercase text-neutral-600 block mb-1">
              المشاهدات
            </span>
            <div className="text-2xl font-black text-black">890 زيارة</div>
          </div>

          <div className="bg-[#F7F9F5] border-2 border-black p-4 rounded-lg shadow-brutal-sm">
            <span className="text-[11px] font-black uppercase text-neutral-600 block mb-1">
              الراتب المعروض
            </span>
            <div className="text-xl font-black text-black font-mono">$4.5k - $6.5k</div>
          </div>
        </div>

        {/* Details & Responsibilities */}
        <div className="space-y-4 pt-2">
          <h2 className="text-xl font-black text-black">متطلبات ومسؤوليات الدور الوظيفي:</h2>
          <div className="space-y-3 text-sm font-bold text-neutral-800 leading-relaxed bg-[#F7F9F5] p-5 border-2 border-black rounded-lg">
            <p>
              • خبرة لا تقل عن 4 سنوات في تطوير تطبيقات الويب الحديثة باستخدام Next.js (App Router) و TypeScript.
            </p>
            <p>
              • إتقان مفاهيم معماريات Next.js المتقدمة مثل Proxy/Middleware، Server Components، و Edge Runtime.
            </p>
            <p>
              • خبرة في بناء واجهات مستخدم مخصصة باستخدام Tailwind CSS والتصميم التفاعلي بأسلوب Neo-Brutalism.
            </p>
            <p>
              • إتقان كتابة الاختبارات الآلية (Unit/Integration Tests) والتعامل مع قواعد البيانات الحديثة.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t-2 border-black flex justify-between items-center">
          <Link href="/dashboard/applications">
            <Button variant="brutalBlack" size="default">
              عرض المتقدمين لهذه الوظيفة (42) →
            </Button>
          </Link>
          <Link href="/dashboard/jobs">
            <Button variant="brutalOutline" size="default">
              عودة للوظائف
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
