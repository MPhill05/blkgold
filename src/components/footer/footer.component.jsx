import React from 'react';

import './footer.styles.scss';

const Footer = () => (
    <div className='footer'>
        <ol className='social-container'>
            <li><a href='' ></a></li>
        </ol>
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

export default Footer;