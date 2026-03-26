"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import { Provider } from "react-redux";
import store from "../redux/store/configurStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/586b261bcd.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>

      <body className={`${inter.className} bg-[#121212]`}>
        <div className="flex min-h-screen flex-col ">
          <Provider store={store}>
            <Navbar />
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
}
