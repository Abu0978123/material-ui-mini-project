import { Avatar, AvatarGroup, Box, Divider, ImageList,ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

export default function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} sx={{width: 300}}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
        <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.pinimg.com/236x/7d/0c/84/7d0c845f5176d2a50bcae132a026d08e.jpg"
          />  <Avatar
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://i.pinimg.com/236x/7d/0c/84/7d0c845f5176d2a50bcae132a026d08e.jpg"
        />
          <Avatar
            alt="Cindy Baker"
            src="https://img.freepik.com/premium-vector/cute-girl-cartoon-hug-sweet-heart-valentines-day-kawaii-character_70350-730.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://us.123rf.com/450wm/svetamart/svetamart2001/svetamart200100072/138586088-portrait-of-adorable-smiling-little-girl-child-isolated-on-a-gray-background.jpg?ver=6"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://www.whatsappimages.in/wp-content/uploads/2021/03/New-Top-Quality-Cute-Girl-Images-For-Whatsapp-Dp-Wallpaper-Download.jpg"
          /> <Avatar
          alt="Agnes Walker"
          src="https://us.123rf.com/450wm/svetamart/svetamart2001/svetamart200100072/138586088-portrait-of-adorable-smiling-little-girl-child-isolated-on-a-gray-background.jpg?ver=6"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://www.whatsappimages.in/wp-content/uploads/2021/03/New-Top-Quality-Cute-Girl-Images-For-Whatsapp-Dp-Wallpaper-Download.jpg"
        />
        </AvatarGroup>
        <br />
        <Typography variant="h6" fontWeight={100}>
          Recent Photos
        </Typography>
        <ImageList cols={3} rowHeight={100}  gap={5} >
        <ImageListItem>
       <img
       src="https://i.pinimg.com/236x/7d/0c/84/7d0c845f5176d2a50bcae132a026d08e.jpg"
       />
            </ImageListItem>
            <ImageListItem>
       <img
       src="https://i.pinimg.com/736x/38/5e/6e/385e6ebff2d98f1d3eeb966aa9faaf56.jpg"
       />
            </ImageListItem>
            <ImageListItem>
       <img
       src="https://images.unsplash.com/photo-1602650231028-97f3f5c709c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8&w=1000&q=80"
       />
            </ImageListItem>
            <ImageListItem>
       <img
       src="https://qph.cf2.quoracdn.net/main-qimg-299f314ab3ca9125fed1581d28431ada-pjlq"
       />
            </ImageListItem>
            <ImageListItem>
       <img
       src="https://i.pinimg.com/736x/38/5e/6e/385e6ebff2d98f1d3eeb966aa9faaf56.jpg"
       />
            </ImageListItem>
            <ImageListItem>
       <img
       src="https://cdn2.vectorstock.com/i/1000x1000/14/01/cute-handsome-man-round-avatar-icon-symbol-vector-16831401.jpg"
       />
            </ImageListItem>
            <ImageListItem>
       <img
       src="https://thumbs.dreamstime.com/b/handsome-young-man-portrait-intense-look-eye-catching-beauty-fashionable-hair-beard-wearing-white-shirt-132578103.jpg"
       />
            </ImageListItem>
            <ImageListItem>
       <img
       src="https://www.thecoldwire.com/wp-content/uploads/2021/12/smiling-man-1.jpeg"
       />
            </ImageListItem>
        </ImageList>
        <Typography variant="h6" mt={4} fontWeight={100}>
          Recently Chat
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        
      </Box>
      
    </Box>
  );
}
