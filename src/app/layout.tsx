// // import type { Metadata } from "next";
// // import "./globals.css";
// // import Header from "./components/Header";
// // import Footer from "./components/Footer";

// // // https://jobcopilot.com/?
// // // https://aihealthassistant.pro/

// // export const metadata: Metadata = {
// //   title: "HG-Medicura-AI",
// //   description: "Hadiqa GOhar's Medicura-AI Project Helps you to Analyze Symptoms, Check Drug Interactions, Understand Medical Terms, and Chat with an AI Assistant for Health-Related Queries.",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body
      
// //       >
// //         <Header />
// //         {children}
// //         <Footer />
// //       </body>
// //     </html>
// //   );
// // }
// import type { Metadata } from "next";
// import "./globals.css";
// import Header from "./components/Header";
// // import Chatbot from "./components/Chatbot";
// import { Toaster } from "react-hot-toast";
// import Footer from "./components/Footer";
// import AuthProvider from "./components/AuthProvider";



// export const metadata: Metadata = {
//   title:
//     "HG Resume Builder - Create Professional Resumes with AI | Free Resume Maker",
//   description:
//     "Build world-class professional resumes with HG Resume Builder. AI-powered resume generator with ATS-friendly templates, real-time preview, and expert tips. Create your perfect CV in minutes - completely free!",
//   keywords: [
//     "resume builder",
//     "CV maker",
//     "professional resume",
//     "AI resume generator",
//     "ATS friendly resume",
//     "free resume builder",
//     "resume templates",
//     "job application",
//     "career builder",
//     "resume creator",
//     "online resume maker",
//     "HG Resume Builder",
//     "resume maker online",
//     "CV builder free",
//     "professional CV templates",
//     "resume design",
//     "job search tools",
//     "career development",
//     "resume optimization",
//     "ATS resume checker",
//     "modern resume templates",
//     "executive resume builder",
//     "student resume maker",
//     "entry level resume",
//     "career change resume",
//   ],
//   authors: [{ name: "Hadiqa Gohar", url: "https://github.com/HadiqaGohar" }],
//   creator: "Hadiqa Gohar",
//   publisher: "HG Resume Builder",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://hg-resume-builder.vercel.app",
//     title: "HG Resume Builder - Create Professional Resumes with AI",
//     description:
//       "Build world-class professional resumes with AI-powered tools. ATS-friendly templates, real-time preview, and expert guidance. Start building your perfect resume today!",
//     siteName: "HG Resume Builder",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "HG Resume Builder - Professional Resume Maker",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "HG Resume Builder - Create Professional Resumes with AI",
//     description:
//       "Build world-class professional resumes with AI-powered tools. ATS-friendly templates and real-time preview.",
//     images: ["/og-image.png"],
//     creator: "@HadiqaGohar",
//   },
//   alternates: {
//     canonical: "https://hg-resume-builder.vercel.app",
//   },
//   category: "productivity",
//   classification: "Resume Builder, Career Tools, Professional Development",
//   referrer: "origin-when-cross-origin",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://hg-resume-builder.vercel.app"),
//   verification: {
//     google: "google-site-verification-code", // Add your actual Google Search Console verification
//     // yandex: "yandex-verification-code",
//     // yahoo: "yahoo-verification-code",
//     // bing: "bing-verification-code",
//   },
//   other: {
//     "google-site-verification": "google-site-verification-code",
//     "msvalidate.01": "bing-verification-code",
//     "yandex-verification": "yandex-verification-code",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     name: "HG Resume Builder",
//     description:
//       "AI-powered professional resume builder with ATS-friendly templates",
//     url: "https://hg-resume-builder.vercel.app",
//     applicationCategory: "BusinessApplication",
//     operatingSystem: "Web Browser",
//     offers: {
//       "@type": "Offer",
//       price: "0",
//       priceCurrency: "USD",
//     },
//     creator: {
//       "@type": "Person",
//       name: "Hadiqa Gohar",
//       url: "https://github.com/HadiqaGohar",
//     },
//     featureList: [
//       "AI-powered resume generation",
//       "ATS-friendly templates",
//       "Real-time preview",
//       "Multiple export formats",
//       "Professional templates",
//       "Skills optimization",
//     ],
//   };

//   return (
//     <html lang="en">
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//         {/* Theme and Mobile App Configuration */}
//         <meta name="theme-color" content="#7c3aed" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//         <meta name="apple-mobile-web-app-title" content="HG Resume Builder" />
//         <meta name="mobile-web-app-capable" content="yes" />
//         <meta name="application-name" content="HG Resume Builder" />

//         {/* Icons and Manifest */}
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/apple-touch-icon.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/favicon-16x16.png"
//         />
//         <link rel="manifest" href="/manifest.json" />
//         <link rel="shortcut icon" href="/favicon.ico" />

//         {/* Additional SEO Meta Tags */}
//         <meta name="language" content="English" />
//         <meta name="revisit-after" content="7 days" />
//         <meta name="distribution" content="global" />
//         <meta name="rating" content="general" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

//         {/* Preconnect to external domains for performance */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//         <link rel="dns-prefetch" href="//fonts.googleapis.com" />
//         <link rel="dns-prefetch" href="//fonts.gstatic.com" />
//       </head>
//       <body
//         // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <AuthProvider>
//           <Header />
//           {children}
//           <Toaster position="top-right" />
//           {/* <Chatbot /> */}
//           <Footer />
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
// import Chatbot from "./components/Chatbot";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import AuthProvider from "./components/AuthProvider";
import Chatbot from "./components/Chatbot";

export const metadata: Metadata = {
  title: "Medicura-AI Health - Your Personal AI Health Assistant",
  description:
    "Meet Medicura-AI Health, your personal AI assistant to help you with health-related questions from the comfort of your home, offering quick, reliable, and personalized support anytime you need it.",
  keywords: [
    "AI health assistant",
    "Medicura-AI",
    "health queries",
    "symptom analysis",
    "drug interactions",
    "medical terms",
    "healthcare AI",
    "personal health assistant",
    "AI medical support",
    "health chatbot",
    "online health assistant",
    "Hadiqa Gohar",
    "healthcare technology",
    "AI symptom checker",
    "medical advice AI",
    "health information",
    "telehealth AI",
    "health consultation",
  ],
  authors: [{ name: "Hadiqa Gohar", url: "https://github.com/HadiqaGohar" }],
  creator: "Hadiqa Gohar",
  publisher: "Medicura-AI Health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aihealthassistant.pro",
    title: "Medicura-AI Health - Your Personal AI Health Assistant",
    description:
      "Your personal AI assistant for health-related questions, offering symptom analysis, drug interaction checks, medical term explanations, and personalized support from the comfort of your home.",
    siteName: "Medicura-AI Health",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medicura-AI Health - Personal Health Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicura-AI Health - Your Personal AI Health Assistant",
    description:
      "Get quick, reliable, and personalized health support with Medicura-AI Health, your AI-powered health assistant.",
    images: ["/og-image.png"],
    creator: "@HadiqaGohar",
  },
  alternates: {
    canonical: "https://aihealthassistant.pro",
  },
  category: "healthcare",
  classification: "Health Assistant, AI Healthcare, Medical Support",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aihealthassistant.pro"),
  verification: {
    google: "google-site-verification-code", // Add your actual Google Search Console verification
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-verification-code",
    // bing: "bing-verification-code",
  },
  other: {
    "google-site-verification": "google-site-verification-code",
    "msvalidate.01": "bing-verification-code",
    "yandex-verification": "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Medicura-AI Health",
    description:
      "Your personal AI assistant for health-related questions, offering symptom analysis, drug interaction checks, and medical term explanations.",
    url: "https://aihealthassistant.pro",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Person",
      name: "Hadiqa Gohar",
      url: "https://github.com/HadiqaGohar",
    },
    featureList: [
      "Symptom analysis",
      "Drug interaction checks",
      "Medical term explanations",
      "AI health chatbot",
      "Personalized health support",
      "24/7 health assistance",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Theme and Mobile App Configuration */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Medicura-AI Health" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Medicura-AI Health" />

        {/* Icons and Manifest */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body>
        <AuthProvider>
          <Header />
          {children}
                    
          <Toaster position="top-right" />
          <Chatbot />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}