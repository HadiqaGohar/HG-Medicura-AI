import { withAuth } from 'next-auth/middleware'

export default withAuth(
  {
    pages: {
      signIn: '/auth/signin',
    },
  }
)

export const config = {
  matcher: [
    '/services/:path*',
    '/profile/:path*',
    '/myaccount/:path*',
    '/admin/:path*'
  ]
}
