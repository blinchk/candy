import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Login.scss'

interface ILoginProps {
    popupToggler(show: boolean): void;
}

export default class Login extends Component<ILoginProps> {
    render() {
        return (
            <div className="login">
                <FontAwesomeIcon className="login__close" icon={faTimes} onClick={() => this.props.popupToggler(false)} />
                <div className="login__container">
                    <h2 className="login__title">Sign In</h2>
                    <label className="login__subtitle" htmlFor="login">Login</label>
                    <input className="login__input"  type="text" name="login"/>
                    <label className="login__subtitle" htmlFor="password">Password</label>
                    <input className="login__input" type="text" name="password"/>
                    <button className="btn">Login</button>
                </div>
            </div>
        )
    }
}
