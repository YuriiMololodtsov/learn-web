import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--roboto-mono" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
