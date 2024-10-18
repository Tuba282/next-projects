import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuba Jan Portfolio",
  description: "Generated by Tuba Jan ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body>
        {children}
      </body>
    </html>
  );
}