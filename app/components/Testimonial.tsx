

const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>Testimonial</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    Client Feedback
                                </h2>
                            </div>
                            <div className="testimonial-list-container row-mobile-margin mt-50">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="testimonial-card">
                                            <div className="bio d-flex align-items-center">
                                                <img className="bio-img rounded-md" src="img/testimonial/michael.jpeg"
                                                    alt="testimonial-image"/>
                                                <div>
                                                    <h3 className="h3 fw-500 line-height-3 black-color">Michael Kravchuk</h3>
                                                    <p className="p fw-400 line-height-7 secondary-black">Road To Virtuosity</p>
                                                </div>
                                            </div>
                                            <p className="p line-height-7 fw-400 secondary-black mt-20">
                                            “Very professional and well organized. He creates a step-by-step plan in Trello and completes the steps quickly. He has good management and is making rapid progress.”
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-card">
                                            <div className="bio d-flex align-items-center">
                                                <img className="bio-img rounded-md" src="img/testimonial/turai.PNG"
                                                    alt="testimonial-image"/>
                                                <div>
                                                    <h3 className="h3 fw-500 line-height-3 black-color">Turai</h3>
                                                    <p className="p fw-400 line-height-7 secondary-black">Agromunity</p>
                                                </div>
                                            </div>
                                            <p className="p line-height-7 fw-400 secondary-black mt-20">
                                                “The professional work has been done very well. The work is carried out with high patience so that customer satisfaction is guaranteed. The value of the money spent is very well paid off with very satisfactory results.”
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-card">
                                            <div className="bio d-flex align-items-center">
                                                <img className="bio-img rounded-md" src="img/testimonial/justin.jpg"
                                                    alt="testimonial-image"/>
                                                <div>
                                                    <h3 className="h3 fw-500 line-height-3 black-color">Justin Dion</h3>
                                                    <p className="p fw-400 line-height-7 secondary-black">Finalstrip
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="p line-height-7 fw-400 secondary-black mt-20">
                                                "Great to work with, Greatly appreciated his suggestions. Went above and beyond to make changes with the back and despite not originally hired for it"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-card">
                                            <div className="bio d-flex align-items-center">
                                                <img className="bio-img rounded-md" src="img/testimonial/samah.jpg"
                                                    alt="testimonial-image"/>
                                                <div>
                                                    <h3 className="h3 fw-500 line-height-3 black-color">Ahmed Samah</h3>
                                                    <p className="p fw-400 line-height-7 secondary-black">Jobsicle
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="p line-height-7 fw-400 secondary-black mt-20">
                                                “Talented and exceptional developers in building apps with the latest technology. In addition, his communication with clients is very good and always strives to satisfy his clients' needs. I highly recommend it with an A++ grade”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial