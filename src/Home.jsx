import React from "react";
import Featured from "./Components/featured/Featured";
import List from "./Components/list/List";
import Navbar from "./Components/Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Featured />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </>
  );
};

export default Home;
