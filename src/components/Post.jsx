import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import React from 'react'
import { Checkbox } from '@mui/material';


export default function Post() {
  return (
    <Card sx={{margin:4}} >
<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      A
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Abu Bakar"
  subheader="September 27, 2022"
/>
<CardMedia
  component="img"
  height=""
  image="https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg"
  alt="Paella dish"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
  <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
</CardActions>
</Card>
  )
}


