import React, { Component } from 'react';
import './Receipt.scss';

class Receipt extends Component {
    render() {
        return (
            <div className="flex__container--item-right footy-calculator__recepit">
                <div className="receipt__area">
                    <div className="openTrigger"><span>+</span></div>
                    <div className="mobView">
                        <div className="item">
                            <div className="ttotal">
                                <span className="subtotalTitle">Total</span>
                                <div className="big__total-area">
                                    <span className="total"></span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clubTitle"></div>
                            <a href="" className="startOver"><span>Start Over</span></a>
                        </div>
                    </div>
                    <div className="expandBox">
                        <div className="receipt__area--header"><i className="icon-reseipt"></i>your Receipt</div>
                        <div className="stamp__custom">
                            <div className="big__total-area">
                                <span className="total"></span>
                            </div>
                            <span className="subtotalTitle">Subtotal</span>
                            <a href="" className="startOver"><span>Start Over</span></a>
                        </div>
                        <div className="subtotalArea">
                            <ul className="subtotalList">
                                <li className="subtotalListItem male">
                                    <span><i className="SubtotalIconColor icon-tickets"></i>Male entrance</span>
                                    <span className="subtotalItemPrice"></span>
                                </li>
                                <li className="subtotalListItem female">
                                    <span> <i className="SubtotalIconColor icon-tickets"></i>Female entrance</span>
                                    <span className="subtotalItemPrice"></span>
                                </li>
                                <li className="subtotalListItem shot">
                                    <span><i className="SubtotalIconColor icon-shot"></i>Shot</span>
                                    <span className="subtotalItemPrice"></span>
                                </li>
                                <li className="subtotalListItem champane">
                                    <span><i className="SubtotalIconColor icon-champane"></i>Champagne</span>
                                    <span className="subtotalItemPrice"></span>
                                </li>
                                <li className="subtotalListItem beer">
                                    <span><i className="SubtotalIconColor icon-bear"></i>Beer</span>
                                    <span className="subtotalItemPrice"></span>
                                </li>
                                <li className="subtotalListItem tableService">
                                    <span><i className="SubtotalIconColor icon-table_service"></i>Table service</span>
                                    <span className="subtotalItemPrice"></span>
                                </li>
                                <li className="subtotalListItem cloakroom">
                                    <span><i className="SubtotalIconColor icon-cloakroom"></i>Cloakroom</span>
                                    <span className="subtotalItemPrice"></span>
                                </li>
                                <li className="subtotalListItem parking">
                                    <span><i className="SubtotalIconColor icon-parking"></i>Parking</span>
                                    <span className="subtotalItemPrice"></span>
                                </li>
                            </ul>
                        </div>
                        <div className="ttotal">
                            <span className="subtotalTitle hideInMobile">Total</span>
                            <div className="big__total-area">
                                <span className="total"></span>
                            </div>
                        </div>
                        <div className="ttotal flexBoxCenter">
                            <button className="btn compareBtn footy-compareCta"><i className="icon-bar"></i>Compare Club Prices</button>
                            <div className="share">
                                <span>Share your night out</span><i className="fa fa-twitter" aria-hidden="true"></i>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="borderDotted"></div>
                        <div className="about_club">
                            <div className="logo">
                                <img src="./images/club.jpg" alt="" />
                            </div>
                            <div className="about_club-title">Jewel - Aria Resort &amp; Casino</div>
                            <div className="address">
                                <p>3730 S Las Vegas Boulevard</p>
                                <p>Las Vegas, NV 89158</p>
                                <p>USA</p>
                            </div>
                        </div>
                        <div className="flexBoxCenter">
                            <a href="" className="btn linkBorder btnLink smallBorderRadius clubWebSite" target="_blank">Go to club's website</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Receipt;