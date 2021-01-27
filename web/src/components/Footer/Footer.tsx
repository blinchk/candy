import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <footer className="footer">
                <span>&#0169; candy!dev team, 2021</span>
                <a href="https://github.com/blinchk/candy" className="source-code"><FontAwesomeIcon icon={faGithub}/> source code</a>
                <a href="">profile</a>
                <a href="">about us</a>
            </footer>
        )
    }
}
