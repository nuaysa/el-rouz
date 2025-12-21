import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  weight: [ "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-Cinzel",
  display: "swap",
});


export const metadata: Metadata = {
  title: "El-Rouz Catering",
  description: "Cita Rasa Timur Tengah Autentik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
