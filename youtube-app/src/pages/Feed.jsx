/** @format */

import React, { useContext } from "react";
import { Context } from "../context/contextApi";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { loading, result, setResult } = useContext(Context);
  console.log(result);
  return (
    <div className='grow h-full overflow-y-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {!loading &&
          result &&
          result?.map((item, index) => (
            // <span key={index}>{item?.video?.author?.title}</span>
            <VideoCard key={index} video={item?.video} />
          ))}
      </div>
    </div>
  );
};

export default Feed;
