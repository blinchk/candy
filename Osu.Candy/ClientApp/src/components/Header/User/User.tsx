import React, { Component } from 'react'
import './User.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class User extends Component {
    render() {
        return (
            <div className="user">
                <a className="user__url" href=""><FontAwesomeIcon icon={faUser}/> blinchk</a>
            </div>
        )
    }
}
