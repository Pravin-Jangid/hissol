import type { Metadata } from "next";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hissol ",
  description:
    "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
