import { Padding, Star } from '@mui/icons-material'
import './About.css'
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, Grid, List, ListItem, ListItemIcon, ListItemText, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import OfflinePinTwoToneIcon from '@mui/icons-material/OfflinePinTwoTone';
import React from 'react'

const rows = [
    { name:"Bootstrap", 
      rating:"5.x"
    },
    { name:"React", 
      rating:"5.x"
    },
    
    { name:"CoreUI for React", 
      rating:"4.2"
    },
    
    { name:"CoreUI PRO for React", 
      rating:"4.2"
    },
    
    { name:"Version", 
      rating:"4.2"
    },
    
    { name:"Right-to-left", 
      rating:"Yes"
    },
    
    { name:"Released", 
      rating:"Aug 4, 2016"
    },
    { name:"Right-to-left", 
      rating:"Jun 28, 2022"
    },
    

];

const About = () => {
    return (
            <Card className="card" sx={{ Width: '100vw', display: 'flex',flexDirection:'row', justifyContent: 'space-between',mb:'0'}}>
                <div className="container1" style={{ Width: "40vw",marginLeft:'2rem' }}>
                    <div className="about">
                       <Typography fontWeight='700' color='rgba(0,0,100,0.8)' variant='h4' m='2rem 0 0 1.5rem'>About</Typography>
                        <CardContent>
                            <Typography >
                                <span style={{marginLeft:'1.4rem'}}>Learn more about our premium admin dashboard template</span><br />
                                <br />

                                Our React Admin Dashboard is the fastest way to build modern admin site or dashboard for any browser or device <br />
                                Bootstrap 5 & React Admin Template is constantly developed and maintained <br />by our team. The template is always optimized to load faster and deliver better user experience <Typography variant='h5'>Based on CoreUI PRO UI Components library</Typography> because we want to help you build profitable and scalable business. Our templates are designed by designers and coded by developers, so they offer great design and high quality clean code. We also use SASS preprocessor for CSS and Webpack (Angular, React.js, Vue.js version) for managing and automating the asset pipeline.<br />
                                Our premium admin dashboard helps you maximize your productivity. Our admin template allows you to accelerate you development process and save hundreds of dollars.
                            </Typography>
                        </CardContent>
                    </div>
                                  
                    <div className='features'>
                        <Typography fontWeight='700' color='rgba(0,0,100,0.8)' variant='h4' m='0 0 0 1.5rem'>Features</Typography>
                        <CardHeader
                            subheader="Learn more about our admin panel features."
                           sx={{marginLeft:'1.6rem'}} 
                        />
                        <CardContent >
                            <Grid>
                                <List >
                                    <ListItem>
                                        <ListItemIcon>
                                            <Star />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"

                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Star />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"

                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Star />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"

                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Star />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Single-line item"

                                        />
                                    </ListItem>



                                </List>

                            </Grid>
                        </CardContent>
                    </div>
                </div>
                <div className="container2" style={{ Width: "40vw", marginRight:"4rem"}}>
                    <div className="license-options">
                    <Typography fontWeight='700' color='rgba(0,0,100,0.8)' variant='h4' m='2rem 0 0 0'>License Options</Typography>
                        <CardHeader  subheader="View license details" />
                        <CardContent>
                            <FormControl>

                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <div style={{ display: "flex" }}>
                                        <FormControlLabel value="Standard" control={<Radio />} label="Standard" />
                                        <Typography variant='h4'>₹5,190</Typography>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <FormControlLabel value="Extended" control={<Radio />} label="Extended" />
                                        <Typography variant='h4'>₹8,000</Typography>
                                    </div>
                                </RadioGroup>
                            </FormControl>

                            <List >
                                <ListItem>
                                    <ListItemIcon>
                                        <OfflinePinTwoToneIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="1 year of free updates"

                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <OfflinePinTwoToneIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="6 months technical support"

                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <OfflinePinTwoToneIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="100% money-back guarantee"

                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <OfflinePinTwoToneIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Designed by CoreUI Core Team"

                                    />
                                </ListItem>
                            </List>

                        </CardContent>
                        <CardActions>
                            <Button size='large' fullWidth variant='contained'>Buy Template</Button>
                        </CardActions>
                        <CardActions>
                            <Button size='large' color='secondary' fullWidth variant='contained'>Get CoreUI Pro+Template</Button>
                        </CardActions>
                    </div>

                    <div className="details">
                        <Typography fontWeight='700' color='rgba(0,0,100,0.8)' padding='2rem 0 0 1rem' variant='h4'>Details</Typography>
                        <CardHeader
                            subheader="Project Specifications"
                        />
                        {/* <CardContent> */}
                        <TableContainer sx={{border:"1px dashed black",mb:'1rem'}}>
                            <Table >
                                <TableBody>
                                    {
                                        rows.map((row) => {
                                           return <TableRow >
                                                <TableCell component="th" scope='row'>{row.name}</TableCell>
                                                <TableCell align='right'>{row.rating}</TableCell>
                                            </TableRow>

                                        })
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </div>


            </Card>
        
    )
}

export default About
