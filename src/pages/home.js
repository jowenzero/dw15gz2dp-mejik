import React from 'react';
import { Container, Button, Form } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import Logo from '../logos/logo-foundation.svg'

import Header from '../components/header'
import Navbar from '../components/navbar'

import Article from '../datas/article.json'
import ContentItem from '../components/content_item';

import '../styles/donate.css';
import '../styles/welcome.css';
import '../styles/login.css';

const Home = () => {
    const [location, setLocation] = React.useState("Welcome");
    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPass, setPassEmail] = React.useState("");
    const [user, setUser] = React.useState({});

    const handleLoginEmailChange = (event) => {
        setLoginEmail(event.target.value);
    };
    const handleLoginPassChange = (event) => {
        setPassEmail(event.target.value);
    };
    const handleUserChange = (event) => {
        const { data } = user;
        setUser({
            data: { ...data, [event.target.name]: event.target.value },
        });
    };

    const showWelcome = () => {
        localStorage.setItem('userLogin', 'false');
        setLocation("Welcome");
    };
    const showLogin1 = () => {
        localStorage.setItem('userLogin', 'false');
        setLocation("Login1");
    };
    const showLogin2 = () => {
        localStorage.setItem('userLogin', 'false');
        setLocation("Login2");
    };
    const showRegister = () => {
        localStorage.setItem('userLogin', 'false');
        setLocation("Register");
    };
    const showHome = () => {
        localStorage.setItem('userLogin', 'true');
        setLocation("Home");
    };

    const data = Article.map((item, index) => (
        <ContentItem item={item} key={index}/>
    ))

    if (localStorage.getItem('userLogin') === 'true' && location !== "Home") {
        showHome();
    }
    
    return (
        <>
            { location === "Register" && localStorage.getItem('userLogin') === 'false' &&
                <Container fluid>
                    <br/>
                    <IoIosArrowBack className="login-icons" onClick={showWelcome}/>    
                    <br/><br/><br/>
                    <h3 className="login-title">Registration</h3>
                    <p className="login-text">Please complete your details below to register</p>
                    <Form>
                        <Form.Group controlId="firstName">
                            <Form.Label className="login-form">First Name</Form.Label>
                            <Form.Control type="text" required
                                name="firstName" 
                                value={ user.firstName && user.firstName } 
                                onChange={handleUserChange} 
                                placeholder="e.g. Ray"
                            />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label className="login-form">Last Name</Form.Label>
                            <Form.Control type="text" required
                                name="lastName" 
                                value={ user.lastName && user.lastName } 
                                onChange={handleUserChange} 
                                placeholder="e.g. Collins"
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label className="login-form">Email</Form.Label>
                            <Form.Control type="email" required
                                name="email"
                                value={ user.email && user.email } 
                                onChange={handleUserChange}
                                placeholder="e.g. mejikfoundation@mail.com"
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className="login-form">Password</Form.Label>
                            <Form.Control type="password" required
                                name="password"
                                value={ user.password && user.password } 
                                onChange={handleUserChange}
                                placeholder="Enter your password..."
                            />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label className="login-form">Phone</Form.Label>
                            <Form.Control type="tel" required
                                name="phone" 
                                value={ user.phone && user.phone } 
                                onChange={handleUserChange}
                                pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" 
                                placeholder="e.g. 0812-3456-7890" 
                            />
                        </Form.Group>
                        <br/>
                        <Button variant="danger" type="submit" onClick={showHome} block>
                            Continue
                        </Button>
                    </Form>
                </Container>
            }
            { location === "Login2" && localStorage.getItem('userLogin') === 'false' &&
                <Container fluid>
                    <br/>
                    <IoIosArrowBack className="login-icons" onClick={showLogin1}/>    
                    <br/><br/><br/>
                    <AiOutlineLock className="login-email"/>
                    <br/><br/><br/>
                    <h3 className="login-title">Password</h3>
                    <p className="login-text">Please enter your password to login to the application</p>
                    <br/>
                    <Form>
                        <Form.Group controlId="password">
                            <Form.Label className="login-form">Password</Form.Label>
                            <Form.Control type="password" required
                                name="password"
                                value={loginPass}
                                onChange={handleLoginPassChange}
                                placeholder="Enter your password..."
                            />
                        </Form.Group>
                        <br/>
                        <Button variant="danger" type="submit" onClick={showHome} block>
                            Next
                        </Button>
                    </Form>
                </Container>
            }
            { location === "Login1" && localStorage.getItem('userLogin') === 'false' &&
                <Container fluid>
                    <br/>
                    <IoIosArrowBack className="login-icons" onClick={showWelcome}/>    
                    <br/><br/><br/>
                    <AiOutlineMail className="login-email"/>
                    <br/><br/><br/>
                    <h3 className="login-title">Email</h3>
                    <p className="login-text">Please enter your registered email to login to the application</p>
                    <br/>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label className="login-form">Email</Form.Label>
                            <Form.Control type="email" required
                                name="email"
                                value={loginEmail}
                                onChange={handleLoginEmailChange}
                                placeholder="e.g. mejikfoundation@mail.com"
                            />
                        </Form.Group>
                        <br/>
                        <Button variant="danger" type="submit" onClick={showLogin2} block>
                            Next
                        </Button>
                    </Form>
                </Container>
            }
            { location === "Welcome" &&
                <Container fluid>
                    <br/><br/><br/><br/><br/><br/><br/>
                    <img src={Logo} alt="" className="welcome-image"></img>
                    <br/><br/><br/>
                    <h3 className="welcome-title">Welcome to Mejik Foundation!</h3>
                    <br/><br/>
                    <p className="welcome-text">Mejik Foundation is a network that facilitates and empowers the voice of mejik communities</p>
                    <br/><br/>
                    <Button variant="outline-danger" onClick={showLogin1} block>
                        Login
                    </Button>
                    <br/>
                    <Button variant="danger" onClick={showRegister} block>
                        Register
                    </Button>
                </Container>
            }
            { location === "Home" && localStorage.getItem('userLogin') === 'true' &&
                <div className="area-color">
                    <Header location={location}/>
                    { data }
                    <Navbar/>
                </div>
            }
        </>
    );
}

export default Home;