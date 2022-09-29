
import {Box, List, ListItem,Switch, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export default function SideBar({mode, setMode}) {
  return (
    
        <Box
        flex={1}
        p={2}
        sx={{display:{xs: 'none', sm: 'block'}}}
        >
        <Box  position={'fixed'}>
       <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon>
                <Person2Icon />
            </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon>
                <GroupAddIcon />
            </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#setting'>
              <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Brightness'>
              <ListItemIcon>
               <ModeNightIcon/>
            </ListItemIcon>
            <Switch  onChange={(e)=>setMode(mode==='light' ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>

          </List>
        </Box>
        </Box>
    
  )
}
