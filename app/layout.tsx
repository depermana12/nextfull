import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import AuthProvider from "./auth/Provider";

import NavBar from "./NavBar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={lato.variable}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
