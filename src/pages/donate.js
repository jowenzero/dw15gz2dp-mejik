import React from 'react';
import { Form, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import { IoIosArrowDroprightCircle, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

import Header from '../components/header'
import '../styles/donate.css';
import '../styles/confirm.css';
import '../styles/header.css';

const Donate = () => {
    const [location, setLocation] = React.useState("Donate");
    const [amount, setAmount] = React.useState(0);
    const [timeline, setTimeline] = React.useState(1);
    const [name, setName] = React.useState(null);

    var total = amount * timeline;

    if (name !== null)
        var [firstName, lastName] = name.split(" ");

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    const handleTimelineChange = (event) => {
        setTimeline(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const showConfirm = () => {
        setLocation("Confirm");
    };
    const hideConfirm = () => {
        setLocation("Donate");
    };

    const formatNumber = (num) => {
        return Intl.NumberFormat('de-DE').format(num);
    }

    if (location === "Confirm" && name === null) {
        hideConfirm();
    }

    return (
        <>
            { location === "Confirm" &&
                <div className="confirm-bg">
                    <Container fluid className="padding-header">
                        <Navbar bg="white" fixed="top" className="justify-content-between navbar-header">   
                            <IoIosArrowBack onClick={hideConfirm} className="home-icons"/>          
                            <h1 className="header-text">Proof of Transfer</h1>
                            <div className="home-icons"/>
                        </Navbar>
                    </Container>

                    <div className="confirm-white-bg">
                        <br/>
                        <img src={ process.env.PUBLIC_URL + `../images/Proof.png` } alt="" className="confirm-pic"></img>
                        <br/><br/>
                        <p className="confirm-details">Virtual Account</p>
                        <p className="confirm-name">0001-2846-1819-2910</p>
                        <p className="confirm-details">Name Holder</p>
                        <p className="confirm-name">Ray Collins</p>
                    </div>
        
                    <Container fluid className="confirm-white-bg">
                        <p className="confirm-name-2">Bill Summary</p>
                        <Row>
                            <Col xs={2}>
                                <img src={ process.env.PUBLIC_URL + `../images/Profile.png` } alt="" className="confirm-bill-pic"></img>
                            </Col>
                            <Col xs={5}>
                                <p className="confirm-bill-name">{firstName} {lastName}</p>
                                <p className="confirm-bill-status">Lansia</p>
                            </Col>
                            <Col xs={1}>
                                <p className="confirm-bill-name color-grey">{timeline}X</p>
                            </Col>
                            <Col xs={4}>
                                <p className="confirm-amount">Rp.{formatNumber(amount)}</p>
                            </Col>
                        </Row>
                    </Container>
        
                    <Container fluid className="confirm-white-bg">
                        <Row>
                            <Col xs={4}>
                                <p className="confirm-total-text">Total</p>
                            </Col>
                            <Col xs={8}>
                                <p className="confirm-total">Rp.{formatNumber(total)}</p>
                            </Col>
                        </Row>
                    </Container>
        
                    <Form>
                        <div className="form-group files">
                            <input type="file" name="file"/>
                        </div>
                    </Form>
        
                    <Container fluid className="confirm-padding">
                        <Navbar bg="white" fixed="bottom" className="confirm-navbar flex-column">
                            <Button variant="danger" type="submit" as={Link} to="/history" block>
                                CONFIRMATION
                            </Button>
                        </Navbar>
                    </Container>
                </div>
            }

            { location === "Donate" &&
                <div className="area-color">
                    <div className="area-offset">
                        <Header location={location}/>
                        <br/>
                        <Form className="form cf">
                            <h1 className="donate-title">Donation Target</h1>
                            <Form.Group className="target cf col">
                                <Form.Control type="radio" name="radio1" id="All" value="All"/><Form.Label htmlFor="All" className="label-1">All</Form.Label>
                                <Form.Control type="radio" name="radio1" id="Panti Jompo" value="Panti Jompo"/><Form.Label htmlFor="Panti Jompo" className="label-1">Panti Jompo</Form.Label>
                                <Form.Control type="radio" name="radio1" id="Panti Asuhan" value="Panti Asuhan"/><Form.Label htmlFor="Panti Asuhan" className="label-1">Panti Asuhan</Form.Label>
                                <Form.Control type="radio" name="radio1" id="Janda" value="Janda"/><Form.Label htmlFor="Janda" className="label-1">Janda</Form.Label>
                            </Form.Group>
                            
                            <Form.Group className="user cf col">
                                <Form.Control type="radio" name="radio4" id="Nikmatul" value="Nikmatul" onClick={handleNameChange}/><Form.Label htmlFor="Nikmatul" className="label-2">
                                    <img src={ process.env.PUBLIC_URL + `../images/Profile.png` } alt="" className="label-pic"></img>
                                    <p className="label-name">Nikmatul</p>
                                    <p className="label-status">Lansia</p>
                                </Form.Label>
                                <Form.Control type="radio" name="radio4" id="Titi Kamal" value="Titi Kamal" onClick={handleNameChange}/><Form.Label htmlFor="Titi Kamal" className="label-2">
                                    <img src={ process.env.PUBLIC_URL + `../images/Profile.png` } alt="" className="label-pic"></img>
                                    <p className="label-name">Titi Kamal</p>
                                    <p className="label-status">Lansia</p>
                                </Form.Label>
                                <Form.Control type="radio" name="radio4" id="Anya Ronaldo" value="Anya Ronaldo" onClick={handleNameChange}/><Form.Label htmlFor="Anya Ronaldo" className="label-2">
                                    <img src={ process.env.PUBLIC_URL + `../images/Profile.png` } alt="" className="label-pic"></img>
                                    <p className="label-name">Anya Ronaldo</p>
                                    <p className="label-status">Lansia</p>
                                </Form.Label>
                                <Form.Control type="radio" name="radio4" id="Fatmawati" value="Fatmawati" onClick={handleNameChange}/><Form.Label htmlFor="Fatmawati" className="label-2">
                                    <img src={ process.env.PUBLIC_URL + `../images/Profile.png` } alt="" className="label-pic"></img>
                                    <p className="label-name">Fatmawati</p>
                                    <p className="label-status">Lansia</p>
                                </Form.Label>
                                <Form.Control type="radio" name="radio4" id="Nasikhin" value="Nasikhin" onClick={handleNameChange}/><Form.Label htmlFor="Nasikhin" className="label-2">
                                    <img src={ process.env.PUBLIC_URL + `../images/Profile.png` } alt="" className="label-pic"></img>
                                    <p className="label-name">Nasikhin</p>
                                    <p className="label-status">Lansia</p>
                                </Form.Label>
                                <Form.Control type="radio" name="radio4" id="See All" value="See All"/><Form.Label htmlFor="See All" className="label-2">
                                    <IoIosArrowDroprightCircle className="label-pic color-pink"/>
                                    <p className="label-name color-pink">See All</p>
                                </Form.Label>
                            </Form.Group>	
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <h1 className="donate-title">Donation Amount</h1>
                            <Form.Control type="number" className="donate-amount-form" required
                                name="amount"
                                value={amount}
                                onChange={handleAmountChange}
                            />
                            <br/>
                            <Form.Group className="amount cf col">
                                <Form.Control type="radio" name="radio2" id="100000" value="100000" onClick={handleAmountChange}/><Form.Label htmlFor="100000" className="label-1">Rp.100.000</Form.Label>
                                <Form.Control type="radio" name="radio2" id="300000" value="300000" onClick={handleAmountChange}/><Form.Label htmlFor="300000" className="label-1">Rp.300.000</Form.Label>
                                <Form.Control type="radio" name="radio2" id="500000" value="500000" onClick={handleAmountChange}/><Form.Label htmlFor="500000" className="label-1">Rp.500.000</Form.Label>
                            </Form.Group>	

                            <h1 className="donate-title">Timeline</h1>
                            <Form.Group className="timeline cf col">
                                <Form.Control type="radio" name="radio3" id="1" value="1" onClick={handleTimelineChange}/><Form.Label htmlFor="1" className="label-1">1X</Form.Label>
                                <Form.Control type="radio" name="radio3" id="2" value="2" onClick={handleTimelineChange}/><Form.Label htmlFor="2" className="label-1">2X</Form.Label>
                                <Form.Control type="radio" name="radio3" id="3" value="3" onClick={handleTimelineChange}/><Form.Label htmlFor="3" className="label-1">3X</Form.Label>
                                <Form.Control type="radio" name="radio3" id="4" value="4" onClick={handleTimelineChange}/><Form.Label htmlFor="4" className="label-1">4X</Form.Label>
                                <Form.Control type="radio" name="radio3" id="5" value="5" onClick={handleTimelineChange}/><Form.Label htmlFor="5" className="label-1">5X</Form.Label>
                            </Form.Group>	
                        </Form>
                    </div>

                    <Container fluid className="donate-padding">
                        <Navbar bg="white" fixed="bottom" className="donate-navbar flex-column">
                            <Row>
                                <Col xs={4}>
                                    <p className="donate-total-text">Total Donation</p>
                                </Col>
                                <Col xs={8}>
                                    <p className="donate-total">Rp.{formatNumber(total)}</p>
                                </Col>
                            </Row>
                            <Button variant="danger" type="submit" onClick={showConfirm} block>
                                DONATE NOW
                            </Button>
                        </Navbar>
                    </Container>
                </div>
            }
        </>
    );
}

export default Donate;