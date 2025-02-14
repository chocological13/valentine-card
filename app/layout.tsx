import type { Metadata } from "next";
import { Dancing_Script, Indie_Flower } from 'next/font/google';
import "./globals.css";

const dancing = Dancing_Script({
    subsets: ['latin'],
    variable: '--font-dancing-script',
    display: 'swap',
});

const indie = Indie_Flower({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-indie-flower',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "will you be my valentine? 🥺",
    description: "you can try to say no 🤷🏻‍♀️"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancing.variable} ${indie.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
