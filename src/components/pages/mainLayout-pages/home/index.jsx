import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../../api/constant";
import { fetchCategories } from "../../../../redux/Slices/categoriesSlice";
import { fetchSubcategories } from "../../../../redux/Slices/subcategoriesSlice";

function Home() {
  const dispatch = useDispatch();
  const { categories, subcategories } = useSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubcategories());
  }, [dispatch]);

  function goToSubcategoryPage(e) {
    navigate(`/subcategory?id=${e.target.id}`);
  }

  function goToCategoryPage(e) {
    navigate(`/category?id=${e.target.id}`);
  }

  return (
    <div className="flex flex-col gap-8 px-10 my-20">
      {categories.data.map((cItem) => {
        return (
          <>
            <div
              className="bg-slate-300 flex justify-center items-center h-10 vazir-extraBold text-lg text-slate-700 rounded-xl"
              id={cItem.id}
              onClick={goToCategoryPage}
            >
              {cItem.name}
            </div>
            <div className="flex gap-20 flex-wrap justify-center my-5">
              {subcategories.data.map(
                (subItem) =>
                  cItem.id === subItem.categoryId && (
                    <div
                      className="w-64 border-2 border-slate-300 flex flex-col items-center gap-10 py-5 rounded-lg vazir-bold text-slate-600 hover:cursor-pointer hover:bg-slate-100"
                      id={subItem.id}
                      onClick={goToSubcategoryPage}
                    >
                      <img
                        src={`${baseURL}/files/${subItem.icon}`}
                        alt={subItem.name}
                        className="w-36 h-36"
                      />
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
