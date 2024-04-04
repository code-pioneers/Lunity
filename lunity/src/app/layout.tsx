import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@/components/analytics";

const poppins = Poppins({
  weight: ['300', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    default: "Lunity",
    template: "%s | Lunity",
  },
  description: "",
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
      <body className="bg-gradient-to-l from-slate-100 via-slate-100/20 to-slade-100">
        {children}
      </body>
    </html>
  );
}
