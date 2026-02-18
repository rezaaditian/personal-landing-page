"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    PORTFOLIO_FILTERS,
    PORTFOLIO_ITEMS,
    filterPortfolioItems,
    type PortfolioCategory,
} from "@/app/data/portfolioData";

const HOMEPAGE_PORTFOLIO_LIMIT = 6; // 2 baris × 3 kolom untuk preview di homepage

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("all");
    const filteredItems = filterPortfolioItems(PORTFOLIO_ITEMS, activeFilter);
    const displayedItems = filteredItems.slice(0, HOMEPAGE_PORTFOLIO_LIMIT);

    return (
        <section className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="portfolio-wrapper">
                            <div className="section-heading-middle">
                                <div className="sub-heading d-flex align-items-center mx-auto">
                                    <img src="/img/orangeDot.png" alt="orange-dot" />
                                    <p>My Portfolio</p>
                                </div>
                                <h2 className="black-color line-height-3 h2 text-uppercase text-center">
                                    VISIT MY PORTFOLIO
                                </h2>
                            </div>
                            <div className="mt-50 row-mobile-margin">
                                <div className="controls d-flex justify-content-center flex-wrap gap-1 gap-lg-4 mb-45">
                                    {PORTFOLIO_FILTERS.map(({ value, label }) => (
                                        <button
                                            key={value}
                                            type="button"
                                            className={`control filter btn outline-0 border-0 secondary-black ${activeFilter === value ? "mixitup-control-active" : ""}`}
                                            onClick={() => setActiveFilter(value)}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                                <div className="portfolio-massonary-container">
                                    {displayedItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`portfolio-massonary-items mix ${item.category} position-relative`}
                                        >
                                            <img
                                                className="img-fluid"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            <div className="portfolio-card-overlay w-100 position-absolute top-0" />
                                            <div className="d-flex w-100 position-absolute bottom-0 left-0 justify-content-center align-items-center">
                                                <div className="position-absolute mx-auto portfolio-card-overlay-contents">
                                                    <p className="text-white fw-400 line-height-7">
                                                        {item.subtitle}
                                                    </p>
                                                    <Link
                                                        href={item.link}
                                                        className="h4 text-white fw-600 line-height-3"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-center mt-50">
                                    <Link
                                        className="btn btn_effect home-banner-btn orange-btn"
                                        href="/portfolio"
                                    >
                                        <span className="position-relative z-1">
                                            More Portfolio
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
