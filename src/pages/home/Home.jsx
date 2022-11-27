import React, { useState } from "react";
import axios from "axios";
import Featured from "../../Components/featured/Featured";
import List from "../../Components/list/List";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";
import { useEffect } from "react";

const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
         `list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,

          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMxMWVmYzI3YmY0MzczNmUyNzhiMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njk1MzQyMTYsImV4cCI6MTY2OTk2NjIxNn0.Tii2or-rJbmUBkZO17gm5Vn_jsqPS8IbmbMrl7cxC8I",
            },
          }
        );
         setList(res.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <>
      <div className="home">
        <Navbar />
        <Featured type={type} />
        {list.map((list) => (
          <List list = {list} />
        ))}
      </div>
    </>
  );
};

export default Home;
