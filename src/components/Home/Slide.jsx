import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Box,Button,Typography,styled,Divider}  from "@mui/material"
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
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

  const Wrapper =styled(Box)`
  margin-top:10px;
  background-color:#ffffff;
  `
 const DealTextWrapper=styled(Box)`
 padding:15px 20px;
 display:flex;
 `
 const TimeLeftWrapper=styled(Box)`
 display:flex;
 align-items:center;
 margin-left:10px;
 color:#7f7f7f
 `

 const DealText=styled(Typography)`
 font-size:22px;
 font-weight:600;
 margin-right:25px;
 line-height:32px;
 `
const ViewAllButton=styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px;
font-weight:600;
`
const Image=styled('img')({
  height:150,
  width:"auto"
})

const Slide=({products,title,timer})=>{

const renderer = ({ hours, minutes, seconds, completed }) => {
    return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>;
};

const Text=styled(Typography)`
font-size:14px;
margin-top:5px
`

return(
    <Wrapper>
    
    <DealTextWrapper>
        <DealText>{title}</DealText>
       
        {timer &&
          <TimeLeftWrapper>
            <img style={{width:24}} src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' alt='timer'/>
            <Countdown date={Date.now()+50400000} renderer={renderer}/>
          </TimeLeftWrapper>
          }

        <ViewAllButton variant='contained' color="primary">View All</ViewAllButton>
    </DealTextWrapper>
    <Divider/>
    <Carousel responsive={responsive}
      swipeable={false}
      draggable={false}
      keyBoardControl={true}
      centerMode={true}
      slidesToSlide={4}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
       {
        products.map(product=>(
        <Link to={`product/${product.id}`} style={{textDecoration:"none"}}>
        <Box textAlign="center" style={{padding:"25px 15px"}}>
        <Image src={product.url} alt='product'/>
        <Text style={{fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Text>
        <Text style={{color:"green"}}>{product.discount}</Text>
        <Text style={{color:"#212121",opacity:".6"}}>{product.tagline}</Text>
        </Box>
        </Link>
        ))
       }
    </Carousel>
    </Wrapper>
)
}

export default Slide;