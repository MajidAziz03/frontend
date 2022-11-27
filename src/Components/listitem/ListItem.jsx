import "./ListItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function ListItem({ index,item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovies = async() => {
     try {
       const res = await axios.get("/movies/find/" + item , {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODMxMWVmYzI3YmY0MzczNmUyNzhiMSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njk1MzQyMTYsImV4cCI6MTY2OTk2NjIxNn0.Tii2or-rJbmUBkZO17gm5Vn_jsqPS8IbmbMrl7cxC8I",
            },
       })
       setMovie(res.data)
     } catch (error) {
       console.log(error)
     }
    }
    
    getMovies()
      
  },[item])
  return (
    <Link to="/watch">
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item.image} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOffAltOutlinedIcon className="icon" />
                <ThumbDownOffAltOutlinedIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

