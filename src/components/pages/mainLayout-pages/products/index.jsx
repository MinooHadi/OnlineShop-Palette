import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchMainSubcategories } from "../../../../redux/MainSlices/mainSubcategoriesSlice";
import { store } from "../../../../redux/store";

function Products() {
  let [searchParams] = useSearchParams();
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  const { mainSubcategories } = useSelector((store) => store);

  useEffect(() => {
    dispatch(
      fetchMainSubcategories({
        subcategoryId: params.get("id"),
      })
    );
  }, [dispatch, params]);

  console.log(mainSubcategories.data);

  return <h1> {`زیر گروه شماره  ${searchParams.get("id")}`} </h1>;
}

export default Products;
