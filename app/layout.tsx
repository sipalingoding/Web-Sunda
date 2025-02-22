"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideNavbar = ["/login", "/register"].includes(pathname);
  return (
    <html lang="en">
      <body className={poppins.className}>
        {!hideNavbar && <Navbar />}

        <main>{children}</main>
      </body>
    </html>
  );
}
