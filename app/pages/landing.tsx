"use client"

import CustomizedInputBase from "../components/customisedInput"
import Navbar from "../components/navbar"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import { typography } from '@mui/system';

export default function Landing(){
    return(
        
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={12} sx={{mt:8}}>
                <Box sx={{typography: 'h4', textAlign:'center' }} >
                    Lorem ipsum dotar solat asdi ameen
                </Box>
            </Grid>
            <Grid item xs={12}>
                <CustomizedInputBase />
            </Grid>
        </Grid>
    )
}

{/* <Box sx={{
    display: 'grid',
    gridAutoRows: '50px',
    gap: 5,
  }}> 
        <Box sx={{ gridColumn: '1', gridRow: 'navbar' }}>
            <Navbar />
        </Box>

        <Box sx={{ gridColumn: '1', gridRow: 'headers',typography: 'title1' }} >
            Lorem ipsum
        </Box>

        <Box sx={{ gridColumn: '1', gridRow: 'input' }} >
            <CustomizedInputBase />
        </Box>
</Box> */}