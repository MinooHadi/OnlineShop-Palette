import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../../api/constant";
import { fetchCategories } from "../../../../redux/Slices/categoriesSlice";
import { fetchSubcategories } from "../../../../redux/Slices/subcategoriesSlice";

function Home() {
  const dispatch = useDispatch();
  const { categories, subcategories } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubcategories());
  }, [dispatch]);

  console.log(subcategories.data);

  return (
    <div className="flex flex-col gap-8 px-10 my-20">
      {categories.data.map((cItem) => {
        return (
          <>
            <div className="bg-slate-300 flex justify-center items-center h-10 vazir-extraBold text-lg text-slate-700 rounded-xl">
              {cItem.name}
            </div>
            <div className="flex gap-20 flex-wrap justify-center my-5">
              {subcategories.data.map(
                (subItem) =>
                  cItem.id === subItem.categoryId && (
                    <div className="w-64 border-2 border-slate-300 flex flex-col items-center gap-10 py-5 rounded-lg vazir-bold text-slate-600 hover:cursor-pointer hover:bg-slate-100">
                      <img src={`${baseURL}/files/${subItem.icon}`} alt={subItem.name} className="w-36 h-36" />
                      {subItem.name}
                    </div>
                  )
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Home;
