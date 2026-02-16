"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [spacerHeight, setSpacerHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const SCROLL_DOWN = 80;
        const SCROLL_UP = 40;

        const handleScroll = () => {
            const y = window.scrollY;
            if (y > SCROLL_DOWN) {
                const h = contentRef.current?.offsetHeight ?? 80;
                setSpacerHeight(h);
                setIsScrolled(true);
            } else if (y < SCROLL_UP) {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {isScrolled && (
                <div
                    style={{ height: spacerHeight || 80 }}
                    aria-hidden
                    className="w-full shrink-0"
                />
            )}
            <header
                className={`w-full z-50 transition-all duration-300 ease-out ${
                    isScrolled
                        ? "fixed top-0 left-0 right-0 bg-white shadow-xl"
                        : "bg-white contents shadow-none"
                }`}
            >
                <div ref={contentRef}>
            <div className="mobile-menu d-block d-md-none">
                <nav>
                    <ul className="menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="container d-none d-md-block">
                <div className="header-wrapper d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <Link href="/">
                            <img src="/img/Logo.png" alt="logo" /> 
                        </Link>
                    </div>
                    <div className="header-menu-wrapper main-menu ">
                        {/* <!-- nav menu --> */} 
                        <nav className="desktop-nav">
                            <ul className="header-menu d-flex flex-row justify-content-center menu">
                                <li className="px-3">
                                    <Link className="menu-link font-bold" href="/">Home</Link>
                                </li>
                                <li className="px-3">
                                    <Link className="menu-link font-bold" href="/about">About</Link>
                                </li>
                                <li className="px-3">
                                    <Link className="menu-link font-bold" href="/portfolio">Portfolio</Link>
                                </li>
                                <li className="px-3">
                                    <a className="menu-link font-bold" href="https://github.com/rezaaditian" target="_blank" rel="noopener noreferrer">Github</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <!-- header button --> */}
                    <div className="header-btn-wrapper">
                        <Link className="btn orange-btn btn_effect" href="/contact">
                            <span className="z-1 position-relative">contact me</span>
                        </Link>
                    </div>
                </div>
            </div>
                </div>
        </header>
        </>
    );
};

export default Navbar;