// Navbar component
import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-white fixed w-full top-0 z-50">
            {/* <!-- mobile header nav --> */}
            <div className="mobile-menu d-block d-md-none">
                <nav>
                    <ul className="menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="container d-none d-md-block">
                <div className="header-wrapper d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <img src="img/Logo.png" alt="logo" /> 
                        </a>
                    </div>
                    <div className="header-menu-wrapper main-menu ">
                        {/* <!-- nav menu --> */}
                        <nav className="desktop-nav">
                            <ul className="header-menu d-flex flex-row justify-content-center menu">
                                <li className="px-3">
                                    <a className="menu-link font-bold" href="index.html">Home</a>
                                </li>
                                <li className="px-3">
                                    <a className="menu-link font-bold" href="about.html">About</a>
                                </li>
                                <li className="px-3">
                                    <a className="menu-link font-bold" href="portfolio.html">Portfolio</a>
                                </li>
                                <li className="px-3">
                                    <a className="menu-link font-bold" href="portfolio.html">Github</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <!-- header button --> */}
                    <div className="header-btn-wrapper">
                        <a className="btn orange-btn btn_effect" href="contact.html">
                            <span className="z-1 position-relative">contact us</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;