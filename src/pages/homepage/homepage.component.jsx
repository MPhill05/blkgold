import React from 'react';
import ReactPlayer from 'react-player';

import './homepage.styles.scss';
import { Container } from 'react-bootstrap';

const HomePage = () => (
    <Container fluid className='homeContainer'>
        <ReactPlayer
            className='player'
            url='https://soundcloud.com/blkgoldmusic/under-control-blkgold-remix'
            width='100%'
            height='100%'
        />
        <div className='trackInfo'>
            <h3>
                <a
                    href='https://www.toneden.io/blkgoldmusic/post/under-control-blkgold-remix'
                    rel="noopener noreferrer"
                    target='_blank'
                >Free Download</a>
            </h3>
        </div>
    </Container>
)

export default HomePage;