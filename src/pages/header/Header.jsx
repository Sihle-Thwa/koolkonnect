import React from 'react';
import './header.css';

function Header() {
    return (
        <div className='header' >
            <div className='info'>
                <h1>Transform Your Social Presence with KoolKonnect</h1>
                <section className='content'>
                    <p>Welcome to KoolKonnect, where we specialize in crafting compelling social media strategies that elevate your brand and captivate your audience. Whether you're a startup or an established business,
                        we're here to help you thrive in the digital landscape.</p>
                </section>
                <button className='btn'>Contact Us</button>
            </div>
        </div>
    )
}

export default Header;