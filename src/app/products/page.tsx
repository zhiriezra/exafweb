import Products from "@/pages/products-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://extensionafrica.com/products"),
  title: "Products - Extension Africa",
  description:
    "Extension Africa is a research-based ag-tech platform that provides private extension services to value chain actors. Through our robust network of grassroot extension agents, we are creating enduring economic opportunities for smallholder farmers.",
  keywords: ["Extension", "Africa", "Extension Africa", "farmers", "ag-tech"],
  openGraph: {
    url: "https://extensionafrica.com/products",
    title: "Products - Extension Africa",
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
    title: "Products - Extension Africa",
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

export default function ProductsPage() {
  return <Products />;
}
