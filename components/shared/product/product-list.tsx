import React from "react";

import ProductCard from "./product-card";

interface Product {
  name: string;
  slug: string;
  images: string[];
  price: string;
  brand: string;
  rating: string;
  numReviews: number;
  stock: number;
  description: string;
  isFeatured?: boolean;
  banner?: string;
  category: string;
}

interface ProductListProps {
  data: Product[];
}

const ProductList = ({ data }: ProductListProps) => {
  // any를 ProductListProps로 변경
  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map(
              (
                product: Product // any를 Product로 변경
              ) => (
                <ProductCard key={product.slug} product={product} />
              )
            )}
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  );
};

export default ProductList;
