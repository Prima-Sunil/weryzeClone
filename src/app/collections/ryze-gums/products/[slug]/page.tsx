import { getProductBySlug, products } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductClient from "./product-client";

// Define the params type separately to avoid TypeScript errors with Next.js 15
type Params = {
  slug: string;
};

// Use this type for the generateMetadata and page component
type Props = {
  params: Params;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
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

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
