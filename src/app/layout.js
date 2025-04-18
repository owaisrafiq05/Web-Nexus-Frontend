import "./globals.css";
import Navbar from "../components/GlobalComponents/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/GlobalComponents/Footer";
import StickyIcon from "@/components/GlobalComponents/StickyIcon";
import { analytics } from "@/utils/firebase";
import Script from 'next/script';
// Import the complete Gilroy font family
// const gilroy = localFont({
//   src: [
//     {
//       path: "/fonts/Gilroy-Light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "/fonts/Gilroy-LightItalic.ttf",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "/fonts/Gilroy-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "/fonts/Gilroy-RegularItalic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "/fonts/Gilroy-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "/fonts/Gilroy-MediumItalic.ttf",
//       weight: "500",
//       style: "italic",
//     },
//     {
//       path: "/fonts/Gilroy-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "/fonts/Gilroy-SemiBoldItalic.ttf",
//       weight: "600",
//       style: "italic",
//     },
//     {
//       path: "/fonts/Gilroy-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "/fonts/Gilroy-BoldItalic.ttf",
//       weight: "700",
//       style: "italic",
//     },
//     {
//       path: "/fonts/Gilroy-ExtraBold.ttf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "/fonts/Gilroy-ExtraBoldItalic.ttf",
//       weight: "800",
//       style: "italic",
//     },
//     {
//       path: "/fonts/Gilroy-Heavy.ttf",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "/fonts/Gilroy-HeavyItalic.ttf",
//       weight: "900",
//       style: "italic",
//     },
//     {
//       path: "/fonts/Gilroy-Black.ttf",
//       weight: "950",
//       style: "normal",
//     },
//     {
//       path: "/fonts/Gilroy-BlackItalic.ttf",
//       weight: "950",
//       style: "italic",
//     },
//   ],
//   variable: "--font-gilroy",
//   display: "swap",
// });

export const metadata = {
  title: "Web Nexus",
  description: "A Challenge for the Web Nexus Competitions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-SNYCKHF2SX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SNYCKHF2SX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`font-gilroy antialiased`}>
        <Navbar />
        {children}
        <StickyIcon/>
        <Footer/>
      </body>
    </html>
  );
}