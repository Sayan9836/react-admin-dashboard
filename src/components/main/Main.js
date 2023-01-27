import React from 'react'
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import './Main.css'
import { coverphoto } from '../../Data';
import { useState } from 'react';
import logo from '../../assests/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Main = () => {
 
    const [click,SetClick]=useState(false)
    return (
        <div className='main'>

            <Box className='navbar'  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem", width: "100vw" }} component='div'>
                {/* <Typography color="blue" variant='h3'></Typography> */}
                 <div className='logo'>
                    <img style={{width:'10vw',height:'10vh'}} src={logo} alt="" />
                 </div>
                <Box className={click?'list active':'list'} sx={{ display: "flex", alignItems: "center", gap:{lg:'4rem',xs:'2rem'}}}  component='div'>
                    <Typography variant='h6'>Docs</Typography>
                    <Typography variant='h6' >Pricing</Typography>
                    <Typography className="menu" color='blue' variant='h6'>
                      <div className="dropdown-btn">Product</div>
                      <ul className='dropdown'>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product1</a></li>
                     </ul>
                     </Typography>
                    {/* </li> */}
                    <Typography className="menu" color='blue' variant='h6' >
                    <div className="dropdown-btn">support</div>
                      <ul className='dropdown'>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product1</a></li>
                     </ul>
                    </Typography>
                    <Typography variant='h6'>Blog</Typography>
                </Box>

                <div className='contacts'>

                    <Button size='small' variant="outlined" sx={{ marginRight: "1rem", padding: "0.5rem", borderColor:'whitesmoke', color:'whitesmoke'  }}>Contact Sales</Button>
                    <Button size='small' variant='outlined' sx={{ padding: "0.5rem", borderColor:'whitesmoke', color:'whitesmoke' }}>Customer Services</Button>

                </div> 
                  
                  <div className='arrow' onClick={()=>SetClick(!click)}>
                    {
                        click?<FaTimes size={20} style={{color:'#fff'}}/>:<FaBars size={20} style={{color:'#fff'}}/>
                    }
                  </div>
            </Box>

            <div className='main-down' style={{ display: "flex", justifyContent: "space-between"}}>

                <div className="main-down-left" style={{width:'40vw',margin: "8rem 0 2.5rem 2.5rem"}}>

                    <div>
                        <Typography variant='h3' gutterBottom>React Dashboard Template</Typography>
                    </div>
                    <div>
                        <Typography variant='h6'>Develop modern, beautiful, and responsive applications in half the time with high-performing and easy-to-customize UI components to cover any requirement.<br />
                            <Typography variant='h5'> CoreUI PRO React Admin Template makes app development lightning fast.</Typography></Typography>
                    </div>
                    <div  style={{ display: "flex", marginTop: "2rem" }}>

                        <Button size='large' fullWidth variant="contained" sx={{ marginRight: "2rem", padding: "1rem",width:{xs:'10rem'} }}>Buy Now</Button>
                        <Button size='large' fullWidth variant='contained' sx={{ padding: "1rem", backgroundColor:'whitesmoke',color:'black',width:{xs:'10rem'}}}>Live Preview</Button>

                    </div>

                </div>
                <div className="poster"style={{width:'40vw', margin: "8rem 2.5rem 2.5rem 0"}}>
                    <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        transitionTime={3}
                        infiniteLoop={true}
                        showStatus={false}
                        // style={{width:{lg:'40vw',md:'60vw',xs:'80vw'}}}
                        
                    >
                        {
                            coverphoto?.map((cp) => {
                                return <div className='posterImage' key={cp.id}><img src={cp.img} alt="" /></div>
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Main
