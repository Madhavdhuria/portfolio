import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StrainTransition from "@/components/StrainTransition";

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetbrainsMono",
});

export const metadata = {
  title: "Madhav's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetbrainsMono.variable}>
        <Header />
        <StrainTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
