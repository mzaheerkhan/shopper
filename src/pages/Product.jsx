import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./../context/ShopContext";
import Breadcrums from "../Components/Bredcrums/Bredcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="product">
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
