import { Button, Fab, IconButton,Avatar, Modal, styled, Tooltip, Typography, TextField, ButtonGroup } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyleModel = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    mb: '20px'

})
export default function AddIconn() {
    const [open, setOpen] = useState(false);
  return (
    <>
  
      <Tooltip title="Add" 
      onClick={(e)=>{setOpen(true)}}
      sx={{ position: "fixed", 
      bottom: 20,
      left :{xs:"calc(50%)" , md:30},
    }}>
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      
      <StyleModel
        open={open}
        onClose={(e)=>{setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={5}
        >
         <Typography variant="h6" color='gray' textAlign={'center'}>
            create post
         </Typography>
         <UserBox>
         <Avatar  src="https://www.thecoldwire.com/wp-content/uploads/2021/12/smiling-man-1.jpeg"/>
         <Typography variant="span" fontWeight={500}>
            Abu Bakar
         </Typography>
         </UserBox> 
         <TextField sx={{width: '100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder='whats going on in your mind'
          variant="standard"
        />
       <Stack direction={'row' } gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color='primary'/>
        <ImageIcon color='secondary'/>
        <VideoCameraBackIcon color='success'/>
        <PersonAddIcon color="error"/>

       </Stack>
       <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button  sx={{width:'100px'}}><DateRangeIcon/></Button>
</ButtonGroup>
        </Box>
      </StyleModel>
      </>
    
  );
}
