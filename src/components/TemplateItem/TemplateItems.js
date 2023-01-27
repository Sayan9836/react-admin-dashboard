import { Button, Card, CardActions, CardHeader, CardMedia } from '@mui/material'

import React from 'react'

const TemplateItems = ({item,isTheme}) => {
  return (
    isTheme ? <Card sx={{ width:{lg:'25vw',xs:'75vw'},height:'60vh' }}>
    <CardHeader
      title={item.title}
      subheader={item.subtitle}
    />
    <CardMedia
    
      component="img"
      height="310"
      image={item.img}
      alt="Paella dish"
    />
      
      <CardActions width='100%' height='100%'>
      <Button sx={{width:'100%', height:'100%'}} variant='contained' >Welcome</Button>
      </CardActions>
      
    
  </Card>
    :
    <Card sx={{width:{lg:'25vw',xs:'75vw'},height:'40vh' }}>
      <CardHeader
        title={item.title}
      />
      <CardMedia
      sx={{padding:2, marginRight:2}}
        component="img"
        height="240"
        image={item.img}
        alt="Paella dish"
      />
    </Card>
  )
}

export default TemplateItems
