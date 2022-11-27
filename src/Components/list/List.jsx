import React, { useRef } from 'react'
import './List.scss'
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ListItem  from '../listitem/ListItem';
import { useState } from 'react';

// // // useRef is wja sey humnay use kia hai takay hum container kko select kr sktay hai ab wo to nh kr sktay document.get elemcment wala to hum useref krengay asani kay leye

// getBoundingClientRect() yeh hmuhen poora distance batata hai x sey kitna move huwe

const List = ({ list }) => {
  
  const [isMoved, setIsMoved] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)
  let listRef = useRef()
  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber -1 )
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }
  return (
    <>
      <div className="list">
        <span className="listTitle"> {list.title} </span>
        <div className="wrapper">
          <ArrowBackIosNewOutlinedIcon
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            {list.content.map((item,i) => (
              <ListItem index={i} item={item} />
            ))}
           
          </div>
          <ArrowForwardIosOutlinedIcon
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
}

export default List