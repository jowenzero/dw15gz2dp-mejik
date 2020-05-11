import React from 'react';
import { AiOutlineHistory, AiOutlineLock, AiOutlineLogout } from "react-icons/ai";
import { MdPhotoCamera } from "react-icons/md";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import '../styles/setting.css';
import Navbar from '../components/navbar'

const Setting = () => {
    const data = useSelector(state => state.user.data);
    const loading = useSelector(state => state.user.loading);
    const error = useSelector(state => state.user.error);

    const [historyOK, setHistoryOK] = React.useState(false);
    const [passOK, setPassOK] = React.useState(false);
    const [homeOK, setHomeOK] = React.useState(false);

    const showWelcome = () => {
        localStorage.setItem('userLogin', 'false');
        localStorage.setItem('userToken', null);
        setHomeOK(true);
    };

    return (
        <div className="setting-bg">
            { historyOK &&
                <Redirect to="/history"/>
            }
            { passOK &&
                <Redirect to="/password"/>
            }
            { homeOK &&
                <Redirect to="/"/>
            }

            { (!loading && !error) && data.user &&
                <>
                    <div className="setting-pic-bg">
                        <p className="setting-edit">Edit</p>
                        <div className="setting-pic-frame">
                            <div className="setting-pic">
                                <h1 className="setting-pic-text">{data.user.firstName.charAt(0)}{data.user.lastName.charAt(0)}</h1>
                            </div>
                            <div className="setting-pic-frame-2">
                                <div className="setting-pic-2">
                                    <MdPhotoCamera className="setting-camera"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="setting-white-bg">
                        <br/><br/>
                        <h3 className="setting-name">{data.user.firstName} {data.user.lastName}</h3>
                        <p className="setting-details">{data.user.email}</p>
                        <p className="setting-details pos-1">{data.user.phoneNumber}</p>
                    </div>
                </>
            }

            <div className="setting-white-bg" onClick={() => setHistoryOK(true)}>
                <AiOutlineHistory className="setting-icons"/>
                <h3 className="setting-button-text">
                    Donation History
                </h3>
            </div>

            <div className="setting-white-bg" onClick={() => setPassOK(true)}>
                <AiOutlineLock className="setting-icons"/>
                <h3 className="setting-button-text">
                    Change Password
                </h3>
            </div>

            <div className="setting-white-bg" onClick={showWelcome}>
                <AiOutlineLogout className="setting-icons color-red"/>
                <h3 className="setting-button-text color-red">
                    Logout
                </h3>
            </div>
            <Navbar/>
        </div>
    );
}

export default Setting;