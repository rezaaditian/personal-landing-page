// Navbar component
import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-white header">
            {/* <!-- mobile header nav --> */}
            <div className="mobile-menu d-block d-md-none">
                <nav>
                    <ul className="menu">
                        <li><a href="index.html">Home</a>
                            <ul>
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="index2.html">Home 2</a></li>
                                <li><a href="index3.html">Home 3</a></li>
                                <li><a href="index4.html">Home 4</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a>
                            <ul>
                                <li><a href="services.html">Style 1</a></li>
                                <li><a href="servicesTwo.html">Style 2</a></li>
                                <li><a href="servicesDetails.html">Service Details</a></li>
                            </ul>
                        </li>
                        <li><a href="resume.html">Resume</a></li>
                        <li><a href="portfolio.html">Portfolio</a>
                            <ul>
                                <li><a href="portfolio.html">Style 1</a></li>
                                <li><a href="PortfolioFullWidth.html">Style 1 Full Width</a></li>
                                <li><a href="portfolioTwo.html">Style 2</a></li>
                                <li><a href="portfolioTwoFullWidth.html">Style 2 Full Width</a></li>
                                <li><a href="portfolioThree.html">Style 3</a></li>
                                <li><a href="portfolioThreeFullWidth.html">Style 3 Full Width</a></li>
                                <li><a href="portfolioDetails.html">Portfolio Details</a></li>
                            </ul>
                        </li>

                        <li><a href="blog.html">Blog</a>
                            <ul>
                                <li><a href="blog.html">Style 1</a></li>
                                <li><a href="blogFullWidth.html">Style 1 Full Width</a></li>
                                <li><a href="blogTwo.html">Style 2</a></li>
                                <li><a href="blogTwoFullWidth.html">Style 2 Full Width</a></li>
                                <li><a href="blogThree.html">Style 3</a></li>
                                <li><a href="blogThreeFullWidth.html">Style 3 Full Width</a></li>
                                <li><a href="blogDetails.html">Blog Details</a></li>
                            </ul>
                        </li>
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
                    <div className="header-menu-wrapper main-menu">
                        {/* <!-- nav menu --> */}
                        <nav className="desktop-nav">
                            <ul className="header-menu d-flex flex-row justify-content-center menu">
                                <li className="px-3">
                                    <a className="menu-link" href="index.html">Home</a>
                                    <ul className="submenu-container">
                                        <li><a className="submenu-link" href="index.html">Home 1</a></li>
                                        <li><a className="submenu-link" href="index2.html">Home 2</a></li>
                                        <li><a className="submenu-link" href="index3.html">Home 3</a></li>
                                        <li><a className="submenu-link" href="index4.html">Home 4</a></li>
                                    </ul>
                                </li>
                                <li className="px-3">
                                    <a className="menu-link" href="about.html">About</a>
                                </li>
                                <li className="px-3">
                                    <a className="menu-link" href="services.html">Services</a>
                                    <ul className="submenu-container">
                                        <li><a className="submenu-link" href="services.html">Style 1</a></li>
                                        <li><a className="submenu-link" href="servicesTwo.html">Style 2</a></li>
                                        <li><a className="submenu-link" href="servicesDetails.html">Services Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="px-3">
                                    <a className="menu-link" href="resume.html">Resume</a>
                                </li>
                                <li className="px-3">
                                    <a className="menu-link" href="portfolio.html">Portfolio</a>
                                    <ul className="submenu-container">
                                        <li><a className="submenu-link" href="portfolio.html">Style 1</a></li>
                                        <li><a className="submenu-link" href="PortfolioFullWidth.html">Style 1 Full
                                                Width</a></li>
                                        <li><a className="submenu-link" href="portfolioTwo.html">Style 2</a></li>
                                        <li><a className="submenu-link" href="portfolioTwoFullWidth.html">Style 2 Full
                                                Width</a></li>
                                        <li><a className="submenu-link" href="portfolioThree.html">Style 3</a></li>
                                        <li><a className="submenu-link" href="portfolioThreeFullWidth.html">Style 3
                                                Full Width</a></li>
                                        <li><a className="submenu-link" href="portfolioDetails.html">Portfolio Details</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="px-3">
                                    <a className="menu-link" href="blog.html">Blog</a>
                                    <ul className="submenu-container">
                                        <li><a className="submenu-link" href="blog.html">Style 1</a></li>
                                        <li><a className="submenu-link" href="blogFullWidth.html">Style 1 Full
                                                Width</a></li>
                                        <li><a className="submenu-link" href="blogTwo.html">Style 2</a></li>
                                        <li><a className="submenu-link" href="blogTwoFullWidth.html">Style 2 Full Width</a>
                                        </li>
                                        <li><a className="submenu-link" href="blogThree.html">Style 3</a></li>
                                        <li><a className="submenu-link" href="blogThreeFullWidth.html">Style 3
                                                Full Width</a></li>
                                        <li><a className="submenu-link" href="blogDetails.html">Blog Details</a></li>
                                    </ul>
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