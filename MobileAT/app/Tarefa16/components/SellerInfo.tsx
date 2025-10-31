// src/components/SellerInfo.tsx
import React from "react";
import RatingStars from "./RatingStars";

interface Seller {
  name: string;
  email: string;
  phone: string;
  rating: number;
}

interface SellerInfoProps {
  seller: Seller;
}

const SellerInfo: React.FC<SellerInfoProps> = ({ seller }) => {
  return (
    <section className="seller-info">
      <h3>Informações do Vendedor</h3>
      <p><strong>Nome:</strong> {seller.name}</p>
      <p><strong>E-mail:</strong> {seller.email}</p>
      <p><strong>Telefone:</strong> {seller.phone}</p>
      <RatingStars rating={seller.rating} />
    </section>
  );
};

export default SellerInfo;
