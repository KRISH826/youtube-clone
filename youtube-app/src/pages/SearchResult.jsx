/** @format */

import React, { useContext, useState } from "react";
import { Context } from "../context/contextApi";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { loading, setResult, result } = useContext(Context);
  const { searchQuery } = useParams();
  const [datazResult, setdataResult] = useState([]);
  return <div className='my-auto mx-auto w-[1080px]'>SearchResult</div>;
};

export default SearchResult;
