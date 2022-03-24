import React, { useState } from 'react'
import { Card, Row, Col, Navbar, Container, Button, Modal } from 'react-bootstrap';
import { RiSlideshow3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Summary = () => {

    const [showMovie] = useState(JSON.parse(localStorage.getItem('movie')))

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><RiSlideshow3Fill /></Navbar.Brand>
                    <Link to='/'>
                        <Button>Back</Button>
                    </Link>
                </Container>
            </Navbar>
            <Container>
                <Row style={{ padding: '30px' }}>
                    <Col>
                        <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }} >
                            <Card.Img variant="top" src={showMovie.show.image.original} style={{ height: '20rem' }} />
                        </Card>
                        <Button style={{ margin: '30px' }} onClick={handleShow}>Book Ticket</Button>
                    </Col>
                    <Col>
                        <h6>{showMovie.show.name}</h6>
                        {showMovie.show.summary}
                        <h4>Language :- <span style={{ color: 'red' }}>
                            {showMovie.show.language}
                        </span>
                        </h4>
                        <h4>Rating :- <span style={{ color: 'red' }}>
                            {showMovie.show.rating.average}
                        </span>
                        </h4>
                        <h4>Schedule :- <span style={{ color: 'red' }}>
                            {showMovie.show.schedule.days} {showMovie.show.schedule.time}
                        </span>
                        </h4>
                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ticket Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Movie name :- {showMovie.show.name} </Modal.Body>
                    <Modal.Body>
                        <h4>Language :- <span style={{ color: 'red' }}>
                            {showMovie.show.language}
                        </span>
                        </h4>
                    </Modal.Body>
                    <Modal.Body>
                        <h4>Schedule :- <span style={{ color: 'red' }}>
                            {showMovie.show.schedule.days} {showMovie.show.schedule.time}
                        </span>
                        </h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

export default Summary