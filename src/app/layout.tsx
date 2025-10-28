import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Nav",
  description: "3D Navigation Menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
