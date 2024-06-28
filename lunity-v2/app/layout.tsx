import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

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
  description: "Bij Lunity bieden we professionele webontwikkeling en responsive webdesign. Wij creëren op maat gemaakte websites die visueel aantrekkelijk, functioneel en gebruiksvriendelijk zijn op alle apparaten. Kies voor ons voor uw digitale succes!",
  other: {
    title: 'Lunity | Professionele Website Ontwikkeling & Responsive Webdesign'
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
