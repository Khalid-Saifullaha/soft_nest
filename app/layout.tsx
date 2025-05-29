import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

import Provider from "@/components/HOC/Provider";

const font = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftNest Landing Page",
  description: "SoftNest Landing Page using next.js",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
