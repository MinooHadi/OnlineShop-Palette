import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "./../../../src/assets/logo/logo.png";
import { fetchCategories } from "./../../redux/Slices/categoriesSlice";

import {
  AdminLineIcon,
  FavoriteBorderIcon,
  Home,
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
  const lastSelected = useRef();

  function adminAuth() {
    return Boolean(localStorage.getItem("token"));
  }

  function showProductsMenu() {
    setShowMenu(true);
  }

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubcategories());
  }, [dispatch]);

  function showProductsSubMenu(e) {
    setShowSubMenu(true);
    setSelected(e.target.id);
    if (lastSelected.current) {
      lastSelected.current.classList.remove("menu-color");
    }
    e.target.classList.add("menu-color");
    lastSelected.current = e.target;
  }

  function hideMenus() {
    setShowMenu(false);
    setShowSubMenu(false);
    lastSelected.current = null;
  }

  function goToSubcategoryPage(e) {
    navigate(`/subcategory?id=${e.target.id}`);
    setShowMenu(false);
    setShowSubMenu(false);
  }

  function goToCategoryPage(e) {
    navigate(`/category?id=${e.target.id}`);
    setShowMenu(false);
    setShowSubMenu(false);
  }

  return (
    <>
      <div className="flex flex-col sticky top-0 z-40" onMouseLeave={hideMenus}>
        <div className="flex justify-center items-center h-10 text-slate-50 topColor arsoo text-xl">
          <p>
            به فروشگاه <span className="morvarid font-bold text-3xl">پالت</span>{" "}
            خوش اومدی
          </p>
        </div>
        <div className="flex items-center justify-between mainHeaderColor px-12">
          <div className="flex items-center gap-16">
            <img src={logo} alt="logo" className="w-32 h-24" />
            <p className="text-4xl font-bold text-slate-600 vazir-medium">
              کتاب و لوازم التحریر و هنر
            </p>
          </div>
          <div className="flex gap-10 text-slate-600 vazir-semiBold">
            <Link
              className="flex flex-col items-center text-sm font-medium hover:text-lime-500"
              to="/"
            >
              <Home size="1.7rem" />
              خانه
            </Link>
            <div
              className="flex flex-col items-center text-sm font-medium hover:text-yellow-500 hover:cursor-pointer"
              onMouseOver={showProductsMenu}
            >
              <Store size="1.7rem" />
              محصولات
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
        <div className="w-[100%] mainHeaderColor border-t-4 absolute top-[132px]">
          {showMenu && (
            <div>
              <ul className="flex vazir-medium justify-around py-3 text-slate-600">
                {categories.data.map((item) => (
                  <li
                    id={item.id}
                    onMouseOver={showProductsSubMenu}
                    onClick={goToCategoryPage}
                    className="hover:cursor-pointer pb-1"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {showSubMenu && (
            <div>
              <ul className="flex vazir-light justify-around py-3 text-slate-600">
                {subcategories.data.map((item) => {
                  if (item.categoryId == selected) {
                    return (
                      <li
                        id={item.id}
                        onClick={goToSubcategoryPage}
                        className="hover:cursor-pointer submenu pb-1"
                      >
                        {item.name}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainLayoutHeader;
