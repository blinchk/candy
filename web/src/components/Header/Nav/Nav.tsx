import React, { Component } from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export default class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <a className="nav__item" href="">Tournaments</a>
                <a className="nav__item" href="">Leaderboards</a>
                <a className="nav__item" href=""><FontAwesomeIcon icon={faUser}/> blinchk</a>
            </nav>
        )
    }
}
