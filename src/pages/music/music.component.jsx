import React from 'react';
import CoverArt1 from '../../assets/ucRemixCoverArt.jpg';
import CoverArt2 from '../../assets/SandboxCoverArt.jpg';
import CoverArt3 from '../../assets/atreides final FRONT.png';

import './music.styles.scss';
import { Container, Col, Row } from 'react-bootstrap';


const MusicPage = () => (
    <div className='musicContainer'>
        <div className='titleContainer'>
            <strong>MUSIC</strong>
            <hr />
        </div>
        <Container fluid className='music'>
            <Row>
                <Col sm={12} md={4} className='coverArt'>
                    <img src={CoverArt1} alt='Cover Art' class='first' />;
            </Col>
                <Col sm={12} md={4} className='coverArt'>
                    <img src={CoverArt2} alt='Cover Art' class='second' />;
            </Col>
                <Col sm={12} md={4} className='coverArt'>
                    <img src={CoverArt3} alt='Cover Art' class='third' />;
            </Col>
            </Row>
        </Container>
    </div>
)

export default MusicPage;