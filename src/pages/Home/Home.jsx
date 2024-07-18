import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import "./Home.css";
import Feed from "../../components/Feed/Feed.jsx";

const Home = ({ sidebar }) => {

const [category, setCategory]=useState(0)


  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed category={ category} />
      </div>
    </>
  );
};
export default Home;
