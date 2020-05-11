import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { MdSearch } from "react-icons/md";
import { AiOutlineHistory, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Redirect } from 'react-router-dom';

import '../styles/header.css';

const Header = ({location}) => {
    const [cancelOk, setCancelOK] = React.useState(false);
    const [historyOk, setHistoryOK] = React.useState(false);

    return (
        <Container fluid className="padding-header">
            { cancelOk &&
                <Redirect to="/setting"/>
            }
            { historyOk &&
                <Redirect to="/history"/>
            }
            { location === "Home" && 
                <Navbar bg="white" fixed="top" className="justify-content-between navbar-header">             
                    <h1 className="header-title">Article</h1>
                    <MdSearch className="home-icons"/>
                </Navbar>
            }
            { location === "Donate" && 
                <Navbar bg="white" fixed="top" className="justify-content-between navbar-header">   
                    <AiOutlineClose onClick={() => setCancelOK(true)} className="home-icons"/>          
                    <h1 className="header-text">Donation</h1>
                    <AiOutlineHistory onClick={() => setHistoryOK(true)} className="home-icons"/>
                </Navbar>
            }
            { location === "History" && 
                <Navbar bg="white" fixed="top" className="justify-content-between navbar-header">   
                    <IoIosArrowBack onClick={() => setCancelOK(true)} className="home-icons"/>          
                    <h1 className="header-text">History</h1>
                    <MdSearch className="home-icons"/>
                </Navbar>
            }
        </Container>
    );
}

export default Header;