import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Templates } from '../../Data'
import TemplateItems from '../TemplateItem/TemplateItems'
import './Template.css'
const Template = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',backgroundColor:'rgba(0,0,0,0.05)',width:'100vw'}}>
      <Typography fontWeight='700'color='rgba(0,0,100,0.8)' variant='h3' marginLeft='4rem' marginTop="2rem" padding="1rem">Available React Themes</Typography>
      <Typography ml='4rem' mb='4rem' variant='h5' maxWidth='80vw' >Learn more about dedicated versions for Angular, Bootstrap, and Vue framework.</Typography>
      <Box gap='9rem' justifyContent='center' display='flex' flexWrap="wrap" mb='2rem'>
        {
          Templates.map((item) => {
            return <TemplateItems key={item.id} item={item} />
          })
        }
      </Box>
    </Box>

  )
}

export default Template
