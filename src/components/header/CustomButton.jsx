import React,{useState,useContext} from "react";
import { Box,Button ,Typography,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDailog from "../Login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 1%;
& > button , & > p, & > div{
    margin-right:40px;
    font-size:16px;
   
}
align-items:center;
`
const CartWrapper=styled(Box)`
display:flex;
`
const LoginButton=styled(Button)`
color:#2874f0;
background-color:#fff;
text-transform:none;
padding: 3px 42px;
border-radius:2px;
box-shadow:none;
font-weight:550;
height:32px;
`



const CustomButton=()=>{
   const [open,setOpen]=useState(false)
   const{accountName,setAccountName}=useContext(DataContext);
   const handleClick=()=>{
      setOpen(true)
    }

    return(
        <Wrapper>
        {accountName ? <Profile account={accountName} setAccount={setAccountName}/> :
        <LoginButton variant="contained" onClick={handleClick}>Login</LoginButton>}

           <Typography style={{marginTop:3 ,width:140}}>Become a Seller</Typography>
           <Typography style={{marginTop:3 }}>More</Typography>
            <CartWrapper>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </CartWrapper>
             <LoginDailog open={open} setOpen={setOpen}/>
        </Wrapper>
        
    );
}

export default CustomButton;