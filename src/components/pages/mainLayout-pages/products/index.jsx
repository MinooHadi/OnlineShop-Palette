import React from "react";
import { useSearchParams } from "react-router-dom";

function Products() {
  let [searchParams] = useSearchParams();
  return <h1> {`زیر گروه شماره  ${searchParams.get("id")}`} </h1>;
}

export default Products;
