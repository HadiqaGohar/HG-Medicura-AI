// src/middleware.ts
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
    '/',
  ]
}


// // src/middleware.ts
// import { withAuth } from 'next-auth/middleware'

// export default withAuth(
//   {
//     pages: {
//       signIn: '/auth/signin',
//     },
//   }
// )

// export const config = {
//   matcher: [
//     '/services/symptom-analyzer',
//     '/services/drug-interaction',
//     '/services/medical-term',
//     '/services/report-summarize',
//     // '/resume/:path*',
//     // '/upload-resume/:path*',
//     // '/myaccount/:path*',
//     // '/admin/:path*'
//   ]
// }