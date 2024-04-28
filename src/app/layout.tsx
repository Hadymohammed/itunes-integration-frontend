import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  localFont  from "next/font/local";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ituens Search",
  description: "Search for your favorite media",
};
const thmanyahFont = localFont({
  src: [
    {
      path: "../assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Thin.otf",
      weight: '100',
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-ExtraLight.otf",
      weight: '200',
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Light.otf",
      weight: '300',
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Regular.otf",
      weight: '400',
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Medium.otf",
      weight: '500',
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-SemiBold.otf",
      weight: '600',
    },
    {
      path: "../assets/fonts/IBM-Plex-Sans-Arabic/IBMPlexSansArabic-Bold.otf",
      weight: '700',},
  ],
  display: "swap",

});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={thmanyahFont.className}>
        {children}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script></body>
    </html>
  );
}
