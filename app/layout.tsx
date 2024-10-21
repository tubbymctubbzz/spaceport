/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harvey",
  description: "Modernized portfolio",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/avatar.png" />
      <body
      className="bg-[#030014] overflow-y-scroll overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
