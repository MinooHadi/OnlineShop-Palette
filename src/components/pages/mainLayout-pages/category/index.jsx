import React from "react";
import { useSearchParams } from "react-router-dom";

function Category() {
    let [searchParams] = useSearchParams();
    return <h1> {`گروه شماره  ${searchParams.get("id")}`} </h1>
}

export default Category;