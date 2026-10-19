import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').toLowerCase()
  // Strip port from host (e.g., admin.localhost:3000 -> admin.localhost)
  const hostname = host.split(':')[0]

  const url = request.nextUrl
  const pathname = url.pathname
  const search = url.search

  // Check if current host is the Admin domain or subdomain
  const isAdminHost =
    hostname === 'admin.wazifa.app' ||
    hostname === 'admin.localhost' ||
    hostname.startsWith('admin.')

  // Check if current host is the main public domain
  const isMainHost =
    hostname === 'wazifa.app' ||
    hostname === 'www.wazifa.app' ||
    hostname === 'localhost' ||
    hostname === '127.0.0.1'

  // ==========================================
  // 1. ADMIN DOMAIN ROUTING
  // ==========================================
  if (isAdminHost) {
    // If the admin visits root `/`, rewrite to `/dashboard`
    if (pathname === '/' || pathname === '') {
      const targetUrl = new URL(`/dashboard${search}`, request.url)
      const response = NextResponse.rewrite(targetUrl)
      response.headers.set('x-admin-route', 'true')
      response.headers.set('x-resolved-path', '/dashboard')
      return response
    }

    // If the admin visits paths like `/jobs`, `/applications` without `/dashboard` prefix,
    // rewrite internally to `/dashboard/...` while preserving clean URLs for the admin
    if (!pathname.startsWith('/dashboard')) {
      const targetUrl = new URL(`/dashboard${pathname}${search}`, request.url)
      const response = NextResponse.rewrite(targetUrl)
      response.headers.set('x-admin-route', 'true')
      response.headers.set('x-resolved-path', `/dashboard${pathname}`)
      return response
    }

    // If already accessing `/dashboard/...`, allow through with admin header
    const response = NextResponse.next()
    response.headers.set('x-admin-route', 'true')
    return response
  }

  // ==========================================
  // 2. MAIN DOMAIN PROTECTION
  // ==========================================
  // If a user on the main domain tries to access `/dashboard` directly,
  // redirect them to the home page or login
  if (isMainHost && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL(`/${search}`, request.url))
  }

  // Default passthrough for all other requests
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes (/api/...)
     * - _next/static (static build files)
     * - _next/image (image optimization files)
     * - favicon.ico
     * - static files with common image / font / media extensions
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf)$).*)',
  ],
}