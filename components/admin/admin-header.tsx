'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function AdminHeader() {
  return (
    <header className="h-18 bg-white border-b-[3px] border-black px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      {/* Left section: status badge & title */}
      <div className="flex items-center gap-3 pl-12 lg:pl-0">
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block px-2.5 py-1 bg-black text-[#00F076] font-mono text-xs font-black rounded border-2 border-black">
            ENV: PROD
          </span>
          <span className="text-sm font-black text-neutral-800 tracking-tight">
            نظام إدارة منصة وظيفة
          </span>
        </div>
      </div>

      {/* Right section: Quick action & profile */}
      <div className="flex items-center gap-3">
        <Link href="/dashboard/jobs/new">
          <Button variant="brutal" size="sm" className="hidden sm:inline-flex gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>وظيفة جديدة</span>
          </Button>
        </Link>

        {/* Admin profile chip */}
        <div className="flex items-center gap-2.5 p-1.5 bg-[#F8FAF6] border-2 border-black rounded-lg shadow-brutal-sm">
          <div className="w-7 h-7 bg-[#00F076] text-black font-black text-xs rounded border border-black flex items-center justify-center">
            AD
          </div>
          <span className="text-xs font-black text-neutral-900 hidden md:inline">Admin User</span>
        </div>
      </div>
    </header>
  )
}
