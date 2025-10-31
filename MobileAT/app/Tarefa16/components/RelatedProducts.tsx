// src/components/RelatedProducts.tsx
"use client";

import React from "react";
import Image from "next/image";

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <section className="related-products-section">
      <h3>Produtos Relacionados</h3>
      <div className="related-grid">
        {products.map((prod) => (
          <div key={prod.id} className="related-card">
            <div className="related-image-wrapper">
              <Image
                src={prod.image}
                alt={prod.name}
                width={200}
                height={150}
                className="related-image"
              />
            </div>
            <p className="related-name">{prod.name}</p>
            <p className="related-price">R$ {prod.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
