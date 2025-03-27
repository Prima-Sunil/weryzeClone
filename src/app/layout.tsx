import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AnnouncementBar from "@/components/layout/announcement-bar";
import { cn } from "@/lib/utils";
import CookieConsent from "@/components/layout/cookie-consent";
import AgeVerification from "@/components/layout/age-verification";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ryze Gums: Let's ryze to a smarter choice!! – Weryze",
  description: "Get to Know more about Ryze Gums and manage your cravings. Take charge and enjoy being yourself. Click here to view our Exotic flavors. Start Your Journey Now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable)}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <CookieConsent />
            <AgeVerification />
            <AnnouncementBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
