export const API_KEY = import.meta.env.VITE_API_KEY;

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const searchVideos = async (query, pageToken = "") => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    part: "snippet",
    type: "video",
    maxResults: 50,
    pageToken,
  });

  const res = await fetch(`${BASE_URL}/search?${params}`);
  if (!res.ok) throw new Error("YouTube API error");
  // console.log(await res.json());

  return res.json();
};
