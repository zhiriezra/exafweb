import Gallery from "@/pages/gallerys";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://extensionafrica.com/gallery"),
  title: "Our Gallery - Extension Africa",
  description:
    "Extension Africa is a research-based ag-tech platform that provides private extension services to value chain actors. Through our robust network of grassroot extension agents, we are creating enduring economic opportunities for smallholder farmers.",
  keywords: ["Extension", "Africa", "Extension Africa", "farmers", "ag-tech"],
  openGraph: {
    url: "https://extensionafrica.com/gallery",
    title: "Our Gallery - Extension Africa",
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
    title: "Our Gallery - Extension Africa",
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

export default function GalleryPage() {
  return <Gallery />;
}
