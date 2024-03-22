/** @format */

import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");
  return (
    <div className='absolute text-sm bottom-2 right-2 bg-[#171717] text-white py-1 px-2 rounded-lg'>
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
