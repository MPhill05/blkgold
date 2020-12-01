import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.styles.scss';
import { faApple, faBandcamp, faDiscord, faFacebook, faInstagram, faSoundcloud, faSpotify, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div className='footer'>
        <ul className='social-container'>
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
    </div>
)

export default Footer;