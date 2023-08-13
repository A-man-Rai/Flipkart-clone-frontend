import React ,{useState}from "react";
import { Box,Menu,Typography,MenuItem,styled} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Profile=({account,setAccount})=>{
    const [open,setOpen]=useState(false);

  const MenuWrapper=styled(Menu)`
  margin-top:5px;
  `
  const LogoutTextWrapper=styled(Typography)`
  margin-left:20px;
  font-size:14px;
`

    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const logoutUser=()=>{
      setAccount(null);
    }
    
    return (
     <>
      <Box onClick={handleClick}><Typography style={{marginTop:2,cursor:'pointer'}}>{account}</Typography>
      </Box> 
      <MenuWrapper
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={()=>{handleClose();logoutUser();}}>
        <PowerSettingsNewIcon color="primary" fontSize="small"/>
       <LogoutTextWrapper>Logout</LogoutTextWrapper>
        </MenuItem>
   
      </MenuWrapper>
    </>
);
}

export default Profile;