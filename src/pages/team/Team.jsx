import './team.css'
import teamImg from './team.jpg'
import { CardMedia } from '@mui/material'

function Team() {
    return (
        <div className='about-us-container'>
            <div className='about-us-content'>
                <h1>Introduction</h1>
                <p>
                    At KoolKonnect, we're passionate about helping businesses thrive in the digital age.
                    With a team of experienced professionals, we combine creativity, strategy, and
                    innovation to deliver results that exceed expectations.
                </p>
                <h1>Mission</h1>
                <p>Our mission is to empower businesses of all sizes
                    to harness the power of social media marketing and unlock their full potential online.
                </p>
                <div className='about-us-image-container'>
                    <CardMedia
                        className='about-us-image'
                        component='img'
                        image={teamImg}
                        alt='Our Team'
                    />
                    <p>Meet the dedicated individuals behind KoolKonnect
                        who bring a wealth of expertise in social media management, marketing, design, and analytics.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team