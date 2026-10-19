'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const navItems = [
  {
    name: 'لوحة التحكم (Overview)',
    href: '/dashboard',
    exact: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    name: 'الوظائف (Jobs)',
    href: '/dashboard/jobs',
    exact: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'إضافة وظيفة (Post Job)',
    href: '/dashboard/jobs/new',
    exact: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'طلبات التقديم (Applications)',
    href: '/dashboard/applications',
    exact: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isLinkActive = (itemHref: string, exact: boolean) => {
    if (exact) {
      return pathname === itemHref
    }
    return pathname.startsWith(itemHref)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-3 left-3 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 bg-[#00F076] text-black border-2 border-black rounded-lg shadow-brutal flex items-center justify-center font-bold"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-72 bg-white border-r-[3px] border-black flex flex-col justify-between transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo & Brand Header */}
          <div className="p-5 border-b-[3px] border-black bg-[#F8FAF6]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00F076] border-2 border-black rounded-lg shadow-brutal-sm font-black text-black text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
              Admin Console
            </div>
            <Link href="/dashboard" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-black text-[#00F076] rounded-lg border-2 border-black flex items-center justify-center font-black text-xl shadow-brutal-sm group-hover:rotate-3 transition-transform">
                W
              </div>
              <div>
                <span className="text-xl font-black tracking-tight block text-black">
                  WAZEFA<span className="text-[#00BF5D]">.APP</span>
                </span>
                <span className="text-xs text-neutral-600 font-bold block uppercase tracking-wider">
                  لوحة تحكم المشرف
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const active = isLinkActive(item.href, item.exact)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 font-bold text-sm transition-all ${
                    active
                      ? 'bg-[#00F076] text-black border-black shadow-brutal translate-x-1'
                      : 'bg-white text-neutral-800 border-transparent hover:border-black hover:bg-[#F2F5EE] hover:shadow-brutal-sm'
                  }`}
                >
                  <span className={`${active ? 'text-black' : 'text-neutral-700'}`}>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t-[3px] border-black bg-[#F8FAF6] space-y-3">
          {/* Proxy status indicator */}
          <div className="p-3 bg-white border-2 border-black rounded-lg shadow-brutal-sm">
            <div className="flex items-center justify-between text-xs font-bold text-neutral-700 mb-1">
              <span>حالة البروكسي (Proxy):</span>
              <span className="inline-flex items-center gap-1.5 text-black bg-[#00F076] px-2 py-0.5 rounded border border-black font-black text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 font-mono">admin.wazifa.app & localhost</p>
          </div>

          {/* Back to public board */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-white text-black font-bold text-xs border-2 border-black rounded-lg shadow-brutal-sm hover:bg-[#00F076]/20 transition-all hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>العودة للموقع الرئيسي</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
