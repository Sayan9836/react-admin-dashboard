
import { Box, Typography } from '@mui/material'
import React from 'react'
import { components,forms,helpers,utilities } from '../../Data'
import './Features.css'
const Features = () => {
    return (
        <Box Width="100vw"  sx={{display:'flex',flexDirection:"column",padding:"6rem",backgroundColor:'rgba(195, 191, 191,0.2)'}}>
         
            <Typography align='center' variant='h4'>Ready to use and customizable UI components for </Typography>
            <Typography  align='center'  variant='h5'>Create data-rich responsive web apps, and speed up development time by up to 50%</Typography>
           
            <Box width='100%' className="features" sx={{display:"flex",justifyContent:'space-around',mt:"4rem"}}>
                <div className="firstSet">
                    <Typography variant='h5' color="orange">Components</Typography>
                    {
                       components?.map((item)=>{
                            return <Typography key={item.id} variant='h6'>{item.name}</Typography>
                        })
                    }
                </div>
                <div className="firstSet">
                  <Typography variant='h5' color="orange">Components</Typography>
                    {
                       forms?.map((item)=>{
                            return <Typography key={item.id} variant='h6'>{item.name}</Typography>
                        })
                    }

                </div>
                <div className="secondSet">
                 <Typography variant='h5' color="orange">Components</Typography>
                    {
                       helpers?.map((item)=>{
                            return <Typography key={item.id} variant='h6'>{item.name}</Typography>
                        })
                    }
                </div>
                <div className="secondSet">
                 <Typography variant='h5' color="orange">Components</Typography>
                    {
                       utilities?.map((item)=>{
                            return <Typography key={item.id} variant='h6'>{item.name}</Typography>
                        })
                    }

                </div>
            </Box>
        </Box>
    )
}

export default Features
