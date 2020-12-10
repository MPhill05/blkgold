import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/blkgoldLogo.svg';
import { Navbar, Nav, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faApple, faBandcamp, faDiscord, faFacebook, faInstagram, faSoundcloud, faSpotify, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './header.styles.scss';

const Header = () => (
    <Navbar expand='lg' className='color-nav' variant='dark' fixed='top'>
        <Navbar.Brand>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon
                icon={faBars}
                color="#d4af37"
                size="1x"
            />
        </Navbar.Toggle>
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
            <Nav.Link>
                <Row>
                    <ul className='mobileSocials'>
                        <li><a href="https://open.spotify.com/artist/233z0IfLJLQZJwGeaZXvZR" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faSpotify} /></a></li>
                        <li><a href="https://music.apple.com/us/artist/blkgold/1497838952" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faApple} /></a></li>
                        <li><a href="https://soundcloud.com/blkgoldmusic" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faSoundcloud} /></a></li>
                        <li><a href="https://blkgold.bandcamp.com/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faBandcamp} /></a></li>
                        <li><a href="http://instagram.com/blkgoldmusic" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="http://twitter.com/blkgoldmusic" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="http://facebook.com/blkgoldmusic" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="http://twitch.tv/blkgoldtv" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitch} /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCHxIz4bqSJMknjlg6hjzS5Q" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        <li><a href="https://discord.gg/RAyGVw9k" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faDiscord} /></a></li>
                    </ul>
                </Row>
            </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
)

export default Header;