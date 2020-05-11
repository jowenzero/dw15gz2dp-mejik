import React, { useEffect, useCallback } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { MdSearch } from "react-icons/md";
import { AiOutlineHistory, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getUser } from "../_actions/user";

import '../styles/header.css';

const Header = ({location}) => {
    const [cancelOk, setCancelOK] = React.useState(false);
    const [cancel2Ok, setCancel2OK] = React.useState(false);
    const [historyOk, setHistoryOK] = React.useState(false);

    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(getUser());
    }, [dispatch]);
    
    useEffect(() => {
        initFetch();
    }, [initFetch]);


    return (
        <Container fluid className="padding-header">
            { cancelOk &&
                <Redirect to="/"/>
            }
            { cancel2Ok &&
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
                    <IoIosArrowBack onClick={() => setCancel2OK(true)} className="home-icons"/>          
                    <h1 className="header-text">History</h1>
                    <MdSearch className="home-icons"/>
                </Navbar>
            }
        </Container>
    );
}

export default Header;