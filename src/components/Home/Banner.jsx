import React from "react";
import Carousel from 'react-multi-carousel';
import {styled}  from "@mui/material"
import { bannerData } from "../Pictures/data";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
const Image=styled('img')({
    width:'100%',
    height:280
})

const Banner=()=>{
return(
    <Carousel responsive={responsive}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      keyBoardControl={true}
      slidesToSlide={1}
       autoPlaySpeed={4000}
    >
      {
        bannerData.map(data=>(<Image src={data.url} alt="banner"/>))
      }
    </Carousel>
)
}

export default Banner;