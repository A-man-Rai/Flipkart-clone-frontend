import Dialog from '@mui/material/Dialog';
import React,{useState,useContext} from "react"
import { Box,TextField ,Typography,Button,styled} from '@mui/material';
import {authenticateSignUp, authenticateLogin} from "../../SERVICE/api.js"
import { DataContext } from '../../context/DataProvider';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
const Wrapper=styled(Box)`
height:70vh;
width:90vh;

`

const ImageWrapper=styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:82.7%;
width:28%;
padding:45px 35px;

&>p,&>h5{
    color:#ffffff;
    font-weight:600;
}
`

const TextWrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:45px 35px;
flex:1;
&>div,&>button,&>p{
    margin-top:20px;
}
`


const LoginButton=styled(Button)`
background:#fb641b;
color:#fff;
border-radius:2px;
height:48px;
`
const RequestButton=styled(Button)`
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text=styled(Typography)`
color:3878787;
font-size:12px;
`
const CreateAccount=styled(Typography)`
color:#2874f0;
font-size:14px;
text-align:center;
font-weight:600;
cursor:pointer;
`

const InvalidPasswordUsernameText=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
font-weight:600;
margin-top:10px;
`

const LoginDailog=({setOpen,open})=>{
  
   const [account,setAccount]=useState(true);
   const{setAccountName}=useContext(DataContext)

   let head = account ? 
   {
       heading:"Login",
       subHeading:"Get access to your Orders, Wishlist and Recommendations"
   } 
   : 
   {
       heading:"Looks like you're new here!",
       subHeading:"Sign up with your mobile number to get started"
   };

    const handleClose=()=>{
     setOpen(false);
     setAccount(true);
    }
    
    const[initial,setInitial]=useState({
        emailPhone:"",
        password:"",
        confirm:""
      })

    const SignInputChange=(event)=>{
    setInitial({...initial,[event.target.name]:event.target.value});
    }
   
    const [displayInvalidPassowrdOrUserNameText,setDisplayInvalidPassowrdOrUserNameText]=useState(false);
    
 

  const signUpUser=async()=>{
    let response= await authenticateSignUp(initial)
    if(!response) return;
    handleClose();
    // console.log(response.data.message); register email id from frontend
    setAccountName(response.data.message);
  }

  const [loginData,setLoginData]=useState({
    emailPhone:"",
    password:""
  })

  const loginInputChange=(event)=>{
    setLoginData({...loginData,[event.target.name]:event.target.value});
    setDisplayInvalidPassowrdOrUserNameText(false);
    }
  
  
    const loginUser=async()=>{
      let response= await authenticateLogin(loginData)
      if(!response){ setDisplayInvalidPassowrdOrUserNameText(true); return;}
      handleClose();
      setAccountName(response.data.message);
    } 
    
    return(
       <Dialog open={open} onClose={handleClose} PaperProps={{sx :{maxWidth:'unset'}}}>
          <Wrapper>
            <Box style={{display:"flex",height:"100%"}}>
            <ImageWrapper>
                <Typography variant='h5'>{head.heading}</Typography>
                <Typography style={{marginTop:20}}>{head.subHeading}</Typography>
            </ImageWrapper>
            {account?
            <TextWrapper>
                <TextField onChange={loginInputChange} value={loginData.emailPhone} variant='standard' name='emailPhone' label="Enter Email/Phone Number"/>
                {displayInvalidPassowrdOrUserNameText && <InvalidPasswordUsernameText>Enter valid username or passowrd</InvalidPasswordUsernameText>}
                <TextField  onChange={loginInputChange} value={loginData.password}  variant='standard' name='password' label="Password"/>
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                 <LoginButton onClick={loginUser}>Login</LoginButton>
                 <Typography style={{textAlign:"center"}}>OR</Typography>
                 <LoginButton>Request OTP</LoginButton>
                 <CreateAccount onClick={()=>{
                    setAccount(false)
                 }}>New to Flipkart? Create an account</CreateAccount>
            </TextWrapper>    :
            <TextWrapper>
                <TextField value={initial.emailPhone} variant='standard'  name='emailPhone' onChange={SignInputChange} label="Enter Email/Phone Number"/>
                <TextField value={initial.password} variant='standard' name='password' onChange={SignInputChange} label="Password"/>
                <TextField value={initial.confirm} variant='standard' name='confirm' onChange={SignInputChange} label="Confirm Password"/>
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                 <LoginButton onClick={signUpUser}>Login</LoginButton>
                 <RequestButton onClick={()=>{
                    setAccount(true)
                 }}>Existing User?Log in</RequestButton>
            </TextWrapper>
            }
            </Box>
          </Wrapper>
          
          <IconButton 
           style={{ position: 'absolute', right: '15px', top: '5px' }} 
           edge="end" 
           color="inherit" 
           onClick={handleClose}
          >
          <CloseIcon />
          </IconButton>

       </Dialog>
    );
}

export default LoginDailog;