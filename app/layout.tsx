import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Givelink products list - Konstantinos Siasios",
  description: "My solution of a provided assignment by Givelink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
