import React, { Component } from 'react';
import './Nav.scss';


export default class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <a className="nav__item" href="">Tournaments</a>
                <a className="nav__item" href="">Leaderboards</a>
            </nav>
        )
    }
}
