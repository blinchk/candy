import React, { Component } from 'react';

import MainInfo from "./MainInfo/MainInfo";
import Login from './../Login/Login';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <MainInfo/>
            </main>
        );
    }
}

export default Main;
