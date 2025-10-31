// src/components/ProductDetails.tsx
"use client";

import React from "react";
import Image from "next/image";
import RatingStars from "./RatingStars";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section className="product-details">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="product-image"
        priority
      />

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <RatingStars rating={product.rating} />
      </div>
    </section>
  );
};

export default ProductDetails;
