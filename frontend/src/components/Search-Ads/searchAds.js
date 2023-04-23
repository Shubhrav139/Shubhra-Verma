import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const mainServerAppUrl = process.env.REACT_APP_BACKEND;

export default function SearchPage() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios
            .get(mainServerAppUrl + "/ads")
            .then((result) => {
                setAds(result.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    const searchAds = (data) => {
        axios
            .post(mainServerAppUrl + "/search-ads", { keyword: data.keyword })
            .then((result) => {
                setAds(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <Container>
            <h2>Search Ads</h2>
            <Row>
                <Col md={{ span: 2, offset: 5 }}>
                    <div>
                        <Formik
                            enableReinitialize={true}
                            validateOnMount={true}
                            validateOnChange={true}
                            validateOnBlur={true}
                            initialValues={{
                                keyword: ""
                            }}
                            onSubmit={(values) => {
                                searchAds(values)
                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-12">
                                            <Field
                                                type="text"
                                                name="keyword"
                                                placeholder="Enter Keyword"
                                                className={
                                                    "w-100 form-control" +
                                                    (errors.keyword && touched.keyword
                                                        ? " is-invalid"
                                                        : "")
                                                }
                                            />
                                            <ErrorMessage
                                                name="keyword"
                                                component="div"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 p-1">
                                        <Button
                                            type="search"
                                            value="search keyword"
                                            className="btn w-80"
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        />
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                {ads.map((ad, k) => (
                    <Col key={k} xs={10} md={4} lg={3}>
                        <Card>
                            <Card.Header as="h5">{ad.company.companyName}</Card.Header>
                            <Card.Img src={ad.imageUrl} style={{ width: '100%', height: '15vw', objectFit: 'fill' }} alt="image" />

                            <Card.Body>
                                <Card.Title>{ad.primaryText}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{ad.headline}</Card.Subtitle>
                                <Card.Text>{ad.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>



        </Container>
    );
}
