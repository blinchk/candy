import React, { Component } from 'react';
import { createPortal } from "react-dom";
import OAuth2Client from "client-oauth2";

import Login from "../../Login/Login";

import "./MainInfo.scss";

import logo from '../../../assets/img/logo.png';

interface IMainInfoState {
    showPopup: boolean;
}

class MainInfo extends Component<{}, IMainInfoState> {
    state = {
        showPopup: false,
    }

    OAuth2: OAuth2Client = new OAuth2Client({
        clientId: "5014",
        clientSecret: "0S9VnjocHShVJNbCdLZwrVKTP7EFad4SDZI2oXXK",
        accessTokenUri: "https://osu.ppy.sh/oauth/token",
        authorizationUri: "https://osu.ppy.sh/oauth/authorize",
        redirectUri: "http://localhost:44370",
        scopes: ["identify", "public"],
    });

    togglePopup(showPopup: boolean) {
        this.setState({ showPopup});
    }

    componentDidMount() {
        this.checkAuthorization();
    }

    authorize() {
        const uri = this.OAuth2.code.getUri();
        window.location.replace(uri);
    }

    async checkAuthorization() {
        const uri = document.location.href;

        try {
            const user = await this.OAuth2.code.getToken(uri);
            
            localStorage.setItem("accessToken", user.accessToken);
            localStorage.setItem("refreshToken", user.refreshToken);

            window.location.replace("http://localhost:3000");
        } catch(e) {}
    }

    
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
                    <button className="btn" onClick={() => this.authorize()}>Sign In</button>
                    <button className="btn">How to Start?</button>
                </div>

                {
                    this.state.showPopup && createPortal(<Login popupToggler={this.togglePopup.bind(this)}/>, document.querySelector("#root") as Element)
                }
            </div>
        );
    }
}

export default MainInfo;
