import './footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <ul className='list'>
                        <li className='list-item'><a>about us</a></li>
                        <li className='list-item'><a>services</a></li>
                        <li className='list-item'><a>contact us</a></li>
                    </ul>
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