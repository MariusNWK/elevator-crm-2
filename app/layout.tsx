import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SnackbarContext from "./SnackbarContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My CRM",
  description: "Elevator CRM",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnackbarContext>
          <div className="flex flex-col h-screen">
            <Header />
            {children}
          </div>
        </SnackbarContext>
      </body>
    </html>
  );
}
