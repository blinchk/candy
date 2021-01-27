import React, { Component } from 'react';

import "./MainInfo.scss";

import logo from '../../../assets/img/logo.png';

class MainInfo extends Component {
    render() {
        return (
            <div className="main-info container">
                <div className="about-us">
                    <img src={logo} alt="brand logo" className="logo"/>
                    <span className="about-us__title">candy!</span> 
                    <div className="about-us__description">
                        is revolutionary <a href="https://osu.ppy.sh">osu!</a> tournament platform.
                    </div>
                </div>

                <div className="action-buttons">
                    <a href="" className="btn">Sign Up</a>
                    <a href="" className="btn">How to Start?</a>
                </div>
            </div>
        );
    }
}

export default MainInfo;
