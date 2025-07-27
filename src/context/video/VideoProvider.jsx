import { useState } from "react";
import VideoContext from "./VideoContext";

const VideoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [videoId, setVideoId] = useState(null);

  return (
    <VideoContext.Provider
      value={{
        data,
        setData,
        videoId,
        setVideoId,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
