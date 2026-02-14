import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="home overflow-x-hidden">
      <Navbar />
        {/* <!-- start banner --> */}
        <section className="home-banner position-relative">
            <div className="container-fluid custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="home-banner-wrapper row align-items-center">
                            <div className="col-12 col-lg-6 col-xl-7 home-banner-text-col position-relative">
                                <div className="sub-heading d-flex align-items-center">
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>I AM DESIGNER</p>
                                </div>
                                <div className="animate-heading">
                                    <h1 className="black-color h1 home-one-title ah-headline">Creative Design and Web <span
                                        className="orange-color"><span className="ah-words-wrapper"> 
                                            <b className="is-visible"> Solutions</b>
                                            <b>Design</b>
                                        </span></span> 
                                        <br/>
                                    </h1>
                                </div>
                                <p className="h5 line-height-7 mt-20 secondary-black fw-400">
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
                                    dolor repellendus. Temporibus autem quibusdam et.
                                </p>
                                <a className="btn_effect btn home-banner-btn orange-btn mt-50" href="resume.html"><span
                                        className="z-1 position-relative">Download My CV</span>
                                </a>
                                <div className="banner-particle-one-container">
                                    <img className="position-absolute banner-particle-one d-none d-lg-inline"
                                        src="img/particleOne.png" alt="banner particle one"/>
                                </div>
                                <div className="banner-particle-two-container">
                                    <img className="position-absolute banner-particle-two delay-one"
                                        src="img/particleTwo.png" alt="banner particle two"/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5 text-center position-relative home-banner-img-col">
                                <div className="banner-particle-one-container">
                                    <img className="position-absolute banner-particle-one d-lg-none"
                                        src="img/particleOne.png" alt="banner particle one"/>
                                </div>

                                <img className="position-absolute home-banner-shape bg-move-3d"
                                    src="img/homeNannerShape.png" alt="banner-shape"/>
                                <img className="img-fluid position-relative z-index-10 home-banner-img"
                                    src="img/bannerImg.png" alt="banner-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end home-banner --> */}
        {/* <!-- start about me --> */}
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="about-image-col col-12 col-lg-6 text-center">
                                <div className="img-overlay mx-auto mx-lg-0">
                                    <img className="img-fluid" src="img/about.png" alt="about image"/>
                                </div>
                            </div>
                            <div className="about-text-col col-12 col-lg-6">
                                <div className="about-text-top">
                                    <div className="section-heading">
                                        <div className="sub-heading d-flex align-items-center">
                                            <img src="img/orangeDot.png" alt="orange-dot"/>
                                            <p>About Me</p>
                                        </div>
                                        <h2 className="black-color line-height-3 h2">
                                            I Can Design Anything You Want
                                        </h2>
                                    </div>
                                    <p className="secondary-black line-height-7 mt-20">
                                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                        minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
                                        omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero
                                        tempore, cum soluta
                                        nobis est eligendi optio cumque nihil impedit.
                                    </p>
                                </div>
                                <div className="row row-mobile-margin gy-3 gy-sm-0 mt-50">
                                    <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                                        <div className="mr-10">
                                            <img src="img/aboutIconOne.png" alt="about icon one"/>
                                        </div>
                                        <div className="about-complete-project">
                                            <h4 className="fw-700 orange-color h4"><span className="counter">350</span>+</h4>
                                            <h4 className="fw-500 black-color h4">Complete Project</h4>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                                        <div className="mr-10">
                                            <img src="img/aboutIconTwo.png" alt="about icon two"/>
                                        </div>
                                        <div className="about-years-experience">
                                            <h4 className="fw-700 orange-color h4"><span className="counter">16</span>+</h4>
                                            <h4 className="fw-500 black-color h4">Year of experience</h4>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1500"
                                    className="row flex-column row-mobile-margin mt-50">
                                    <div className="col-12 mb-0 mb-20 ">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <div className="mb-20 d-flex align-items-center">
                                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                                                    <p>Work simple and cline design</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <div className="mb-20 d-flex align-items-center">
                                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                                                    <p>Web Design Full stack</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <div className="d-flex align-items-center mb-20">
                                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                                                    <p>New idea and user friendly design</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="fa-regular fa-square-check mr-10 h6 orange-color"></i>
                                                    <p>Unlimited Revisions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500"
                                    className="btn btn_effect home-banner-btn orange-btn mt-50" href="resume.html"><span
                                        className="position-relative z-1">Download My CV</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end about me --> */}
        {/* <!-- start services --> */}
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading-middle">
                            <div className="sub-heading d-flex align-items-center mx-auto">
                                <img src="img/orangeDot.png" alt="orange-dot"/>
                                <p>My Service</p>
                            </div>
                            <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                Services I offer
                            </h2>
                        </div>
                        <div className="service-grid-container mt-50 row-mobile-margin">
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src="img/serviceOne.png" alt="service-img-one"/>
                                <h3 className="h3 fw-500 service-item-heading black-color">UI/UX Design</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    Hen our power of choice is untrammelled and when nothing prevents our being able
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src="img/serviceTwo.png" alt="service-img-two"/>
                                <h3 className="h3 fw-500 service-item-heading black-color">Mobile App</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    Hen our power of choice is untrammelled and when nothing prevents our being able
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src="img/serviceThree.png" alt="service-img-three"/>
                                <h3 className="h3 fw-500 service-item-heading black-color">Graphic Design</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    Hen our power of choice is untrammelled and when nothing prevents our being able
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src="img/serviceFour.png" alt="service-img-four"/>
                                <h3 className="h3 fw-500 service-item-heading black-color">Web Developer</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    Hen our power of choice is untrammelled and when nothing prevents our being able
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src="img/serviceFive.png" alt="service-img-five"/>
                                <h3 className="h3 fw-500 service-item-heading black-color">SEO Optimisation</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    Hen our power of choice is untrammelled and when nothing prevents our being able
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src="img/serviceSix.png" alt="service-img-six"/>
                                <h3 className="h3 fw-500 service-item-heading black-color">WordPress Developer</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    Hen our power of choice is untrammelled and when nothing prevents our being able
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src="img//serviceSeven.png" alt="service-img-seven"/>
                                <h3 className="h3 fw-500 service-item-heading black-color">App Development</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    Hen our power of choice is untrammelled and when nothing prevents our being able
                                </p>
                            </div>
                            <div className="service-grid-item text-center">
                                <img className="service-item-img" src="img/serviceEight.png" alt="service-img-eight"/>
                                <h3 className="h3 fw-500 service-item-heading black-color">Business Strategy</h3>
                                <p className="p service-item-paragraph secondary-black fw-400 line-height-7">
                                    Hen our power of choice is untrammelled and when nothing prevents our being able
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end services --> */}
        {/* <!-- start resume --> */}
        <section className="resume">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="resume-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>My Resume</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    10+ YEARS OF EXPERIENCE
                                </h2>
                            </div>
                            <div className="row mt-50 row-mobile-margin">
                                <div className="col-12 col-lg-2">
                                    <div
                                        className="resume-topics h-100 flex-column justify-content-center position-relative">
                                        <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-one fw-500 text-black position-absolute">
                                            Education</h3>
                                        <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-two fw-500 text-black position-absolute">
                                            Software Skills
                                        </h3>
                                        <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-three fw-500 text-black position-absolute">
                                            Experience</h3>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10">
                                    {/* <!-- resume education row --> */}
                                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"
                                        className="resume-education bg-white">
                                        <div className="row">
                                            {/* <!-- education first column --> */}
                                            <div className="col-lg-4 resume-first-item">
                                                <h4 className="h4 text-black fw-500">
                                                    BSc in Computer Science
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    University of ULAV (2018 - 2022)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                    Pomnis voluptas assumenda est, omnis dolor repellendus.
                                                </p>
                                            </div>
                                            {/* <!-- education second column --> */}
                                            <div className="col-lg-4 resume-second-item">
                                                <h4 className="h4 text-black fw-500">
                                                    AS - Science & Information
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    University of ULAV (2016 - 2018)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                    Pomnis voluptas assumenda est, omnis dolor repellendus.
                                                </p>
                                            </div>
                                            {/* <!-- education third column --> */}
                                            <div className="col-lg-4 resume-third-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Secondary School Education
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    Kindergarten (2006 - 2016)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                    Pomnis voluptas assumenda est, omnis dolor repellendus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- resume skills row --> */}
                                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"
                                        className="resume-skills bg-white mt-4">
                                        <div className="row">
                                            {/* <!-- skills first column --> */}
                                            <div className="col-lg-4 resume-first-item">
                                                <h4 className="h4 text-black fw-500">
                                                    UI/UX Design
                                                </h4>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        Figma
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        90%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Adobe XD
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        85%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Photoshop
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        80%
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <!-- skills second column --> */}
                                            <div className="col-lg-4 resume-second-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Web Developer
                                                </h4>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        WordPress
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        90%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Mockplus
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        85%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        Weebly
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        80%
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <!-- skills thirdt column --> */} 
                                            <div className="col-lg-4 resume-third-item">
                                                <h4 className="h4 text-black fw-500">
                                                    App Development
                                                </h4>
                                                <div className="row mt-10 justify-content-between">
                                                    <p
                                                        className="col-10 p secondary-black fw-400 line-height-7 skill-name position-relative">
                                                        Quixy
                                                    </p>
                                                    <p className="col-2 p secondary-black fw-400 line-height-7">
                                                        92%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        AppyPie
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        87%
                                                    </p>
                                                </div>
                                                <div className="row justify-content-between mt-10">
                                                    <p
                                                        className="p secondary-black fw-400 line-height-7 col-10 skill-name position-relative">
                                                        iBuildApp
                                                    </p>
                                                    <p className="p col-2 secondary-black fw-400 line-height-7">
                                                        82%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- resume experience row --> */}
                                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="800"
                                        className="resume-education mt-4 bg-white">
                                        <div className="row">
                                            {/* <!-- experience first column --> */}
                                            <div className="col-lg-4 resume-first-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Web Developer & Trainer
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    Brac Developer Team - (2012 - 2016)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                    Pomnis voluptas assumenda est, omnis dolor repellendus.
                                                </p>
                                            </div>
                                            {/* <!-- experience second column --> */}
                                            <div className="col-lg-4 resume-second-item">
                                                <h4 className="h4 text-black fw-500">
                                                    Front-end Developer
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    Brane - (2020 - 2011)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                    Pomnis voluptas assumenda est, omnis dolor repellendus.
                                                </p>
                                            </div>
                                            {/* <!-- experience third column --> */}
                                            <div className="col-lg-4 resume-third-item">
                                                <h4 className="h4 text-black fw-500">
                                                    UI/UX Designer
                                                </h4>
                                                <p className="p secondary-black fw-400 line-height-7 mt-10">
                                                    Google Out Tech - (2017 - Present)
                                                </p>
                                                <p className="p secondary-black fw-400 line-height-7 mt-20">
                                                    Pomnis voluptas assumenda est, omnis dolor repellendus.
                                                </p>
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
        {/* <!-- end resume --> */}
        {/* <!-- start testimonial --> */}
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
                                                <img className="bio-img" src="img/testimonialOne.png"
                                                    alt="testimonial-image"/>
                                                <div>
                                                    <h3 className="h3 fw-500 line-height-3 black-color">John K. Meraz</h3>
                                                    <p className="p fw-400 line-height-7 secondary-black">CTO, Xyz Group</p>
                                                </div>
                                            </div>
                                            <p className="p line-height-7 fw-400 secondary-black mt-20">
                                                “Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature fr45 BC, mak it over
                                                2000 years old.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-card">
                                            <div className="bio d-flex align-items-center">
                                                <img className="bio-img" src="img/testimonialTwo.png"
                                                    alt="testimonial-image"/>
                                                <div>
                                                    <h3 className="h3 fw-500 line-height-3 black-color">Johan Smith</h3>
                                                    <p className="p fw-400 line-height-7 secondary-black">CEO, Abc Agency
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="p line-height-7 fw-400 secondary-black mt-20">
                                                “Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature fr45 BC, mak it over
                                                2000 years old.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-card">
                                            <div className="bio d-flex align-items-center">
                                                <img className="bio-img" src="img/testimonialThree.png"
                                                    alt="testimonial-image"/>
                                                <div>
                                                    <h3 className="h3 fw-500 line-height-3 black-color">Robert E. Wolf </h3>
                                                    <p className="p fw-400 line-height-7 secondary-black">Director, Techso
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="p line-height-7 fw-400 secondary-black mt-20">
                                                “Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature fr45 BC, mak it over
                                                2000 years old.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-card">
                                            <div className="bio d-flex align-items-center">
                                                <img className="bio-img" src="img/testimonialThree.png"
                                                    alt="testimonial-image"/>
                                                <div>
                                                    <h3 className="h3 fw-500 line-height-3 black-color">Robert E. Wolf </h3>
                                                    <p className="p fw-400 line-height-7 secondary-black">Director, Techso
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="p line-height-7 fw-400 secondary-black mt-20">
                                                “Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature fr45 BC, mak it over
                                                2000 years old.
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
        {/* <!-- end testimonial --> */}
        {/* <!-- start portfolio gallery --> */}
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
                                        data-filter=".ui">UI/Ux Design</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".branding">Branding Design</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".graphic">Graphic Design</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".app">App Development</button>
                                    <button type="button" className="control filter btn .outline-0 border-0 secondary-black"
                                        data-filter=".web">Web Design</button>
                                </div>
                                <div className="portfolio-massonary-container">
                                    <div className="portfolio-massonary-items mix ui all position-relative">
                                        <img className="img-fluid" src="img/portfolioOne.png" alt="portfolio-img"/>
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
                                        <img className="img-fluid" src="img/portfolioTwo.png" alt="portfolio-img"/>
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
                                        <img className="img-fluid" src="img/portfolioThree.png" alt="portfolio-img"/>
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
                                        <img className="img-fluid" src="img/portfolioFour.png" alt="portfolio-img"/>
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
                                        <img className="img-fluid" src="img/portfolioFive.png" alt="portfolio-img"/>
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
                                        <img className="img-fluid" src="img/portfolioSix.png" alt="portfolio-img"/>
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
                                        <img className="img-fluid" src="img/portfolioSeven.png" alt="portfolio-img"/>
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
                                        <img className="img-fluid" src="img/portfolioEight.png" alt="portfolio-img"/>
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
        {/* <!-- end portfolio gallery --> */}
        {/* <!-- start partners --> */}
        <section className="partners">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="partners-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>Partners</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    REPUTED PARTNER
                                </h2>
                            </div>
                            <div className="partner-list-container row-mobile-margin mt-50">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="partner-card">
                                            <img className="text-center img-fluid partner-img" src="img/partnerOne.png"
                                                alt="partner-image"/>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-card">
                                            <img className="text-center img-fluid partner-img" src="img/partnerTwo.png"
                                                alt="partner-image"/>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-card">
                                            <img className="text-center img-fluid partner-img" src="img/partnerThree.png"
                                                alt="partner-image"/>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-card">
                                            <img className="text-center img-fluid partner-img" src="img/partnerFour.png"
                                                alt="partner-image"/>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-card">
                                            <img className="text-center img-fluid partner-img" src="img/partnerFive.png"
                                                alt="partner-image"/>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-card">
                                            <img className="text-center img-fluid partner-img" src="img/partnerOne.png"
                                                alt="partner-image"/>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="partner-card">
                                            <img className="text-center img-fluid partner-img" src="img/partnerTwo.png"
                                                alt="partner-image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end partners --> */}
        {/* <!-- start blog --> */}
        <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="blogs-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>My Blog</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    LATEST BLOG
                                </h2>
                            </div>
                            <div className="blogs-container row-mobile-margin mt-50">
                                <div className="card p-0 blog-card">
                                    <div className="img-overlay">
                                        <img src="img/blogOne.png" className="card-img-top img-fluid blog-card-img"
                                            alt="blog image"/>
                                    </div>
                                    <div className="card-body blog-card-body">
                                        <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">20 January,
                                            2023
                                        </p>
                                        <a href="blogDetails.html">
                                            <h3 className="card-title h3 fw-600 line-height-3 black-color">Become a UX/UI
                                                Designer With Career Foundry.</h3>
                                        </a>
                                        <a href="blogDetails.html">
                                            <div className="blog-card-btn d-flex align-items-center mt-4">
                                                <span
                                                    className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">Read
                                                    More</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="card p-0 blog-card">
                                    <div className="img-overlay">
                                        <img src="img/blogTwo.png" className="card-img-top img-fluid blog-card-img"
                                            alt="blog image"/>
                                    </div>
                                    <div className="card-body blog-card-body">
                                        <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">15 January,
                                            2023
                                        </p>
                                        <a href="blogDetails.html">
                                            <h3 className="card-title h3 fw-600 line-height-3 black-color">The Best App
                                                Development For Your Business.</h3>
                                        </a>
                                        <a href="blogDetails.html">
                                            <div className="blog-card-btn d-flex align-items-center mt-4">
                                                <span
                                                    className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">Read
                                                    More</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="card p-0 blog-card">
                                    <div className="img-overlay">
                                        <img src="img/blogThree.png" className="card-img-top img-fluid blog-card-img"
                                            alt="blog image"/>
                                    </div>
                                    <div className="card-body blog-card-body">
                                        <p className="p font-urbanist line-height-7 blog-card-date fw-400 mb-20">08 January,
                                            2023
                                        </p>
                                        <a href="blogDetails.html">
                                            <h3 className="card-title h3 fw-600 line-height-3 black-color">The Best
                                                Portfolio For Agency Design.</h3>
                                        </a>
                                        <a href="blogDetails.html">
                                            <div className="blog-card-btn d-flex align-items-center mt-4">
                                                <span
                                                    className="blog-card-btn-text mr-10 .font-urbanist fw-600 line-height-7 orange-color">Read
                                                    More</span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end blog --> */}
        {/* <!-- start contact --> */}
        <section className="home-contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="home-contact-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="img/orangeDot.png" alt="orange-dot"/>
                                    <p>My Contact</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    I WANT TO HEAR FROM YOU
                                </h2>
                            </div>
                            <div className="home-contact-info-container row row-mobile-margin mt-50 align-items-start">
                                <div className="col-12 col-md-8">
                                    <form>
                                        <div className="row g-4">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control home-contact-input"
                                                    placeholder="Your Name"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="email" className="form-control home-contact-input"
                                                    placeholder="Your Email"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="tel" className="form-control home-contact-input"
                                                    placeholder="Your phone"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control home-contact-input"
                                                    placeholder="Subject"/>
                                            </div>
                                            <div className="col-12">
                                                <textarea placeholder="Message"
                                                    className="form-control home-contact-input"/>
                                            </div>
                                            <div className="col-12">
                                                <div className="col-12">
                                                    <button type="submit"
                                                        className="btn orange-btn btn_effect row-mobile-margin mt-30"><span
                                                            className="z-1 position-relative">Send Me
                                                            Message</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12 col-md-4 home-contact-icon-container">
                                    <div className="row row-mobile-margin gy-3 gy-sm-0">
                                        <div className="col-12 d-flex align-items-center">
                                            <div className="mr-10">
                                                <div className="light-orange-bg-icon">
                                                    <i className="fa-solid fa-location-dot orange-color"></i>
                                                </div>
                                            </div>
                                            <div className="about-complete-project">
                                                <h4 className="fw-500 black-color h4">Address</h4>
                                                <p className="fw-400 secondary-black">
                                                    <a href="geo:37.7749,-122.4194">
                                                        202 Dog Hill Lane Beloit, KS 67420
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex align-items-center row-mobile-margin mt-50">
                                            <div className="mr-10">
                                                <div className="light-orange-bg-icon">
                                                    <i className="fa-solid fa-phone-volume orange-color"></i>
                                                </div>
                                            </div>
                                            <div className="about-years-experience">
                                                <h4 className="fw-500 black-color h4">Phone</h4>
                                                <p className="fw-400 secondary-black">
                                                    <a href="tel:+01589634755">+01589634755</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex align-items-center row-mobile-margin mt-50">
                                            <div className="mr-10">
                                                <div className="light-orange-bg-icon">
                                                    <i className="fa-solid fa-envelope orange-color"></i>
                                                </div>
                                            </div>
                                            <div className="about-years-experience">
                                                <h4 className="fw-500 black-color h4">Email</h4>
                                                <p className="fw-400 secondary-black">
                                                    <a href="mailto:credesign@gmail.com">
                                                        credesign@gmail.com
                                                    </a>
                                                </p>
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
        {/* <!-- end contact --> */}
        {/* <!-- start footer --> */}
        <section className="footer">
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                                <div className="footer-col-one">
                                    <img src="img/LogoWhite.png" className="footer-logo" alt="footer logo"/>
                                    <p className="p text-white line-height-7 mb-30 footer-col-one-texts">
                                        At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium
                                        volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati
                                    </p>
                                    <h3 className="h3 fw-500 line-height-3 text-white fw-500">
                                        credesign@gmail.com
                                    </h3>
                                </div>
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
                                            <a className="fw-400 p line-height-7 text-white" href="resume.html">Resume</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white"
                                                href="portfolio.html">Portfolio</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="blog.html">Blog</a>
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
                                            <a className="fw-400 p line-height-7 text-white" href="services.html">UI/UX
                                                Design</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="services.html">Mobile
                                                App</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="services.html">Graphics
                                                Design</a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="fw-400 p line-height-7 text-white" href="services.html">Web
                                                Developer</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 mt-5 mt-lg-0">
                                <h4 className="h4 fw-500 text-white">
                                    Follow me
                                </h4>
                                <div className="footer-social-media">
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
                                </div>
                                <div className="footer-contact">
                                    <div className="footer-contact-item d-flex align-items-center mb-20">
                                        <i className="fa-solid fa-location-dot footer-contact-icon mr-10 orange-color"></i>
                                        <p className="p text-white line-height-7 fw-400">
                                            202 Dog Hill Lane Beloit,KS 67420
                                        </p>
                                    </div>
                                    <div className="footer-contact-item d-flex align-items-center mb-20">
                                        <i className="fa-solid fa-phone-volume footer-contact-icon mr-10 orange-color"></i>
                                        <p>
                                            <a className="p text-white line-height-7 fw-400" href="tel:1-800-915-6270">
                                                1-800-915-6270
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
                                        All rights reserved &copy; 2023 Credesign
                                    </p>
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
        {/* <!-- end footer --> */}
    </main>
  );
}
