import { Box, Container, Grid, Toolbar } from '@mui/material'
import React from 'react'
import { BannerTypo } from '../CustomTypo'

const Banner = () => {
  return (
    <Box sx={{minHeight:'40vh'}}>
        <Toolbar />
        <Container maxWidth='xl'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center'}}>
                    <Box >
                    <BannerTypo sx={{fontSize:{xs:'24px', sm:"38px"}}}>Your one-stop shop for success. <br/> Empowering businesses, big and small, to get it done.<br/> Beyond supplies, beyond expectations.</BannerTypo>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <img src="https://i.pinimg.com/564x/83/ac/05/83ac058d9beda224c39342c4c9b18ea6.jpg" alt="banner" width="100%" />
                    </Box>
                    </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Banner