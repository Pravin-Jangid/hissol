import type { Metadata } from "next";
import ConsultationFAB from "./ConsultationFAB";
import FloatingLayer from "./FloatingLayer";
import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hissol",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        {/* 🔥 GLOBAL FLOATING UI */}
        <FloatingLayer>
          <ConsultationFAB />
        </FloatingLayer>
      </body>
    </html>
  );
}
