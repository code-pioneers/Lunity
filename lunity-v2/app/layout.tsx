import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

//styles
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/style.css";

//components
import Header from "@/components/Header";
import ButtonToggle from "@/components/elements/ButtonToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import ActiveContextSectionProvider from "@/context/ActiveContextSection";
import { Toaster } from "react-hot-toast";
import Loading from "./loading";
import { themeDefault } from "@/data/Header";
import { Analytics } from "@/components/elements/Analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Lunity",
  description: "Ontdek de kracht van maatwerk webdesign met Lunity. Wij bieden innovatieve websites, webshops en digitale strategieën die jouw bedrijf naar een hoger niveau tillen. Neem contact op voor een gratis consult!",
  other: {
    title: 'Lunity | Innovatieve Weboplossingen voor Jouw Bedrijf'
  }
};

export default function RootLayout({children,}: { children: React.ReactNode;}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="G-GYZZL6BN3R" />
        <Analytics />
      </head>
      <body className={poppins.className}  >
        <ThemeProvider attribute="class" defaultTheme={themeDefault.mode}>
            <Loading/>
            <ButtonToggle />
            <ActiveContextSectionProvider>
              <Header />
              {children}
              <Toaster position="bottom-center" />
            </ActiveContextSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
