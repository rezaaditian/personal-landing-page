import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <Navbar />
            <section className="portfolio-archieve">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="portfolio-wrapper">
                                <div className="section-heading-middle">
                                    <div className="sub-heading d-flex align-items-center mx-auto">
                                        <img src="img/orangeDot.png" alt="orange-dot" />
                                        <p>My Portfolio</p>
                                    </div>
                                    <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                        VISIT MY PORTFOLIO
                                    </h2>
                                </div>
                                <div className="mt-50 row-mobile-margin">
                                <div className="controls d-flex justify-content-center gap-1 gap-lg-4 mb-45 flex-wrap">
                                    <button
                                        type="button"
                                        className="control filter btn outline-0 border-0 secondary-black"
                                        data-filter="all"
                                    >
                                        All
                                    </button>

                                    <button
                                        type="button"
                                        className="control filter btn outline-0 border-0 secondary-black"
                                        data-filter=".fullstack"
                                    >
                                        Fullstack Apps
                                    </button>

                                    <button
                                        type="button"
                                        className="control filter btn outline-0 border-0 secondary-black"
                                        data-filter=".saas"
                                    >
                                        SaaS Platforms
                                    </button>

                                    <button
                                        type="button"
                                        className="control filter btn outline-0 border-0 secondary-black"
                                        data-filter=".api"
                                    >
                                        API & Integrations
                                    </button>

                                    <button
                                        type="button"
                                        className="control filter btn outline-0 border-0 secondary-black"
                                        data-filter=".automation"
                                    >
                                        Automation Systems
                                    </button>

                                    <button
                                        type="button"
                                        className="control filter btn outline-0 border-0 secondary-black"
                                        data-filter=".web"
                                    >
                                        Web Platforms
                                    </button>

                                    </div>
                                    <div className="portfolio-massonary-container">
                                        <div className="portfolio-massonary-items mix ui all position-relative">
                                            <img className="img-fluid" src="img/portfolioOne.png" alt="portfolio img" />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                            </div>
                                            <div
                                                className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">Graphic Design</p>
                                                    <a href="portfolioDetails.html"
                                                        className="h4 text-white fw-600 line-height-3">
                                                        The best way to impress your web
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-massonary-items mix graphic all position-relative">
                                            <img className="img-fluid" src="img/portfolioTwo.png" alt="portfolio img" />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                            </div>
                                            <div
                                                className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">Graphic Design</p>
                                                    <a href="portfolioDetails.html"
                                                        className="h4 text-white fw-600 line-height-3">
                                                        The best way to impress your web
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-massonary-items mix ui graphic all position-relative">
                                            <img className="img-fluid" src="img/portfolioThree.png" alt="portfolio img" />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                            </div>
                                            <div
                                                className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">Graphic Design</p>
                                                    <a href="portfolioDetails.html"
                                                        className="h4 text-white fw-600 line-height-3">
                                                        The best way to impress your web
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-massonary-items mix web all position-relative">
                                            <img className="img-fluid" src="img/portfolioFour.png" alt="portfolio img" />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                            </div>
                                            <div
                                                className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">Graphic Design</p>
                                                    <a href="portfolioDetails.html"
                                                        className="h4 text-white fw-600 line-height-3">
                                                        The best way to impress your web
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-massonary-items mix app all position-relative">
                                            <img className="img-fluid" src="img/portfolioFive.png" alt="portfolio img" />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                            </div>
                                            <div
                                                className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">Graphic Design</p>
                                                    <a href="portfolioDetails.html"
                                                        className="h4 text-white fw-600 line-height-3">
                                                        The best way to impress your web
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-massonary-items mix branding all position-relative">
                                            <img className="img-fluid" src="img/portfolioSix.png" alt="portfolio img" />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                            </div>
                                            <div
                                                className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">Graphic Design</p>
                                                    <a href="portfolioDetails.html"
                                                        className="h4 text-white fw-600 line-height-3">
                                                        The best way to impress your web
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-massonary-items mix web all position-relative">
                                            <img className="img-fluid" src="img/portfolioSeven.png" alt="portfolio img" />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                            </div>
                                            <div
                                                className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">Graphic Design</p>
                                                    <a href="portfolioDetails.html"
                                                        className="h4 text-white fw-600 line-height-3">
                                                        The best way to impress your web
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-massonary-items mix app all position-relative">
                                            <img className="img-fluid" src="img/portfolioEight.png" alt="portfolio img" />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0">
                                            </div>
                                            <div
                                                className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">Graphic Design</p>
                                                    <a href="portfolioDetails.html"
                                                        className="h4 text-white fw-600 line-height-3">
                                                        The best way to impress your web
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PortfolioPage;