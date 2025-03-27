import { getProductBySlug } from "@/lib/data";
import { Metadata } from "next";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} – Weryze`,
    description: product.description,
  };
}