import React from 'react';
import CoverArt1 from '../../assets/ucRemixCoverArt.jpg';
import CoverArt2 from '../../assets/SandboxCoverArt.jpg';
import CoverArt3 from '../../assets/atreides final FRONT.png';

import './music.styles.scss';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';

class MusicPage extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            modalTitle: '',
            coverArt: '',
            infoContent: ''
        }
    }

    defaultModal() {
        this.setState({
            show: false,
            modalTitle: '',
            coverArt: '',
            infoContent: ''
        })
    }

    handleModal1() {
        this.setState({
            show: !this.state.show,
            modalTitle: 'Under Control Remix',
            modalCoverArt: CoverArt1,
            infoContent:
                <Button
                    size='lg'
                    className='modalButton'>
                    <a href="https://soundcloud.com/blkgoldmusic/under-control-blkgold-remix"
                        rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faSoundcloud} />
                    </a>
                </Button>,
        })
    }

    handleModal2() {
        this.setState({
            show: !this.state.show,
            modalTitle: 'Sandbox',
            modalCoverArt: CoverArt2,
            infoContent: ''
        })
    }

    handleModal3() {
        this.setState({
            show: !this.state.show,
            modalTitle: 'JRNY',
            modalCoverArt: CoverArt3,
            infoContent: ''
        })
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
                        <Col onClick={() => { this.handleModal1() }} sm={12} md={4} className='coverArt'>
                            <img src={CoverArt1} alt='Cover Art' />;
                        </Col>
                        <Col onClick={() => { this.handleModal2() }} sm={12} md={4} className='coverArt'>
                            <img src={CoverArt2} alt='Cover Art' />;
                        </Col>
                        <Col onClick={() => { this.handleModal3() }} sm={12} md={4} className='coverArt'>
                            <img src={CoverArt3} alt='Cover Art' />;
                        </Col>
                    </Row>
                </Container>

                {/* Modal */}
                <Modal className='my-modal' show={this.state.show} size='lg' centered>
                    <Modal.Header>
                        <h5 ref='header text'>{this.state.modalTitle}</h5>
                        <Button className='timesFA' onClick={() => { this.defaultModal() }}>
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </Modal.Header>
                    <Modal.Body className='modalBody'>
                        <img src={this.state.modalCoverArt} className='img-fluid' alt='Cover Art' />
                    </Modal.Body>
                    <Modal.Footer className='modalFooter'>
                        <p ref='downloadLinks'>{this.state.infoContent}</p>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

export default MusicPage;