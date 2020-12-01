import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/blkgoldLogo.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/music'>
                Music
            </Link>
            <Link className='option' to='/store'>
                Store
            </Link>
            <Link className='option' to='/tour'>
                Tour
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
        </div>
    </div>
)

export default Header;