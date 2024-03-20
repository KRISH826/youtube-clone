/** @format */

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";
import { categoriesList } from "../utils/constants";

const Sidebar = () => {
  const { categories, setCategories, mobilemenu } = useContext(Context);
  const navigate = useNavigate();

  const actionClick = (item, type) => {};

  return (
    <aside className='w-[230px]  border transition border-[#1c1c1c] border-r-1 border-y-0 border-l-0 px-3'>
      {categoriesList.map((item, index) => (
        <>
          <div
            key={index}
            className={
              "text-base cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]"
            }>
            <span className='text-xl mr-5'>{item.icon}</span>
            <span>{item.type === "home" ? "Home" : item.name}</span>
          </div>
          {item.divider && <hr className='my-5 border-white/[0.2]' />}
        </>
      ))}
    </aside>
  );
};

export default Sidebar;
