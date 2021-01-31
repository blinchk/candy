import React, { Component } from 'react'
import './Login.scss'

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <h2>Sign In</h2>
                <label htmlFor="login">Login</label>
                <input type="text" name="login"/>
                <label htmlFor="password">Password</label>
                <input type="text" name="password"/>
                <button></button>
            </div>
        )
    }
}
