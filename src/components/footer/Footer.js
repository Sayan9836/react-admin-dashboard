import { Box, Typography } from '@mui/material'
import React from 'react'
import { github } from '../../Data'
const Footer = () => {
    return (
        <Box sx={{display:'flex', width:"100vw",height:"100vh",padding:'6rem', gap:'25%',backgroundColor:'rgb(0, 0, 0,0.8)',color:'whitesmoke'}}>
            <Box width='25vw'>
                <Box >
                    <Typography color='rgba(255,255,0,1)'  variant='h4' gutterBottom>Quick links</Typography>
                    <Typography variant='h6'>Download your</Typography>
                    <Typography>product</Typography>
                    <Typography>Affiliate Program</Typography>
                </Box>
                <Box mt='4rem'>
                    <Typography color='rgba(255,255,0,1)' variant='h4' gutterBottom>Products</Typography>
                    <Typography variant='h6'>CoreUI for</Typography>
                    <Typography variant='h6'>Angular</Typography>
                    <Typography color='red' variant='h6'>CoreUI for</Typography>
                    <Typography variant='h6'>Bootstrap</Typography>
                    <Typography variant='h6'>CoreUI for</Typography>
                    <Typography variant='h6'>React.js</Typography>
                    <Typography color='red' variant='h6'>CoreUI for Vue.js</Typography>
                </Box>
            </Box>
            <Box  width='25vw'>
                <Typography color='rgba(255,255,0,1)' variant='h4' gutterBottom>Github</Typography>
                {
                    github?.map((item)=>{
                        return <Typography variant='h6' key={item.id}>{item.name}</Typography>
                    })
                }
            </Box>
            <Box width='25vw'>
                <Typography color='rgba(255,255,0,1)' variant='h4'gutterBottom>About Us</Typography>
                <Typography variant='h6'>Blog</Typography>
                <Typography variant='h6'>Hire Us</Typography>
                <Typography color='red' variant='h6'>Sponsors & Backers</Typography>
                <Typography variant='h6'>Cookie Policy</Typography>
                <Typography variant='h6'>Privacy Policy</Typography>
            </Box>
        </Box>
    )
}

export default Footer
