import React from "react";
import Link from "next/link";
import Image from "next/image";

const CollectionsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Catalog</h1>
      <div className="flex justify-center">
        <Link href="/collections/ryze-gums">
          <div>
            <Image
              src="https://weryze.com/cdn/shop/files/mint_5309c641-dee5-40a3-840f-ee03deda905f.jpg?v=1704952221&width=1920"
              alt="Ryze Gums"
              width={384}
              height={384}
              className="object-cover"
            />
            <div className="p-4 bg-black bg-opacity-50 text-white text-center">
              <h2 className="text-lg font-semibold">Shop Ryze Gums</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CollectionsPage;
