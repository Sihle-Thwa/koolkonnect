import React from 'react';
import './about.css';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { PiStrategy } from "react-icons/pi";
import { IoIosCreate } from "react-icons/io";
import { TbBuildingCommunity } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";



function About() {
    return (
        <div id='header' className='about-wrapper'>
            <div className='about-header'>
                <h1>About Us </h1>
            </div>
            <div className='about-info'>
                <h3>Why You Should Choose KoolKonnect</h3>
            </div>

            <div className='about-cards'>
                <Card className='about-card'>
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <PiStrategy size={30} color='#416dea' />
                        </Box>
                        <Typography variant='h5' component='h3' gutterBottom>
                            Social Media Strategy Development
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Craft customized social media strategies tailored to your business objectives and target audience.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='about-card'>
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <IoIosCreate size={30} color='#416dea' />
                        </Box>
                        <Typography variant='h5' component='h3' gutterBottom>
                            Content Creation
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Produce high-quality, engaging content, including graphics, videos, and copywriting, optimized for each social media platform.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='about-card'>
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TbBuildingCommunity size={30} color='#416dea' />
                        </Box>
                        <Typography variant='h5' component='h3' gutterBottom>
                            Community Management
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Foster meaningful connections with your audience through proactive engagement and timely responses.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='about-card'>
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <RiAdvertisementFill size={30} color='#416dea' />
                        </Box>
                        <Typography variant='h5' component='h3' gutterBottom>
                            Paid Advertising Campaigns
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Design and execute targeted advertising campaigns to expand your reach and drive conversions.
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

export default About;