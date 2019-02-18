import React from "react";

import ProductListing from "../features/product-listing";
//import data from "../data/products.json";
// <ProductListing products={data.products} />

export default function Homepage(props) {
  return (
    <div>
      <h2>Homepage</h2>
      <ProductListing />
    </div>
  );
}
