// src/pages/ProductPage.tsx
import React from "react";
import { productData } from "../data/productData";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductDetails from "../components/ProductDetails";
import SellerInfo from "../components/SellerInfo";
import Comments from "../components/Comments";
import Questions from "../components/Questions";
import RelatedProducts from "../components/RelatedProducts";

const ProductPage: React.FC = () => {
  const { product, seller, comments, questions, relatedProducts } = productData;

  return (
    <div className="product-page">
      <Header />
      <Menu />

      <main>
        <div className="product-wrapper">
          <ProductDetails product={product} />
          <SellerInfo seller={seller} />
        </div>

        <Comments comments={comments} />
        <Questions questions={questions} />
        <RelatedProducts products={relatedProducts} />
      </main>

    </div>
  );
};

export default ProductPage;
