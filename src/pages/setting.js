import React from 'react';
import { AiOutlineHistory, AiOutlineLock, AiOutlineLogout } from "react-icons/ai";
import { MdPhotoCamera } from "react-icons/md";
import { Redirect } from 'react-router-dom';

import '../styles/setting.css';
import Navbar from '../components/navbar'

const Setting = () => {
    const firstName = "Ray"
    const lastName = "Collins"
    const email = "raycollins@gmail.com"
    const phone = "0812-3456-7890"

    const [historyOK, setHistoryOK] = React.useState(false);
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
            { homeOK &&
                <Redirect to="/"/>
            }
            <div className="setting-pic-bg">
                <p className="setting-edit">Edit</p>
                <div className="setting-pic-frame">
                    <div className="setting-pic">
                        <h1 className="setting-pic-text">{firstName.charAt(0)}{lastName.charAt(0)}</h1>
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
                <h3 className="setting-name">{firstName} {lastName}</h3>
                <p className="setting-details">{email}</p>
                <p className="setting-details pos-1">{phone}</p>
            </div>

            <div className="setting-white-bg" onClick={() => setHistoryOK(true)}>
                <AiOutlineHistory className="setting-icons"/>
                <h3 className="setting-button-text">
                    Donation History
                </h3>
            </div>

            <div className="setting-white-bg" onClick={() => console.log("password")}>
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