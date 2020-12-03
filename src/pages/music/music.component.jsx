import React from 'react';
import CoverArt1 from '../../assets/ucRemixCoverArt.jpg';
import CoverArt2 from '../../assets/SandboxCoverArt.jpg';
import CoverArt3 from '../../assets/atreides final FRONT.png';

import './music.styles.scss';

const MusicPage = () => (
    <div className='musicContainer'>
        <div className='titleContainer'>
            <strong>MUSIC</strong>
            <hr />
        </div>
        <div className='music'>
            <div className='coverArt'>
                return <img src={CoverArt1} alt='Cover Art' class='first' />;
            </div>
            <div className='coverArt'>
                return <img src={CoverArt2} alt='Cover Art' class='second' />;
            </div>
            <div className='coverArt'>
                return <img src={CoverArt3} alt='Cover Art' class='third' />;
            </div>
        </div>
    </div>
)

export default MusicPage;