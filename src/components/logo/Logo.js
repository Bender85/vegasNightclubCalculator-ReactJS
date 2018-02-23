import React, { Component } from 'react';
import './Logo.scss';

class Logo extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <i className="icon-romb"></i>
                    <div className="header__logo--item">
                        <span className="header__logo--text header__logo--text--size24">las vegas</span>
                        <span className="header__logo--text header__logo--text--size44">Nightclub</span>
                        <span className="header__logo--text header__logo--text--size16">calculator</span>
                    </div>
                </div>
                <div className="bigText">
                    <span className="bigText__item">How much will A Vegas</span>
                    <span className="bigText__item">Night Out Cost You?</span>
                    <div className="bigText__itemBottom">
                        <p>Pick your club, who's going, what you'll drink and any extras to</p>
                        <p>see the full price of your Vegas experience.</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Logo;