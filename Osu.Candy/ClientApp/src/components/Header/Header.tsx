import React, { Component } from 'react';

import Nav from "./Nav/Nav";
import User from "./User/User";

import "./Header.scss";

import logo from '../../assets/img/logo_inverted_colors.png';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <a className="brand" href="">
                    <img src={logo} alt="brand" className="brand__logo"/> candy!
                </a>
                <Nav/>
                <User/>
            </header>
        );
    }
}

export default Header;