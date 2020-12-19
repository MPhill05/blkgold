import React from 'react';
import CoverArt1 from '../../assets/ucRemixCoverArt.jpg';
import CoverArt2 from '../../assets/SandboxCoverArt.jpg';
import CoverArt3 from '../../assets/atreides final FRONT.png';

import './music.styles.scss';
import { Container, Col, Row, Modal } from 'react-bootstrap';

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

    handleModal1() {
        this.setState({
            show: !this.state.show,
            modalTitle: 'Under Control Remix',
            modalCoverArt: CoverArt1,
            infoContent: ''
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
                <Modal className='my-modal' show={this.state.show} size='lg' centered>
                    <Modal.Header closeButton onClick={ this.setState.show }>
                        <h5 ref='header text'>{this.state.modalTitle}</h5>
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