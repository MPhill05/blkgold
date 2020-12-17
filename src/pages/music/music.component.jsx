import React from 'react';
import CoverArt1 from '../../assets/ucRemixCoverArt.jpg';
import CoverArt2 from '../../assets/SandboxCoverArt.jpg';
import CoverArt3 from '../../assets/atreides final FRONT.png';

import './music.styles.scss';
import { Container, Col, Row, Button, Modal } from 'react-bootstrap';

class MusicPage extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div className='musicContainer'>
                <div className='titleContainer'>
                    <strong>MUSIC</strong>
                    <hr />
                </div>
                <Container fluid className='music'>
                    <Row>
                        <Col onClick={() => { this.handleModal() }} sm={12} md={4} className='coverArt'>
                            <img src={CoverArt1} alt='Cover Art' class='first' />;
                    <Modal show={this.state.show} >
                                <Modal.Header class='modalHeader1' closeButton>Under Control Remix</Modal.Header>
                                <Modal.Body className='modalBody1'>
                                    <img src={CoverArt1} alt='Cover Art' />
                                </Modal.Body>
                                <Modal.Footer className='modalFooter1'>
                                    <Button onClick={() => { this.handleModal() }}>
                                        Close
                            </Button>
                                </Modal.Footer>
                            </Modal>
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
    }

}

export default MusicPage;