import React from 'react'
import { Navbar, Container, Form, FormControl } from 'react-bootstrap';
import { RiSlideshow3Fill } from 'react-icons/ri';

const NavBar = ({getvalue}) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><RiSlideshow3Fill /></Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => getvalue(e.target.value)}
                        />
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar