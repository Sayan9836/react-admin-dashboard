import { Abc, AppBlocking, Apple, BrandingWatermark, BuildCircle, BuildSharp, CalendarMonthSharp, CallToActionSharp, ContactPhoneSharp, DeviceHubSharp, EMobiledataSharp, Facebook, FormatBold } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'

import React from 'react'
const Client = () => {
    const arr=[1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
  return (
    
    <Card sx={{padding:"6rem",backgroundColor:'rgba(0,0,0,0.6)',color:'whitesmoke', width:'100vw'}}>
     <Typography align='center' variant='h2'>You are in good company.</Typography>
     <Typography mt='1rem' align='center' variant='h5'>CoreUI and CoreUI based templates power thousands of apps at some of the smartest companies around the world.</Typography>
       <Typography mt='2rem' align='center' variant='h3'>Our Clients:</Typography> 

       <CardContent sx={{display:"flex",flexWrap:'wrap',justifyContent:'center'}}>
        {/* {
            arr.map((a)=>{
                return <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
                <Apple  sx={{fontSize:"7vw"}}/>
                </div>
            })
        } */}
             <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <Apple  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <Facebook  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <FormatBold  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <Abc  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <AppBlocking  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <BrandingWatermark  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <BuildSharp  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <CalendarMonthSharp  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <CallToActionSharp  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <ContactPhoneSharp  sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <DeviceHubSharp sx={{fontSize:"7vw"}}/>
              </div>
              <div style={{ display:'flex',width:"15vw", height:'20vh',backgroundColor:'lightgray',margin:'1rem', alignItems:'center',justifyContent:'center', borderRadius:'1rem',backgroundColor:'black',}}>
               <EMobiledataSharp  sx={{fontSize:"7vw"}}/>
              </div>

         
       </CardContent>
    </Card>
   
  )
}

export default Client
