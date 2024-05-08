import React from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import './topnav.css';

function TopNav() {
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link href="/#header" className="nav-logo"
                    onClick={() => scrollToSection('header')}
                    sx={{

                        textDecoration: 'none',
                        fontSize: 'Larger',
                        fontFamily: 'sans-serif',

                    }}>
                    KoolKonnect
                </Link>
                <nav className={`nav-menu ${expand ? 'active' : ''}`}>
                    <Link href="/#header" className="nav-links nav-item active"
                        onClick={() => scrollToSection('header')}
                        sx={{

                            textDecoration: 'none'
                        }}>
                        Home
                    </Link>
                    <Link href="/#about" className="nav-links nav-item"
                        onClick={() => scrollToSection('about')}
                        sx={{

                            textDecoration: 'none'
                        }}>
                        About
                    </Link>
                    <Link href="/#product" className="nav-links nav-item"
                        onClick={() => scrollToSection('product')}
                        sx={{

                            textDecoration: 'none'
                        }}>
                        Products
                    </Link>
                    <Link href="/#contact" className="nav-links nav-item"
                        onClick={() => scrollToSection('contact')}
                        sx={{
                            textDecoration: 'none'
                        }}>
                        Contact
                    </Link>
                </nav>
                <div className="nav-icon" onClick={handleExpand}
                >
                    <div className="icon">
                        {expand ? <CloseIcon />
                            :
                            <MenuIcon />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;