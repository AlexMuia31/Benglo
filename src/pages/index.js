import About from '@/components/Banner/About/About'
import Banner from '@/components/Banner/Banner'
import { Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <>
      <Box sx={{background:'#F5F8FB', minHeight:'100dvh'}}>
        <Banner />
        <About />
      </Box>
    </>
  )
}
