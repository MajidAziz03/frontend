import React from "react";
import Featured from "./Components/featured/Featured";
import Navbar from "./Components/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Featured type = "movie"/>
      </div>
    </>
  );
};

export default Home;
