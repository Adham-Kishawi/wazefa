'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function NewJobPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-6 max-w-4xl pb-16">
      {/* Top Breadcrumb & Action */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard/jobs"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-black text-xs border-2 border-black rounded-lg shadow-brutal-sm hover:bg-[#F2F5EE] transition-all"
        >
          ← العودة لقائمة الوظائف
        </Link>
        <span className="text-xs font-mono font-black bg-black text-[#00F076] px-2.5 py-1 rounded border-2 border-black">
          JOB_CREATOR_V1
        </span>
      </div>

      {/* Main Form Card */}
      <div className="bg-white border-2 border-black rounded-xl p-6 sm:p-8 shadow-brutal space-y-6">
        <div className="border-b-2 border-black pb-4">
          <div className="inline-block px-2.5 py-0.5 bg-[#00F076] text-black border border-black rounded text-xs font-black uppercase mb-1 shadow-brutal-sm">
            إعلان جديد
          </div>
          <h1 className="text-3xl font-black text-black">إنشاء وظيفة جديدة (Post a New Job)</h1>
          <p className="text-sm text-neutral-600 font-bold">
            قم بتعبئة تفاصيل الوظيفة لنشرها فوراً على منصة وظيفة للمتقدمين
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-[#00F076]/20 border-2 border-black rounded-xl shadow-brutal text-center space-y-4">
            <div className="w-14 h-14 bg-[#00F076] text-black border-2 border-black rounded-full flex items-center justify-center font-black text-2xl mx-auto shadow-brutal-sm">
              ✓
            </div>
            <h2 className="text-2xl font-black text-black">تم نشر إعلان الوظيفة بنجاح!</h2>
            <p className="text-sm font-bold text-neutral-700">
              الوظيفة أصبحت نشطة الآن وتظهر في قائمة الوظائف
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <Link href="/dashboard/jobs">
                <Button variant="brutal" size="default">
                  عرض كل الوظائف
                </Button>
              </Link>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-white text-black font-bold text-sm border-2 border-black rounded-lg shadow-brutal-sm hover:bg-[#F2F5EE]"
              >
                إضافة وظيفة أخرى
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Job Title */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="block text-sm font-black text-black">
                  المسمى الوظيفي (Job Title) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: Senior React / Next.js Developer"
                  className="w-full bg-[#F7F9F5] border-2 border-black rounded-lg px-4 py-2.5 text-sm font-bold placeholder:text-neutral-500 focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                />
              </div>

              {/* Department */}
              <div className="space-y-1.5">
                <label className="block text-sm font-black text-black">
                  القسم / الفريق (Department) <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full bg-[#F7F9F5] border-2 border-black rounded-lg px-4 py-2.5 text-sm font-bold focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                >
                  <option value="engineering">هندسة البرمجيات (Engineering)</option>
                  <option value="design">التصميم والـ UI/UX (Design)</option>
                  <option value="marketing">التسويق الرقمي (Marketing)</option>
                  <option value="sales">المبيعات وتطوير الأعمال (Sales)</option>
                  <option value="hr">الموارد البشرية (HR)</option>
                </select>
              </div>

              {/* Employment Type */}
              <div className="space-y-1.5">
                <label className="block text-sm font-black text-black">
                  نوع العمل (Employment Type) <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full bg-[#F7F9F5] border-2 border-black rounded-lg px-4 py-2.5 text-sm font-bold focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                >
                  <option value="full-time">دوام كامل (Full-Time)</option>
                  <option value="part-time">دوام جزئي (Part-Time)</option>
                  <option value="contract">عقد محدد المدة (Contract)</option>
                  <option value="freelance">عمل حر (Freelance)</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label className="block text-sm font-black text-black">
                  موقع العمل (Workplace) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: عن بُعد (Remote) أو الرياض، السعودية"
                  className="w-full bg-[#F7F9F5] border-2 border-black rounded-lg px-4 py-2.5 text-sm font-bold placeholder:text-neutral-500 focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                />
              </div>

              {/* Salary Range */}
              <div className="space-y-1.5">
                <label className="block text-sm font-black text-black">
                  النطاق المالي الراتب المتوقع (Salary Range)
                </label>
                <input
                  type="text"
                  placeholder="مثال: $4,000 - $6,000 شهرياً"
                  className="w-full bg-[#F7F9F5] border-2 border-black rounded-lg px-4 py-2.5 text-sm font-bold placeholder:text-neutral-500 focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                />
              </div>

              {/* Job Description */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="block text-sm font-black text-black">
                  الوصف الوظيفي والمسؤوليات (Job Description) <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="اكتب هنا المتطلبات، المهارات والمسؤوليات المطلوبة بالتفصيل..."
                  className="w-full bg-[#F7F9F5] border-2 border-black rounded-lg p-4 text-sm font-bold placeholder:text-neutral-500 focus:outline-none focus:bg-white focus:shadow-brutal-sm transition-all"
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-4 border-t-2 border-black">
              <Button type="submit" variant="brutal" size="lg" className="text-sm font-black">
                نشر الوظيفة الآن 🚀
              </Button>
              <Link href="/dashboard/jobs">
                <Button type="button" variant="brutalOutline" size="lg">
                  إلغاء
                </Button>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}