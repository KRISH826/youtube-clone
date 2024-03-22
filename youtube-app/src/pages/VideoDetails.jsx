/** @format */

import React, { useContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestionVideoCard from "../components/SuggestionVideoCard";

const VideoDetails = () => {
  const [video, setvideo] = useState();
  const [relatedVideo, setrelatedVideo] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchVideoDetails();
    suggestionVideos();
  }, [id]);

  const suggestionVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      setrelatedVideo(res);
      console.log(res);
      setLoading(false);
    });
  };

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      setvideo(res);
      console.log(res);
      setLoading(false);
    });
  };

  return (
    <div className='flex justify-center flex-row'>
      <div className='w-full flex flex-row'>
        <div className='flex w-100 flex-1 col-span-2 flex-col px-4 py-3 lg:py-6'>
          <div className='h-[200px] md:h-[400px] rounded-2xl lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width='100%'
              height='100%'
              style={{ backgroundColor: "#000000", borderRadius: 20 }}
              playing={true}
            />
          </div>
          <div className='text-white font-bold text-sm md:text-xl mt-4 line-clamp-2'>
            {video?.title}
          </div>
          <div className='flex justify-between flex-col md:flex-row mt-4'>
            <div className='flex'>
              <div className='flex items-start'>
                <div className='flex h-11 w-11 rounded-full overflow-hidden'>
                  <img
                    className='h-full w-full object-cover'
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className='flex flex-col ml-3'>
                <div className='text-white text-md font-semibold flex items-center'>
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
                  )}
                </div>
                <div className='text-white/[0.7] text-sm'>
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className='flex text-white mt-4 md:mt-0'>
              <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
                <AiOutlineLike className='text-xl text-white mr-2' />
                {`${abbreviateNumber(video?.stats?.views, 2)} Likes`}
              </div>
              <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4'>
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col py-6 px-4 w-[500px]'>
          {relatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
