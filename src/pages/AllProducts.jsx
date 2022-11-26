import React from "react";
import ProductsGrid from "../components/products/ProductsGrid"
import MetaData from "../components/layout/metadata/MetaData";

const AllProducts = () => {
  return (
    <>
      <MetaData title="Productos" />
      <ProductsGrid />
    </>
  );
};

export default AllProducts;
