// middleware.js
import { NextResponse } from 'next/server'

// Define paths that should not trigger the maintenance mode (e.g., maintenance page itself, API routes)
const maintenancePaths = ['/maintenance']

export function middleware(req) {
  const url = req.nextUrl.clone()
  const { pathname } = url

  // Bypass middleware for maintenance page and API routes
  if (maintenancePaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Check if maintenance mode is enabled
  const isMaintenance = process.env.MAINTENANCE_MODE === 'true'

  if (isMaintenance) {
    // Redirect to the maintenance page
    url.pathname = '/maintenance'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
