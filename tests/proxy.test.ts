import { proxy } from '../proxy.js'
import { NextRequest } from 'next/server'
import assert from 'node:assert/strict'
import test from 'node:test'

test('Admin domain root `/` rewrites to `/dashboard`', () => {
  const req = new NextRequest('http://admin.wazifa.app/', {
    headers: { host: 'admin.wazifa.app' },
  })
  const res = proxy(req)
  assert.ok(res, 'Response should be defined')
  // For rewrite, Next.js sets x-middleware-rewrite header
  const rewriteUrl = res.headers.get('x-middleware-rewrite')
  assert.ok(
    rewriteUrl?.includes('/dashboard'),
    `Expected rewrite to /dashboard, got: ${rewriteUrl}`
  )
  assert.equal(res.headers.get('x-admin-route'), 'true')
})

test('Admin domain subpath `/jobs` rewrites to `/dashboard/jobs`', () => {
  const req = new NextRequest('http://admin.wazifa.app/jobs', {
    headers: { host: 'admin.wazifa.app' },
  })
  const res = proxy(req)
  assert.ok(res, 'Response should be defined')
  const rewriteUrl = res.headers.get('x-middleware-rewrite')
  assert.ok(
    rewriteUrl?.includes('/dashboard/jobs'),
    `Expected rewrite to /dashboard/jobs, got: ${rewriteUrl}`
  )
  assert.equal(res.headers.get('x-admin-route'), 'true')
})

test('Local development `admin.localhost:3000/applications` rewrites to `/dashboard/applications`', () => {
  const req = new NextRequest('http://admin.localhost:3000/applications', {
    headers: { host: 'admin.localhost:3000' },
  })
  const res = proxy(req)
  assert.ok(res, 'Response should be defined')
  const rewriteUrl = res.headers.get('x-middleware-rewrite')
  assert.ok(
    rewriteUrl?.includes('/dashboard/applications'),
    `Expected rewrite to /dashboard/applications, got: ${rewriteUrl}`
  )
})

test('Admin domain accessing `/dashboard/jobs` directly passes through', () => {
  const req = new NextRequest('http://admin.wazifa.app/dashboard/jobs', {
    headers: { host: 'admin.wazifa.app' },
  })
  const res = proxy(req)
  assert.ok(res, 'Response should be defined')
  assert.equal(res.headers.get('x-admin-route'), 'true')
  assert.equal(res.headers.get('x-middleware-rewrite'), null)
})

test('Main domain `wazifa.app` accessing `/dashboard` redirects to `/`', () => {
  const req = new NextRequest('http://wazifa.app/dashboard', {
    headers: { host: 'wazifa.app' },
  })
  const res = proxy(req)
  assert.ok(res, 'Response should be defined')
  assert.equal(res.status, 307)
  const location = res.headers.get('location')
  assert.equal(location, 'http://wazifa.app/')
})

test('Main domain `localhost:3000` accessing `/dashboard/jobs` redirects to `/`', () => {
  const req = new NextRequest('http://localhost:3000/dashboard/jobs', {
    headers: { host: 'localhost:3000' },
  })
  const res = proxy(req)
  assert.ok(res, 'Response should be defined')
  assert.equal(res.status, 307)
  const location = res.headers.get('location')
  assert.equal(location, 'http://localhost:3000/')
})

test('Main domain regular route `/jobs` passes through without redirection', () => {
  const req = new NextRequest('http://wazifa.app/jobs', {
    headers: { host: 'wazifa.app' },
  })
  const res = proxy(req)
  assert.ok(res, 'Response should be defined')
  assert.equal(res.status, 200)
  assert.equal(res.headers.get('location'), null)
})
