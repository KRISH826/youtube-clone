/** @format */

import React, { useState, createContext, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

// use context
export const Context = createContext();

export const AppContext = ({ children }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState("New");
  const [mobilemenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(categories);
  }, [categories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        result,
        setResult,
        loading,
        setLoading,
        categories,
        setCategories,
        mobilemenu,
        setMobileMenu,
      }}>
      {children}
    </Context.Provider>
  );
};
