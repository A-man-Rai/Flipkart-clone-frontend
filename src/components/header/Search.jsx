import React from "react";
import { InputBase,Box,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer=styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`

const InputSearchBase=styled(InputBase)`
padding-left:15.1px;
width:100%

`
const SearchIconWrapper=styled(Box)`
color:#2874f0;
padding:5px;
margin-right:6px;
display:flex;
`

const Search =()=>{
    return(
     <SearchContainer>
        <InputSearchBase placeholder="Search for products, brands and more"/>
         <SearchIconWrapper>
           <SearchIcon fontSize="medium"/>
         </SearchIconWrapper>    
     </SearchContainer>   
       
    );
}

export default Search