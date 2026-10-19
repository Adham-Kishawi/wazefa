import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border-2 border-black p-6 rounded-xl shadow-brutal">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00F076] border-2 border-black rounded-md font-black text-black text-xs uppercase tracking-wider mb-2 shadow-brutal-sm">
            <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
            نظام التوظيف يعمل بكفاءة
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            لوحة تحكم المشرف (Overview)
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-bold mt-1">
            متابعة إحصائيات الوظائف، طلبات المتقدمين، وإدارة النطاقات عبر البروكسي
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/dashboard/jobs/new">
            <Button variant="brutal" size="lg" className="text-sm font-black">
              + إضافة إعلان وظيفة
            </Button>
          </Link>
          <Link href="/dashboard/jobs">
            <Button variant="brutalOutline" size="lg" className="text-sm font-black">
              إدارة الوظائف
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Stat 1 */}
        <div className="bg-white border-2 border-black rounded-xl p-5 shadow-brutal brutal-card-hover relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F076]/20 rounded-bl-full pointer-events-none group-hover:bg-[#00F076]/40 transition-colors"></div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase text-neutral-600 tracking-wider">
              إجمالي الوظائف
            </span>
            <span className="p-1.5 bg-[#00F076] border border-black rounded font-black text-xs">
              JOBS
            </span>
          </div>
          <div className="text-4xl font-black text-black tracking-tight mb-2">142</div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700">
            <span className="text-black bg-[#00F076] px-1.5 py-0.5 rounded border border-black font-black">
              +12%
            </span>
            <span>مقارنة بالأسبوع الماضي</span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-[#00F076] border-2 border-black rounded-xl p-5 shadow-brutal brutal-card-hover relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase text-black tracking-wider">
              طلبات التقديم
            </span>
            <span className="p-1.5 bg-black text-[#00F076] border border-black rounded font-black text-xs">
              APPLICATIONS
            </span>
          </div>
          <div className="text-4xl font-black text-black tracking-tight mb-2">1,280</div>
          <div className="flex items-center gap-1.5 text-xs font-black text-neutral-900">
            <span className="bg-black text-white px-1.5 py-0.5 rounded font-mono">
              +48 اليوم
            </span>
            <span>معدل قبول عالي</span>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-white border-2 border-black rounded-xl p-5 shadow-brutal brutal-card-hover">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase text-neutral-600 tracking-wider">
              الوظائف النشطة
            </span>
            <span className="p-1.5 bg-neutral-100 border border-black rounded font-black text-xs">
              ACTIVE
            </span>
          </div>
          <div className="text-4xl font-black text-black tracking-tight mb-2">98</div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700">
            <span className="text-emerald-700 font-black">● 70%</span>
            <span>من إجمالي المنشور</span>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="bg-white border-2 border-black rounded-xl p-5 shadow-brutal brutal-card-hover">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase text-neutral-600 tracking-wider">
              فحص البروكسي
            </span>
            <span className="p-1.5 bg-[#00F076] border border-black rounded font-black text-xs font-mono">
              TESTED
            </span>
          </div>
          <div className="text-4xl font-black text-black tracking-tight mb-2">7/7</div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700">
            <span className="text-black bg-[#00F076] px-1.5 py-0.5 rounded border border-black font-black">
              100% نجاح
            </span>
            <span>اختبارات التوجيه</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Recent Jobs + Quick Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recent Jobs Table */}
        <div className="lg:col-span-2 bg-white border-2 border-black rounded-xl p-6 shadow-brutal">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-black text-black">أحدث الوظائف المضافة</h2>
              <p className="text-xs text-neutral-600 font-bold">آخر الوظائف التي تم نشرها على النظام</p>
            </div>
            <Link href="/dashboard/jobs">
              <Button variant="brutalOutline" size="xs">
                عرض الكل →
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto border-2 border-black rounded-lg">
            <table className="w-full text-right text-sm">
              <thead className="bg-[#F2F5EE] border-b-2 border-black text-black font-black text-xs uppercase">
                <tr>
                  <th className="p-3">المسمى الوظيفي</th>
                  <th className="p-3">الشركة / القسم</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3">المتقدمين</th>
                  <th className="p-3 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black/10 font-bold">
                <tr className="hover:bg-[#00F076]/10 transition-colors">
                  <td className="p-3 font-black text-black">
                    <Link href="/dashboard/jobs/1" className="hover:underline">
                      Senior Full-Stack Engineer
                    </Link>
                  </td>
                  <td className="p-3 text-neutral-600">هندسة البرمجيات</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 bg-[#00F076] text-black text-xs border border-black rounded font-black">
                      نشطة
                    </span>
                  </td>
                  <td className="p-3 font-mono">42 مرشح</td>
                  <td className="p-3 text-center">
                    <Link href="/dashboard/jobs/1">
                      <Button variant="brutalOutline" size="xs">
                        تفاصيل
                      </Button>
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-[#00F076]/10 transition-colors">
                  <td className="p-3 font-black text-black">
                    <Link href="/dashboard/jobs/2" className="hover:underline">
                      Product Designer (UI/UX)
                    </Link>
                  </td>
                  <td className="p-3 text-neutral-600">فريق التصميم</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 bg-[#00F076] text-black text-xs border border-black rounded font-black">
                      نشطة
                    </span>
                  </td>
                  <td className="p-3 font-mono">29 مرشح</td>
                  <td className="p-3 text-center">
                    <Link href="/dashboard/jobs/2">
                      <Button variant="brutalOutline" size="xs">
                        تفاصيل
                      </Button>
                    </Link>
                  </td>
                </tr>

                <tr className="hover:bg-[#00F076]/10 transition-colors">
                  <td className="p-3 font-black text-black">
                    <Link href="/dashboard/jobs/3" className="hover:underline">
                      DevOps & Cloud Specialist
                    </Link>
                  </td>
                  <td className="p-3 text-neutral-600">البنية التحتية</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 bg-amber-300 text-black text-xs border border-black rounded font-black">
                      قيد المراجعة
                    </span>
                  </td>
                  <td className="p-3 font-mono">14 مرشح</td>
                  <td className="p-3 text-center">
                    <Link href="/dashboard/jobs/3">
                      <Button variant="brutalOutline" size="xs">
                        تفاصيل
                      </Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Col: Quick Proxy & Domain Card */}
        <div className="space-y-5">
          <div className="bg-white border-2 border-black rounded-xl p-5 shadow-brutal space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00F076] border-2 border-black rounded flex items-center justify-center font-black">
                ⚡
              </div>
              <div>
                <h3 className="font-black text-black text-base">إعدادات وتوجيه البروكسي</h3>
                <p className="text-xs text-neutral-600 font-bold">Subdomains & Routing Proxy</p>
              </div>
            </div>

            <div className="space-y-2 text-xs font-bold">
              <div className="p-3 bg-[#F2F5EE] border-2 border-black rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-neutral-600">نطاق الأدمن الإنتاجي:</span>
                  <span className="text-[#009E4D] font-mono font-black">● مفعّل</span>
                </div>
                <code className="bg-white px-2 py-0.5 border border-black rounded block font-mono text-[11px] text-black">
                  admin.wazifa.app → /dashboard
                </code>
              </div>

              <div className="p-3 bg-[#F2F5EE] border-2 border-black rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-neutral-600">التطوير المحلي:</span>
                  <span className="text-[#009E4D] font-mono font-black">● مدعوم</span>
                </div>
                <code className="bg-white px-2 py-0.5 border border-black rounded block font-mono text-[11px] text-black">
                  admin.localhost:3000 → /dashboard
                </code>
              </div>

              <div className="p-3 bg-[#F2F5EE] border-2 border-black rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-neutral-600">حماية النطاق العام:</span>
                  <span className="text-[#009E4D] font-mono font-black">● محمي</span>
                </div>
                <code className="bg-white px-2 py-0.5 border border-black rounded block font-mono text-[11px] text-black">
                  wazifa.app/dashboard → Redirect /
                </code>
              </div>
            </div>

            <Link href="/dashboard/applications" className="block">
              <Button variant="brutalBlack" size="sm" className="w-full">
                عرض كل طلبات المتقدمين (1,280)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
