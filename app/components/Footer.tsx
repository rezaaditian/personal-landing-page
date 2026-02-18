

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                                {/* <div className="footer-col-one">
                                    <img src="img/LogoWhite.png" className="footer-logo" alt="footer logo"/>
                                    <h3 className="h3 fw-500 line-height-3 text-white fw-500">
                                        rezaaditian24@gmail.com
                                    </h3>
                                </div> */}
                            </div>
                            <div className="col-6 col-sm-6 col-lg-2 mt-5 mt-lg-0">
                                <h4 className="h4 fw-500 text-white">
                                    Explore Link
                                </h4>
                                <div className="footer-col-links">
                                    <ul className="footer-col-link-container">
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="about.html">About</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white"
                                                href="/portfolio">Portfolio</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-lg-2 mt-5 mt-lg-0">
                                <h4 className="h4 fw-500 text-white">
                                    My Services
                                </h4>
                                <div className="footer-col-links">
                                    <ul className="footer-col-link-container">
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="services.html">SaaS Development</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="services.html">API Integration</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="services.html">Web Development</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="services.html">Vibe Coding Cleanup</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                                <h4 className="h4 fw-500 text-white">
                                    Contact me
                                </h4>
                                {/* <div className="footer-social-media">
                                    <ul className="footer-social-container d-flex align-items-center mb-35">
                                        <li className="footer-social-item-2">
                                            <a href="https://www.facebook.com/">
                                                <div className="orange-bg-icon">
                                                    <i className="fa-brands fa-facebook-f text-white h4"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="footer-social-item-2">
                                            <a href="https://twitter.com/">
                                                <div className="orange-bg-icon">
                                                    <i className="fa-brands fa-twitter text-white h4"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="footer-social-item-2">
                                            <a href="https://dribbble.com/">
                                                <div className="orange-bg-icon">
                                                    <i className="fa-brands fa-dribbble text-white h4"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="footer-social-item-2">
                                            <a href="https://www.behance.net/">
                                                <div className="orange-bg-icon">
                                                    <i className="fa-brands fa-behance text-white h4"></i>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="footer-col-links">
                                    <div className="footer-col-link-container d-flex align-items-center mb-20">
                                        <i className="fa-solid fa-phone-volume footer-contact-icon mr-10 orange-color"></i>
                                        <p>
                                            <a className="p text-white line-height-7 fw-400" href="tel:1-800-915-6270">
                                                +62 895-3420-01544
                                            </a>
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mb-20">
                                        <i className="fa-solid fa-message footer-contact-icon mr-10 orange-color"></i>
                                        <p>
                                            <a className="p text-white line-height-7 fw-400" href="tel:1-800-915-6270">
                                                rezaaditian24@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-container">
                            <div className="row">
                                <div className="footerbottom-left col-12 col-sm-5 col-md-6 text-start">
                                    <p className="p text-white line-height-7">
                                        All rights reserved &copy; 2025 Reza Aditia
                                    </p>
                                    {/* <h5 className="h5 mt-2 fw-500 line-height-3 text-white fw-500">
                                        rezaaditian24@gmail.com
                                    </h5> */}
                                </div>
                                <div className="footerbottom-right col-12 col-sm-7 col-md-6">
                                    <ul className="d-flex justify-content-sm-end">
                                        <li className="mr-100">
                                            <a className="text-white p" href="termsandconditions.html">
                                                Terms & Condition
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-white p" href="privacypolicy.html">
                                                Privacy policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer