import { EventAvailable, FastForward, HelpCenter, MobileFriendly, SupportAgent } from '@mui/icons-material'
import { Card, CardHeader, List, ListItem, ListItemIcon, Typography } from '@mui/material'
import './Detail.css'
import React from 'react'
const Detail = () => {
  return (

    <Card sx={{width:'100vw'}}>
      <Typography align='center' mt='4rem' fontWeight='700' color='rgba(0,0,100,0.8)' variant='h4' sx={{width:{xs:'95vw'}}} >CoreUI PRO Admin Dashboard makes app development lightning fast</Typography>
      <CardHeader
        sx={{textAlign:'center',width:{xs:'95vw'}}}
        subheader="CoreUI delivers everything you need to build modern, beautiful, responsive apps."
      />
      <div className="details-data" style={{display:"flex",padding:"2rem"}}>
        <div className="details-data1" style={{maxWidth:'40vw', marginLeft: "2rem" }}>         
          <div>
            <List>
              <ListItem >
                <ListItemIcon>   
                  <FastForward fontSize='large' sx={{ color: "blue" }} />
                </ListItemIcon>  
                <Typography  variant='h5' gutterBottom > Reduce your time to market</Typography>
              </ListItem>
            </List>
            <Typography variant='h7'>Save thousands of development hours by using ready-made, reusable, and commonly used widgets and React UI components. Moreover, CoreUI PRO React Admin Dashboard Template is delivered with a ready-to-use environment, so you don't have to waste time configuring the project. All build scripts and tools are ready to use out of the box. With CoreUI Template you can start a new project in a minute!</Typography>
          </div>
          <div >
            <List>
              <ListItem >
                <ListItemIcon>
                 <EventAvailable fontSize='large' sx={{ color: "blue" }}/>
                </ListItemIcon>
                <Typography   variant='h5' gutterBottom>  Easy to use</Typography>
              </ListItem>
            </List>
            <Typography variant='h7'>Save thousands of development hours by using ready-made, reusable, and commonly used widgets and React UI components. Moreover, CoreUI PRO React Admin Dashboard Template is delivered with a ready-to-use environment, so you don't have to waste time configuring the project. All build scripts and tools are ready to use out of the box. With CoreUI Template you can start a new project in a minute!</Typography>
          </div>
          <div >
            <List>
              <ListItem >
                <ListItemIcon>
                 <SupportAgent fontSize='large' sx={{ color: "blue" }}/>
                </ListItemIcon>
                <Typography   variant='h5' gutterBottom>  Long Term support</Typography>
              </ListItem>
            </List>
            <Typography variant='h7'>Save thousands of development hours by using ready-made, reusable, and commonly used widgets and React UI components. Moreover, CoreUI PRO React Admin Dashboard Template is delivered with a ready-to-use environment, so you don't have to waste time configuring the project. All build scripts and tools are ready to use out of the box. With CoreUI Template you can start a new project in a minute!</Typography>
          </div>
        </div>
        <div className="details-data2" style={{ maxWidth: "40vw", marginLeft: "10rem" }}>
          <div>
            <List>
              <ListItem >
                <ListItemIcon>
                  <MobileFriendly fontSize='large' sx={{ color: "blue" }} />
                </ListItemIcon>
                <Typography   variant='h5' gutterBottom> Responsive, Mobile & Cross-Browser Compatibility</Typography>
              </ListItem>
            </List>
            <Typography variant='h7'>Save thousands of development hours by using ready-made, reusable, and commonly used widgets and React UI components. Moreover, CoreUI PRO React Admin Dashboard Template is delivered with a ready-to-use environment, so you don't have to waste time configuring the project. All build scripts and tools are ready to use out of the box. With CoreUI Template you can start a new project in a minute!</Typography>
          </div>
          <div>
            <List>
              <ListItem >
                <ListItemIcon>
                  <HelpCenter fontSize='large' sx={{ color: "blue" }}/>
                </ListItemIcon>
                <Typography   variant='h5' gutterBottom> Dedicated support</Typography>
              </ListItem>
            </List>
            <Typography variant='h7'>Save thousands of development hours by using ready-made, reusable, and commonly used widgets and React UI components. Moreover, CoreUI PRO React Admin Dashboard Template is delivered with a ready-to-use environment, so you don't have to waste time configuring the project. All build scripts and tools are ready to use out of the box. With CoreUI Template you can start a new project in a minute!</Typography>
          </div>
        </div>
      </div>
    </Card>

  )
}

export default Detail
