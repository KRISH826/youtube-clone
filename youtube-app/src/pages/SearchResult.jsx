/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/contextApi";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import SearchResultCard from "../components/SearchResultCard";

const SearchResult = () => {
  const { loading, setLoading, setResult, result } = useContext(Context);
  const { searchQuery } = useParams();
  const [dataResult, setdataResult] = useState([]);
  useEffect(() => {
    fetchSearchQuertData();
  }, [searchQuery]);

  const fetchSearchQuertData = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setdataResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <div className='my-auto mx-auto w-[1080px]'>
      <div className='grid grid-cols-1 gap-0'>
        {dataResult?.map((item, index) => {
          if (item?.type !== "video") return false;
          let video = item.video;
          return <SearchResultCard key={index} video={video} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
