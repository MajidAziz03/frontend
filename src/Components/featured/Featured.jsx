import React, { useEffect, useState } from 'react'
import './Featured.scss'
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from 'axios'


const Featured = ({ type }) => {
  const [content, setContent] = useState({})
    
  useEffect(() => {
    const getRandomMovie = async() => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMxMWVmYzI3YmY0MzczNmUyNzhiMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njk1MzQyMTYsImV4cCI6MTY2OTk2NjIxNn0.Tii2or-rJbmUBkZO17gm5Vn_jsqPS8IbmbMrl7cxC8I",
          },
        });
        setContent(res.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    getRandomMovie();
  },[type])


    return (
      <>
            <div className="featured">
                {
        type && (
          <div className="category">
            <span> {type === "movies" ? "Movies" : "Series"} </span>
            <select name="genre" id="genre">
              <option> Genre </option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )
    }
          <img
            src={content.img}
            alt=""
          />
          <div className="info">
            <img
              src={content.imgTitle}
              alt=""
            />
            <span className="desc">
              {content.desc}
            </span>
            <div className="buttons">
                        <button className="play">
                            <PlayCircleFilledWhiteIcon />
                            <span> Play </span>
              </button>
                        <button className="more">
                            <InfoOutlinedIcon />
                        <span>Info</span>
                        </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Featured