import React from "react"
import {AppBar,Toolbar,styled,Box,Typography} from "@mui/material"
import Search  from "./Search"
import CustomButton from "./CustomButton"
import { Link } from "react-router-dom"
const StyledHeader=styled(AppBar)`
  background:#2874f0;
  height:55px
`
const FlipKartLogoBox=styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`
const ExplorePlus=styled(Typography)`
font-size:10px;
font-style:italic
`
const PlusImage=styled('img')({
    width:10,
    height:10,
    marginLeft:4

})

const CustomButtonWrapper=styled(Box)`
margin:0 7% 0 auto;
`


const Header=()=>{
  return(
  <StyledHeader>
    <Toolbar style={{minHeight:55}}>
        <FlipKartLogoBox to="/">
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart Logo" style={{width:75}}/>
            <Box style={{display:"flex"}}>
                <ExplorePlus>
                    Explore&nbsp; 
                    <Box component="span" style={{color:"#FFE500"}}>Plus</Box>
                </ExplorePlus>
                <PlusImage src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="sub-logo flipkart"/>
            </Box>
        </FlipKartLogoBox>
        <Search/>
        <CustomButtonWrapper>
          <CustomButton/>
        </CustomButtonWrapper>
    </Toolbar>
  </StyledHeader>
  );
}

export default Header