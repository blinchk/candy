import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
