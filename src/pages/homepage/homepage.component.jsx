import React from 'react';
import ReactPlayer from 'react-player';

import './homepage.styles.scss';
import { Container } from 'react-bootstrap';

const HomePage = () => (
    <Container fluid sm={12} md={8} lg={8} className='homeContainer'>
        <ReactPlayer
            className='player'
            url='https://soundcloud.com/blkgoldmusic/under-control-blkgold-remix'
            width='80%'
            height='80%'
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