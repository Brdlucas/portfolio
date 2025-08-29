import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Spline from "@splinetool/react-spline";
import ThemeSplineClient from "./components/spline/ThemeSplineClient";
import { useTheme } from "next-themes";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Portfolio Lucas Bourdon",
  description: "By Lucas Bourdon",
};


export default function RootLayout(
  {

    children,
  }: Readonly<{
    children: React.ReactNode;

  }>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
        <Providers>
          {/* <ThemeSplineClient /> */}
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
