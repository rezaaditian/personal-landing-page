

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="portfolio-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>My Portfolio</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    VISIT MY PORTFOLIO
                                </h2>
                            </div>
                            <div className="mt-50 row-mobile-margin">
                                <div className="controls d-flex justify-content-center flex-wrap gap-1 gap-lg-4 mb-45">
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".all">All</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".fullstack">Fullstack Apps</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".saas">SaaS Platforms</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".api">API & Integrations</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".automation">Automation Systems</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".web">Web Platforms</button>
                                </div>
                                <div className="portfolio-massonary-container">
                                    <div className="portfolio-massonary-items mix ui all position-relative">
                                        <img className="img-fluid" src="img/portofolio/1.png" alt="portfolio-img"/>
                                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                        </div>
                                        <div
                                            className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                            <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                <p className="text-white fw-400 line-height-7">Astro Music</p>
                                                <a href="portfolioDetails.html"
                                                    className="h4 text-white fw-600 line-height-3">
                                                    The best way to impress your web
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-massonary-items mix graphic all position-relative">
                                        <img className="img-fluid" src="img/portofolio/2.png" alt="portfolio-img"/>
                                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                        </div>
                                        <div
                                            className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                            <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                <p className="text-white fw-400 line-height-7">IFreelance</p>
                                                <a href="portfolioDetails.html"
                                                    className="h4 text-white fw-600 line-height-3">
                                                    The best way to impress your web
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-massonary-items mix ui graphic all position-relative">
                                        <img className="img-fluid" src="img/portofolio/3.png" alt="portfolio-img"/>
                                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                        </div>
                                        <div
                                            className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                            <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                <p className="text-white fw-400 line-height-7">Inilah.com</p>
                                                <a href="portfolioDetails.html"
                                                    className="h4 text-white fw-600 line-height-3">
                                                    The best way to impress your web
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-massonary-items mix web all position-relative">
                                        <img className="img-fluid" src="img/portofolio/4.png" alt="portfolio-img"/>
                                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                        </div>
                                        <div
                                            className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                            <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                <p className="text-white fw-400 line-height-7">Javabica</p>
                                                <a href="portfolioDetails.html"
                                                    className="h4 text-white fw-600 line-height-3">
                                                    The best way to impress your web
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-massonary-items mix app all position-relative">
                                        <img className="img-fluid" src="img/portofolio/14.png" alt="portfolio-img"/>
                                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                        </div>
                                        <div
                                            className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                            <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                <p className="text-white fw-400 line-height-7">Nifty Educate</p>
                                                <a href="portfolioDetails.html"
                                                    className="h4 text-white fw-600 line-height-3">
                                                    The best way to impress your web
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-massonary-items mix branding all position-relative">
                                        <img className="img-fluid" src="img/portofolio/24.jpg" alt="portfolio-img"/>
                                        <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                        </div>
                                        <div
                                            className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                            <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                <p className="text-white fw-400 line-height-7">Finalstrip</p>
                                                <a href="portfolioDetails.html"
                                                    className="h4 text-white fw-600 line-height-3">
                                                    The best way to impress your web
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-50">
                                    <a
                                        className="btn btn_effect home-banner-btn orange-btn"
                                        href="/portfolio"
                                    >
                                        <span className="position-relative z-1">More Portfolio</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio