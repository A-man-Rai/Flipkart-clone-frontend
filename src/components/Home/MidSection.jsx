import { Box,Grid} from "@mui/material"
import React from "react";
import  {imageURL} from "../Pictures/data.js"
import styled from "@emotion/styled";

const GridWrapper=styled(Grid)`
margin-top:10px;
`
const Image=styled('img')({
marginTop:10,
width:"100%"
})

const MidSection =()=>{
    return(
        <>
        <Box style={{display:"flex"}}>
          <GridWrapper container lg={12} xs={12} sm={12} md={12} > 
            {imageURL.map(image=>(
                <Grid item lg={4} xs={12} sm={12} md={4} >
                <img src={image} alt="ad" style={{width:"100%"}}/>
                </Grid> 
            ))
             }
            
           </GridWrapper>
        </Box>
         <Image src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50" alt="covid"/>
        </>
    )
}

export default MidSection;