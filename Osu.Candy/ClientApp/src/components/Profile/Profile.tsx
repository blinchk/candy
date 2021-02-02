import React, { Component } from 'react';

import './Profile.scss';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile__container">
                    <div className="user">
                        <img src="https://a.ppy.sh/7964141?1590009110.jpeg" alt="" className="user__avatar"/>
                        <div className="user__identity">
                            <h1 className="user__name">
                                blinchk
                            </h1>
                            <span className="user__score">
                                Score: 1000
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
