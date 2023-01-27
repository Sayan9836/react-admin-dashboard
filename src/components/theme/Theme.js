import { Box, Typography } from '@mui/material'
import React from 'react'
import { Themes } from '../../Data'
import TemplateItems from '../TemplateItem/TemplateItems'
import './Theme.css'
const Theme = () => {
  return (
    <Box width='100vw' sx={{backgroundColor:'rgba(195, 191, 191,0.2)', border: '0.1px solid white',}}>
      <Typography variant='h3' marginLeft="4rem" marginTop="2rem" padding="1rem">Available React Themes</Typography>
      <Typography ml='4rem' mb='4rem' variant='h5' maxWidth="80vw">Learn more about dedicated versions for Angular, Bootstrap, and Vue framework.</Typography>
      <Box gap='6rem' justifyContent='center' display='flex' flexWrap="wrap" m='2rem'>
        {
          Themes.map((item) => {
            return <TemplateItems item={item} key={item.id} isTheme />
          })
        }
        </Box>
    
    </Box>
  )
}

export default Theme
