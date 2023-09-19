"use client"


import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
    //   sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        sx = {{ display: 'flex',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        borderRadius: 1,
        borderColor: 'black',
        height: '50' 
    }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search the full picture"
        inputProps={{ 'aria-label': 'discover the full picture' }}
        size='medium'
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>      
    </Paper>
  );
}

