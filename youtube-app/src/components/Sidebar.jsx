/** @format */

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";
import { categoriesList } from "../utils/constants";

const Sidebar = () => {
  const { categories, setCategories, mobilemenu } = useContext(Context);
  const navigate = useNavigate();

  const actionClick = (name, type) => {
    switch (type) {
      case "category":
        return setCategories(name);
      case "home":
        return setCategories(name);
      case "menu":
        return setCategories(name);
      default:
        break;
    }
  };

  return (
    <aside className='w-[230px] fixed z-10 bg-[#111] border transition border-[#1c1c1c] border-r-1 border-y-0 border-l-0 px-3'>
      {categoriesList.map((item, index) => (
        <span
          key={item.name}
          onClick={() => {
            actionClick(item.name, item.type);
            navigate("/");
          }}>
          <div
            className={`text-base cursor-pointer h-10 flex items-center px-3 mb-[2px] rounded-lg hover:bg-white/[0.15] ${
              categories === item.name ? "bg-white/[0.15]" : ""
            }`}>
            <span className='text-xl mr-5'>{item.icon}</span>
            <span>{item.type === "home" ? "Home" : item.name}</span>
          </div>
          {item.divider && <hr className='my-5 border-white/[0.2]' />}
        </span>
      ))}
      <hr className='my-4 border-white/[0.2]' />
      <div className='text-white/[0.5] pb-3 text-[12px]'>
        Clone by: Krishnendu Panja
      </div>
    </aside>
  );
};

export default Sidebar;
