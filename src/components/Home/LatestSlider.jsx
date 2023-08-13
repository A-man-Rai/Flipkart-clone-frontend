import React from "react";
import {Box,Typography,styled,Button}  from "@mui/material"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const ImageWrapper=styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
padding:45px 35px;
height:70%;
width:11%;
margin-right:10px;
&>h5{
    color:#ffffff;
    font-weight:600;
}
`
const Wrapper=styled(Box)`
margin-top:10px;
height:300px;
background:#ffffff;
align-items: center;
display:flex;
`

const ViewButton=styled(Button)`
margin-top:20%;
margin-left:30px;
`
const CarouselWrapper = styled(Box)`
  flex: 1; // This will make the carousel take up the remaining space
  overflow: auto
`

  const Text=styled(Typography)`
  font-size:14px;
  margin-top:5px
  ` 
const Image=styled('img')({
    height:150,
    width:"auto"
  })

const LatestSlider=({products,showPicture})=>{
    return (
     <Wrapper>
      
      <ImageWrapper>
        <Typography variant='h5'>Best of Electronics</Typography>
        <ViewButton variant="contained">View All</ViewButton>
      </ImageWrapper>
    <CarouselWrapper>
      <Carousel responsive={responsive}
      swipeable={false}
      draggable={false}
      keyBoardControl={true}
      centerMode={false}
      slidesToSlide={4}
    
    
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
       {
        products.map(product=>(
          <Box textAlign="center" style={{padding:"25px 15px"}}>
        <Image src={product.url} alt='product'/>
        <Text style={{fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Text>
        <Text style={{color:"green"}}>{product.discount}</Text>
        <Text style={{color:"#212121",opacity:".6"}}>{product.tagline}</Text>
        </Box>))
       }
    </Carousel>
    </CarouselWrapper>
    
     
   {showPicture &&
      <Box style={{padding:5,textAlign:"center"}}>
      <img style={{height:290,width:234}} alt="aeroplane" src="https://rukminim2.flixcart.com/fk-p-flap/464/708/image/2e3d520dea774823.jpg?q=70"/>
      </Box>
   } 
     </Wrapper>
    );
}
export default LatestSlider;