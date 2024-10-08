import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer";
import AuthProvider from "./AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Captain's Logbook",
    template: "%s | Captain's Logbook"
  },

  description: "Captain's Logbook Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <AuthProvider session={undefined}>
            <Navbar />
            {children}
            <ToastContainer />
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
