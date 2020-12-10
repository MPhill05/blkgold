import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/blkgoldLogo.svg';
import { Navbar, Nav } from 'react-bootstrap';

import './header.styles.scss';

const Header = () => (
    <Navbar expand='lg' className='color-nav' variant='dark' fixed='top'>
        <Navbar.Brand>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav.Link className='options'>
                <Link className='option' to='/music'>
                    Music
            </Link>
            </Nav.Link>
            <Nav.Link className='options'>
                <Link className='option' to='/store'>
                    Store
            </Link>
            </Nav.Link>
            <Nav.Link className='options'>
                <Link className='option' to='/tour'>
                    Tour
            </Link>
            </Nav.Link>
            <Nav.Link className='options'>
                <Link className='option' to='/contact'>
                    Contact
            </Link>
            </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
)

/* <div className='header container-fluid'>
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
</div> */


export default Header;