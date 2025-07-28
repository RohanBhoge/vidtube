import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../Data";
import { useContext } from "react";
import VideoContext from "../../context/video/VideoContext";
const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const { setVideoId } = useContext(VideoContext);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${"0"}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryID}/${item.id}`}
            key={index}
            className="side-video-list"
            onClick={() => {
              setVideoId(() => {
                if (typeof item.id === "string") return item.id;
                else return item.id.videoId;
              });
            }}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              {" "}
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
