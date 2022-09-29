import React from "react";
import { AppBar, styled, Toolbar, Typography, Badge, Avatar  } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PetsIcon from "@mui/icons-material/Pets";
import { Box } from "@mui/system";
import { InputBase } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
// import myPic from './components/files/myPic'
export default function NavBar() {
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]:{
      display: 'flex',

    }
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]:{
      display: 'none',

    }
  
  }));
  const [open, setOpen] = useState(false);
  return (
    
      <AppBar position="sticky">
        <StyleToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            NavBar
          </Typography>
          <PetsIcon sx={{ display: { sx: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Icons>
            <Badge minimun={99} badgeContent={100} color="error">
              <MailIcon  />
            </Badge>
            <Badge badgeContent={10} color="error">
              <NotificationsIcon  />
            </Badge>
            <Avatar sx={{width:30 , height:30}} src='https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg'
            onClick={(e)=>{setOpen(true)}}
            />
          </Icons>
          <UserBox>  <Avatar sx={{width:30 , height:30}} src='https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg'
          onClick={(e)=>{setOpen(true)}}
          />
            <Typography>Abu Bakar</Typography>
          </UserBox>
        </StyleToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem  onClick={(e)=>{setOpen(false)}}>Profile</MenuItem>
        <MenuItem onClick={(e)=>{setOpen(false)}} >My account</MenuItem>
        <MenuItem onClick={(e)=>{setOpen(false)}} >Logout</MenuItem>
      </Menu>
      </AppBar>
   
  );
}
