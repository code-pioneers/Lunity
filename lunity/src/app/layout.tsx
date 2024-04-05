import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@/components/analytics";

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '700'],
});

export const metadata: Metadata = {
  title: {
    default: "Lunity",
    template: "%s | Lunity",
  },
  description: "Lunity, your webpartner for a bright future",
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
  icons: {
    // shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={poppins.className}>
      <head>
        <Analytics />
      </head>
      <body className="bg-slate-200">
        {children}
      </body>
    </html>
  );
}
