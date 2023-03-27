import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../redux/Slices/categoriesSlice";

function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-8 px-10 mt-20">
      {categories.data.map((item) => (
        <div className="bg-slate-300 flex justify-center items-center h-10 vazir-extraBold text-lg text-slate-700 rounded-xl">
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Home;
