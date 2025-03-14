import ProgressBarProvider from "@/components/ProgressBarProvider";
import { ScrollProvider } from "@/contexts/scroll";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://extensionafrica.com/"),
  title: "Extension Africa",
  description:
    "Extension Africa is a research-based ag-tech platform that provides private extension services to value chain actors. Through our robust network of grassroot extension agents, we are creating enduring economic opportunities for smallholder farmers.",
  keywords: ["Extension", "Africa", "Extension Africa", "farmers", "ag-tech"],
  openGraph: {
    url: "https://extensionafrica.com/",
    title: "Extension Africa",
    description:
      "Extension Africa is a research-based ag-tech platform that provides private extension services to value chain actors. Through our robust network of grassroot extension agents, we are creating enduring economic opportunities for smallholder farmers.",
    images: [
      {
        url: "/images/logo.avif",
        width: 1351,
        height: 768,
        alt: "Extension Africa",
      },
    ],
  },
  twitter: {
    title: "Extension Africa",
    description:
      "Extension Africa is a research-based ag-tech platform that provides private extension services to value chain actors. Through our robust network of grassroot extension agents, we are creating enduring economic opportunities for smallholder farmers.",
    card: "summary_large_image",
    images: {
      url: "/images/logo.avif",
      width: 1351,
      height: 768,
      alt: "Extension Africa",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased overflow-x-hidden`}>
        <ProgressBarProvider>
          <ScrollProvider>{children}</ScrollProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
