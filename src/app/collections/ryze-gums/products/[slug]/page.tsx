import { getProductBySlug, products } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductClient from "./product-client";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
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

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
