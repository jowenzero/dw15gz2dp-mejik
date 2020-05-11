import React from 'react';
import { Container, Button, Form } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineLock } from "react-icons/ai";
import { Redirect } from 'react-router-dom';
import { API, setAuthToken } from "../config/api";

import '../styles/login.css';

const Password = () => {
    const [settingOK, setSettingOK] = React.useState(false);
    const [oldPass, setOldPass] = React.useState("");
    const [newPass, setNewPass] = React.useState("");

    const handleOldPassChange = (event) => {
        setOldPass(event.target.value);
    };
    const handleNewPassChange = (event) => {
        setNewPass(event.target.value);
    };

    const changePass = async (event) => {
        try {
            event.preventDefault();
            const token = localStorage.getItem('userToken');
            setAuthToken(token);
            await API({
                method: 'post',
                data: {
                    query: `
                        mutation {
                            changePassword(
                                input: {
                                    oldPassword: "${oldPass}"
                                    newPassword: "${newPass}"
                                } 
                            ){
                            message
                            }
                        }
                    `
                }
            })
            setSettingOK(true);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Container fluid>
            { settingOK &&
                <Redirect to="/setting"/>
            }
            <br/>
            <IoIosArrowBack className="login-icons" onClick={() => setSettingOK(true)}/>    
            <br/><br/><br/>
            <AiOutlineLock className="login-email"/>
            <br/><br/><br/>
            <h3 className="login-title">Change Password</h3>
            <p className="login-text">Please enter your old password to change with the new password</p>
            <br/>
            <Form onSubmit={changePass}>
                <Form.Group controlId="oldPass">
                    <Form.Label className="login-form">Old Password</Form.Label>
                    <Form.Control type="password" required
                        name="oldPass"
                        value={oldPass}
                        onChange={handleOldPassChange}
                        placeholder="Enter your old password..."
                    />
                </Form.Group>
                <Form.Group controlId="newPass">
                    <Form.Label className="login-form">New Password</Form.Label>
                    <Form.Control type="password" required
                        name="newPass"
                        value={newPass}
                        onChange={handleNewPassChange}
                        placeholder="Enter your new password..."
                    />
                </Form.Group>
                <br/>
                <Button variant="danger" type="submit" block>
                    Next
                </Button>
            </Form>
        </Container>
    );
}

export default Password;