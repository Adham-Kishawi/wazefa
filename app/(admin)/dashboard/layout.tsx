import React from 'react'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { AdminHeader } from '@/components/admin/admin-header'

export const metadata = {
  title: 'لوحة التحكم | وظيفة Wazefa Admin',
  description: 'لوحة تحكم منصة وظيفة بستايل بروتاليزم مع الأخضر النيون',
}

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#F7F9F5] text-neutral-900 flex font-sans antialiased selection:bg-[#00F076] selection:text-black">
      {/* Sidebar navigation */}
      <AdminSidebar />

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col lg:pl-72 min-w-0 transition-all">
        <AdminHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
