import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "./../../../src/assets/logo/logo.png";
import { fetchCategories } from "./../../redux/Slices/categoriesSlice";

import {
  AdminLineIcon,
  FavoriteBorderIcon,
  ShoppingBagIcon,
  Store,
} from "../../components/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubcategories } from "../../redux/Slices/subcategoriesSlice";

function MainLayoutHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState();
  const [selected, setSelected] = useState();
  const dispatch = useDispatch();
  const { categories, subcategories } = useSelector((store) => store);
  const navigate = useNavigate();

  function adminAuth() {
    return Boolean(localStorage.getItem("token"));
  }

  function showProductsMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubcategories());
  }, [dispatch]);

  function showProductsSubMenu(e) {
    setShowSubMenu(!showSubMenu);
    setSelected(e.target.id);
  }

  function goToSubcategoryPage(e) {
    navigate(`/subcategory?id=${e.target.id}`);
  }

  return (
    <div className="flex flex-col sticky top-0 shadow-lg shadow-slate-300 z-40">
      <div className="flex justify-center items-center h-10 text-slate-50 topColor arsoo text-xl">
        <p>
          به فروشگاه <span className="morvarid font-bold text-3xl">پالت</span>{" "}
          خوش اومدی
        </p>
      </div>
      <div className="flex items-center justify-between mainHeaderColor px-12 py-3">
        <div className="flex items-center gap-16">
          <img src={logo} alt="logo" className="w-40 h-32" />
          <p className="text-4xl font-bold text-slate-600 vazir-medium">
            کتاب و لوازم التحریر و هنر
          </p>
        </div>
        <div className="flex gap-10 text-slate-600 vazir-semiBold">
          <div className="relative">
            <div
              className="flex flex-col items-center text-sm font-medium hover:text-lime-500 hover:cursor-pointer absolute top-0 left-3"
              onClick={showProductsMenu}
            >
              <Store size="1.7rem" />
              محصولات
            </div>
            <div className="absolute top-14 flex flex-row-reverse">
              {showMenu && (
                <div className="bg-slate-100 w-44 p-3 rounded-md text-center leading-10 absolute -right-32">
                  <ul>
                    {categories.data.map((item) => (
                      <li id={item.id} onClick={showProductsSubMenu}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {showSubMenu && (
                <div className="bg-slate-100 w-44 p-3 rounded-md text-center leading-10 absolute -left-60">
                  <ul>
                    {subcategories.data.map((item) => {
                      if (item.categoryId == selected) {
                        return (
                          <li id={item.id} onClick={goToSubcategoryPage}>
                            {" "}
                            {item.name}{" "}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <Link
            className="flex flex-col items-center text-sm font-medium hover:text-red-500"
            to={adminAuth() ? "/admin/orders" : "/adminLogin"}
          >
            <AdminLineIcon size="1.7rem" />
            مدیریت
          </Link>
          <Link className="flex flex-col items-center text-sm font-medium hover:text-fuchsia-500">
            <FavoriteBorderIcon size="1.7rem" />
            مورد علاقه ها
          </Link>
          <Link className="flex flex-col items-center text-sm font-medium hover:text-blue-500">
            <ShoppingBagIcon size="1.7rem" />
            سبد خرید
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainLayoutHeader;
