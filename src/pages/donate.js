import React, { useEffect, useCallback } from 'react';
import { Form, Navbar, Container, Button, Row, Col } from "react-bootstrap";
import { IoIosArrowDroprightCircle, IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { getBeneficiaries } from "../_actions/beneficiary";
import { getCategories } from "../_actions/category";
import { API, setAuthToken } from "../config/api";

import Header from '../components/header'
import '../styles/donate.css';
import '../styles/confirm.css';
import '../styles/header.css';

const Donate = () => {
    const data = useSelector(state => state.user.data);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);

    const beneficiary = useSelector(state => state.beneficiary.data);
    const benefitLoading = useSelector(state => state.beneficiary.loading);
    const benefitError = useSelector(state => state.beneficiary.error);

    const category = useSelector(state => state.category.data);
    const categoryLoading = useSelector(state => state.category.loading);
    const categoryError = useSelector(state => state.category.error);

    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(getBeneficiaries());
        dispatch(getCategories());
    }, [dispatch]);
    
    useEffect(() => {
        initFetch();
    }, [initFetch]);

    const [location, setLocation] = React.useState("Donate");
    const [amount, setAmount] = React.useState(0);
    const [timeline, setTimeline] = React.useState(1);
    const [name, setName] = React.useState(null);
    const [historyOK, setHistoryOK] = React.useState(false);

    var total = amount * timeline;

    if (name !== null)
        var [id, firstName, lastName] = name.split("|");

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

    let benefitList;
    let categoryList;

    if (!benefitLoading && !benefitError && beneficiary) {
        benefitList = beneficiary.beneficiaries.map((item, index) => (
            <div key={index}>
                <Form.Control type="radio" name="radio4" id={item.id} value={item.id + "|" + item.firstName + "|" + item.lastName} onClick={handleNameChange}/><Form.Label htmlFor={item.id} className="label-2">
                    <img src={ process.env.PUBLIC_URL + `../images/Profile.png` } alt="" className="label-pic"></img>
                    <p className="label-name">{item.firstName + " " + item.lastName}</p>
                    <p className="label-status">Lansia</p>
                </Form.Label>
            </div>
        ))
    }

    if (!categoryLoading && !categoryError && category) {
        categoryList = category.categories.map((item, index) => (
            <div key={index}>
                <Form.Control type="radio" name="radio1" id={item.id} value={item.name}/><Form.Label htmlFor={item.id} className="label-1">{item.name}</Form.Label>
            </div>
        ))
    }

    const createTransaction = async (event) => {
        try {
            event.preventDefault();
            const token = localStorage.getItem('userToken');
            setAuthToken(token);
            const newTransaction = await API({
                method: 'post',
                data: {
                    query: `
                        mutation {
                            createTransaction(
                                input: {
                                    amount: ${amount}
                                    timeline: ${timeline}
                                    total: ${total}
                                    beneficiaryId: "${id}"
                                } 
                            ){
                                id
                                amount
                                timeline
                                total
                                beneficiary {
                                    id
                                    firstName
                                    lastName
                                }
                            }
                        }
                    `
                }
            })
            console.log(newTransaction.data.data)
            setHistoryOK(true)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            { historyOK &&
                <Redirect to="/history"/>
            }
            { location === "Confirm" &&
                <div className="confirm-bg">
                    <Container fluid className="padding-header">
                        <Navbar bg="white" fixed="top" className="justify-content-between navbar-header">   
                            <IoIosArrowBack onClick={hideConfirm} className="home-icons"/>          
                            <h1 className="header-text">Proof of Transfer</h1>
                            <div className="home-icons"/>
                        </Navbar>
                    </Container>

                    { (!loading && !error) && data.user &&
                        <div className="confirm-white-bg">
                            <br/>
                            <img src={ process.env.PUBLIC_URL + `../images/Proof.png` } alt="" className="confirm-pic"></img>
                            <br/><br/>
                            <p className="confirm-details">Virtual Account</p>
                            <p className="confirm-name">0001-2846-1819-2910</p>
                            <p className="confirm-details">Name Holder</p>
                            <p className="confirm-name">{data.user.firstName} {data.user.lastName}</p>
                        </div>
                    }
        
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
                            <Button variant="danger" type="submit" onClick={createTransaction} block>
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
                                { (!categoryLoading && !categoryError) && categoryList }
                            </Form.Group>
                            <br/>
                            <Form.Group className="user cf col">
                                { (!benefitLoading && !benefitError) && benefitList }
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