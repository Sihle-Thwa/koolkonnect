import React from 'react';
import './services.css';
import { Card, CardContent, Typography } from '@mui/material';

function Services() {
    return (
        <div className='service-wrapper'>
            <div className='service-header'>
                Services
            </div>
            <div className='service-info'>
                Why You Should Choose KoolKonnect
            </div>

            <div className='service-cards'>
                <Card className='service-card'>
                    <Typography variant='h4' component='h2' gutterBottom>
                    </Typography>
                    <CardContent>
                        <Typography variant='h5' component='h3' gutterBottom>
                            Social Media Strategy Development
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Craft customized social media strategies tailored to your business objectives and target audience.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='service-card'>
                    <Typography variant='h4' component='h2' gutterBottom>
                    </Typography>
                    <CardContent>
                        <Typography variant='h5' component='h3' gutterBottom>
                            Content Creation
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Produce high-quality, engaging content, including graphics, videos, and copywriting, optimized for each social media platform.                    </Typography>
                    </CardContent>
                </Card>
                <Card className='service-card'>
                    <Typography variant='h4' component='h2' gutterBottom>
                    </Typography>
                    <CardContent>
                        <Typography variant='h5' component='h3' gutterBottom>
                            Community Management
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Foster meaningful connections with your audience through proactive engagement and timely responses.                    </Typography>
                    </CardContent>
                </Card>
                <Card className='service-card'>
                    <Typography variant='h4' component='h2' gutterBottom>
                    </Typography>
                    <CardContent>
                        <Typography variant='h5' component='h3' gutterBottom>
                            Paid Advertising Campaigns
                        </Typography>
                        <Typography variant='body1' color='textSecondary'>
                            Design and execute targeted advertising campaigns to expand your reach and drive conversions.                    </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

export default Services;