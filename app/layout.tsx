import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientInitializer from "../components/ClientInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cobweb Games | Play Free Online Games Anytime",
  description: "Play exciting free online games at Cobweb Games. Discover action, puzzle, arcade, racing, strategy, and many more games to enjoy anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="icon" href="/assets/images/logo.svg" sizes="32x32" />
        <link rel="stylesheet" href="/assets/css/m-style.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.compat.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body suppressHydrationWarning={true}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="border-body">
              <Header />
              {children}
              <Footer />
            </main>
          </div>
        </div>
        <ClientInitializer />
        <script src="/assets/js/mlib.js" async></script>
        <script src="/assets/js/gsap.min.js" async></script>
        <script src="/assets/js/ScrollTrigger.min.js" async></script>
        <script src="/assets/js/scrollsmoother.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" async></script>
      </body>
    </html>
  );
}
