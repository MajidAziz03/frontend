import React, {useNavigate} from 'react'
import './Watch.scss'
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link } from 'react-router-dom';


const Watch = () => {
    let navigate = useNavigate()
    const movie = navigate.movie
  return (
    <>
      <div className="watch">
        <Link to='/'>
          <div className="back">
            <ArrowBackOutlinedIcon />
            <span>Home</span>
          </div>
        </Link>
        <video src={movie.video} className="video" autoPlay progress controls />
      </div>
    </>
  );
}

export default Watch