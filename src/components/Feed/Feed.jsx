import React, { useContext, useEffect, useState } from "react";
import "./Feed.css";
import VideoContext from "../../context/video/VideoContext.jsx";
import { API_KEY, value_converter, searchVideos } from "../../Data.js";
import { Link } from "react-router-dom";
import moment from "moment";

const Feed = ({ category }) => {
  const { data, setData, setVideoId } = useContext(VideoContext);
  const fetchData = async () => {
    const VideoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=99&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}
  `;
    await fetch(VideoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryID}/${item.id}`}
            className="card"
            key={index}
            onClick={() => {
              setVideoId(() => {
                if (typeof item.id === "string") return item.id;
                else return item.id.videoId;
              });
            }}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {/* {value_converter(item.statistics.viewCount)} views &bull; */}
              {moment(item.snippet.publishedAt).fromNow()}{" "}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
