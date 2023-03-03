import React from "react";
import { useSearchParams } from "react-router-dom";

function Product() {
    let [searchParams] = useSearchParams();
    return <h1> {`محصول شماره  ${searchParams.get("id")}`} </h1>
}

export default Product;