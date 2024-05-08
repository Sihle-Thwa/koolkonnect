import './footer.css'
import { Link } from '@mui/material'

function Footer() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <div className='list'>
                        <Link href="/#about" className='list-item'
                            onClick={() => scrollToSection('about')}
                        >
                            about us
                        </Link>
                        <Link href="/#service" className='list-item'
                            onClick={() => scrollToSection('service')}
                        >
                            services
                        </Link>
                        <Link href="/#contact" className='list-item'
                            onClick={() => scrollToSection('contact')}
                        >
                            contact us
                        </Link>
                    </div>
                    <h5>Site made by Siphesihle B. Mthethwa</h5>
                </div>
                <div className='footer-right'>
                    <h3>Get in touch</h3>
                    <h4>koolkonnect@info.co.za</h4>
                    <h5>+27 61-234-4589</h5>
                    <p>© KoolKonnect Copyright 2024</p>
                </div>


            </div>
        </div>
    )
}
export default Footer;