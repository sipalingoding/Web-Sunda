import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Sundas Website",
  description: "Learn about sunda, everything,",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex flex-1 justify-center items-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
