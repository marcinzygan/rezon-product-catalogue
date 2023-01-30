import React from "react";
import { useSelector } from "react-redux";
const ProductCard = () => {
  const data = useSelector((state) => state.data.originalData);
  console.log(data);
  return data.map((product) => (
    <div key={product.id}>{product.identyfikator}</div>
  ));
};

export default ProductCard;
