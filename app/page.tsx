import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F9F5] flex flex-col items-center justify-center p-6 text-center antialiased">
      <div className="max-w-2xl bg-white border-[3px] border-black p-8 sm:p-12 rounded-2xl shadow-brutal space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00F076] border-2 border-black rounded-lg font-black text-black text-xs uppercase tracking-wider shadow-brutal-sm">
          <span className="w-2 h-2 rounded-full bg-black"></span>
          منصة وظيفة | WAZEFA.APP
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
          منصة التوظيف الذكية للشركات والمحترفين
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 font-bold max-w-lg mx-auto">
          تصفح أحدث الوظائف أو ادخل إلى لوحة تحكم الإدارة لمتابعة الشواغر والمتقدمين وإعدادات النطاقات.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/jobs">
            <Button variant="brutal" size="lg" className="text-sm font-black">
              تصفح الوظائف العامة (Jobs)
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button variant="brutalBlack" size="lg" className="text-sm font-black">
              لوحة تحكم المشرف (Admin Dashboard)
            </Button>
          </Link>
        </div>

        <div className="pt-6 border-t-2 border-black/10 flex flex-wrap justify-center items-center gap-6 text-xs font-bold text-neutral-500">
          <span>● بروكسي متعدد النطاقات مفحوص 100%</span>
          <span>● تصميم Neo-Brutalist عالي التباين</span>
        </div>
      </div>
    </main>
  );
}
