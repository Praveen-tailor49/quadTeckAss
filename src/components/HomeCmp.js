import React, { useState, useEffect } from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const HomeCmp = () => {

    const [allTvData, setAllTvData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.tvmaze.com/search/shows?q=all", requestOptions)
            .then(response => response.json())
            .then(result => {
                setAllTvData(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    const getvalue = (val) => {
        setSearch(val)
    }

    const postData = (val) =>{
        localStorage.setItem('movie', JSON.stringify(val))
      }

    return (
        <>
           
           <NavBar getvalue={getvalue}/>

            {/* Card */}
            <Container>
                <Row>
                    {
                        allTvData.filter((val) => {
                            if (search === "") {
                                return val
                            } else if (val.show.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                                return val
                            }
                        }).map((val, index) => (
                    // console.log(val)
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }} key={index}>
                        <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s' }} >
                            <Card.Img variant="top" src={val.show.image.medium} style={{ height: '20rem' }} />
                            <Card.Body>
                                <Card.Title>{val.show.name}</Card.Title>
                                <Card.Text>
                                Language:-{val.show.language}
                                </Card.Text>
                                <Link to='/summary'>
                                    <Button variant="primary" onClick={()=>postData(val)}>Read More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                    )
                }
                </Row>
            </Container>
        </>
    )
}

export default HomeCmp