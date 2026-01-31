import type { Metadata } from "next";
import ConsultationFAB from "./Components/ConsultationFAB";
import FloatingLayer from "./Components/FloatingLayer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
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
