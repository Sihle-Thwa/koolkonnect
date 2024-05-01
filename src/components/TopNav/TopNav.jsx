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

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link href="/" className="nav-logo"
                    sx={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: 'Larger',
                        fontFamily: 'sans-serif',

                    }}>
                    KoolKonnect
                </Link>
                <nav className={`nav-menu ${expand ? 'active' : ''}`}>
                    <Link href="/" className="nav-links nav-item active"
                        sx={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                        Home
                    </Link>
                    <Link href="/about" className="nav-links nav-item"
                        sx={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                        About
                    </Link>
                    <Link href="/service" className="nav-links nav-item"
                        sx={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                        Service
                    </Link>
                    <Link href="/contact" className="nav-links nav-item"
                        sx={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                        Contact
                    </Link>
                </nav>
                <div className="nav-icon" onClick={handleExpand}
                >
                    <div className="icon">
                        {expand ? <CloseIcon sx={{ color: 'white' }} />
                            :
                            <MenuIcon color='white' sx={{ color: 'white' }} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;