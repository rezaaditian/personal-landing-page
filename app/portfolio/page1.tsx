// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import {
//     PORTFOLIO_FILTERS,
//     PORTFOLIO_ITEMS,
//     filterPortfolioItems,
//     type PortfolioCategory,
// } from "@/app/data/portfolioData";

// const TestPortfolioPage = () => {
//     const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");
//     const filteredItems = filterPortfolioItems(PORTFOLIO_ITEMS, activeFilter);

//     return (
//         <div className="portfolio-page">
//             <Navbar />
//             <section className="portfolio-archieve">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="portfolio-wrapper">
//                                 <div className="section-heading-middle">
//                                     <div className="sub-heading d-flex align-items-center mx-auto">
//                                         <img src="img/orangeDot.png" alt="orange-dot" />
//                                         <p>Ini portfolio untuk testing</p>
//                                     </div>
//                                     <h2 className="black-color line-height-3 h2 text-uppercase text-center">
//                                         Cek my other portfolio broo
//                                     </h2>
//                                 </div>
//                                 <div className="mt-50 row-mobile-margin">
//                                     <div className="controls d-flex justify-content-center gap-1 gap-lg-4 mb-45 flex-wrap">
//                                         {PORTFOLIO_FILTERS.map(({ value, label }) => (
//                                             <button
//                                                 key={value}
//                                                 type="button"
//                                                 className={`control filter btn outline-0 border-0 secondary-black ${activeFilter === value ? "mixitup-control-active" : ""}`}
//                                                 onClick={() =>
//                                                     setActiveFilter(value)
//                                                 }
//                                             >
//                                                 {label}
//                                             </button>
//                                         ))}
//                                     </div>
//                                     <div className="portfolio-massonary-container">
//                                         {filteredItems.map((item) => (
//                                             <div
//                                                 key={item.id}
//                                                 className={`portfolio-massonary-items mix ${item.category} position-relative`}
//                                             >
//                                                 <img
//                                                     className="img-fluid object-cover"
//                                                     src={item.image}
//                                                     alt={item.title}
//                                                 />
//                                                 <div className="portfolio-card-overlay w-100 position-absolute top-0" />
//                                                 <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
//                                                     <div className="position-absolute mx-auto portfolio-card-overlay-contents">
//                                                         <p className="text-white fw-400 line-height-7">
//                                                             {item.subtitle}
//                                                         </p>
//                                                         <Link
//                                                             href={item.link}
//                                                             className="h4 text-white fw-600 line-height-3"
//                                                         >
//                                                             {item.title}
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// };

// export default TestPortfolioPage;