import React from "react";
import './MobileNavbar.scss';

const MobileNavbar = () => {
    return (
        <div className="mobile-navbar">
            <div className="mobile-navbar-button">
                <i className="las la-th-large mobile-navbar-button-icon"></i>
                <a className="mobile-navbar-button-link" href="#home">Routines</a>
            </div>
            <div className="mobile-navbar-button">
                <i className="las la-history"></i>
                <a className="mobile-navbar-button-link" href="#about">History</a>
            </div>
            <div className="mobile-navbar-button">
                <i className="las la-chart-area"></i>
                <a className="mobile-navbar-button-link" href="#stats">Stats</a>
            </div>
            <div className="mobile-navbar-button">
                <i className="las la-dumbbell"></i>
                <a className="mobile-navbar-button-link" href="#exercises">Exercises</a>
            </div>
            <div className="mobile-navbar-button">
                <i className="las la-cog"></i>
                <a className="mobile-navbar-button-link" href="#settings">Settings</a>
            </div>
        </div>
    );
}

export default MobileNavbar;