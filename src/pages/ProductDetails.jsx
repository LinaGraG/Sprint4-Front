import React from "react";
import MetaData from "../components/layout/metadata/MetaData";
import Product from "../components/products/Product";


const ProductDetails = () => {
  return (
    <>
      <MetaData title="Detalles del producto" />
      <Product />
    </>
  );
};

export default ProductDetails;
