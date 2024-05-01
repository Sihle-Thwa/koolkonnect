import './contact.css'
import GoogleMapReact from 'google-map-react';
import { Loader } from "@googlemaps/js-api-loader";
import PersonIcon from '@mui/icons-material/Person';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import EmailIcon from '@mui/icons-material/Email';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TextField from '@mui/material/TextField';


function Contact() {

    const defaultProps = {
        center: {
            lat: 26.0910,
            lng: 28.0855,
        },
        zoom: 11
    };

    return (
        <div className='contact-container'>
            <section className='contact-heading'>
                <div className='contact-title'>
                    <h1>Contact Us</h1>
                    <p>Ready to take your social media
                        presence to the next level? Get in
                        touch with us today to schedule a consultation or inquire about
                        our services. Simply fill out the form below, and we'll be in
                        touch shortly!</p>
                </div>
            </section>

            <section className='contact-side'>
                <div className='contact-form'>
                    <h5>Konnect with us</h5>
                    <form action='#'>
                        <label>
                            <TextField
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </label>
                        <label>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </label>
                        <label>
                            <TextField
                                fullWidth
                                id="phone "
                                label="Phone"
                                name="lastName"
                                autoComplete=""
                            />
                        </label>
                        <label>
                            <TextField
                                required
                                fullWidth
                                id="message"
                                label="Message"
                                name="message"
                                autoComplete=""

                            />
                        </label>
                        <button className='form field button' value='Send'
                            type='submit'>Connect Us</button>

                    </form>
                </div>
                <div className='Map' style={{
                    height: '50vh',
                    width: '100%'
                }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: '' }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    />
                </div>

            </section>
        </div>
    )
}

export default Contact;