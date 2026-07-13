'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 d-none d-lg-block">
                            <div className="content-wrap d-flex align-items-center">
                                <img className="lazy content-wrap-img"
                                    src="/assets/images/cup-icon.gif"
                                    alt="*" />
                                <p>Top Rated Game Development Company</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 text-center">
                            <div className="logo-wrap flex justify-center items-center">
                                <img className="logo-icon icon-01 lazy"
                                    src="/assets/images/logo-sider-2.svg"
                                    alt="*" />
                                <Link href="/">
                                    <img className="lazy"
                                        src="/assets/images/logo.svg"
                                        alt="*" />
                                </Link>
                                <img className="logo-icon icon-02 lazy"
                                    src="/assets/images/logo-sider.svg"
                                    alt="*" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-none d-lg-block">
                            <ul className="btn-wrap d-flex justify-content-end">
                                <li>
                                    <Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menu-btn">
                    <a href="javascript:;">
                        <img src="/assets/images/menu-icon.webp" alt="*" />
                    </a>
                </div>
            </header>

            {/* Full-screen Mega Navigation Menu */}
            <div className="menu-wapper">
                <div id="wrapper" onTouchStart={() => { }}>
                    <div className="bg"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 500" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <radialGradient id="polygonGradient" cx="50%" cy="50%" r="70%" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#414141" />
                                <stop offset="100%" stopColor="black" />
                            </radialGradient>
                            <radialGradient id="transparentGradient" cx="50%" cy="50%" r="75%" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" style={{ stopColor: 'rgb(29, 29, 29)', stopOpacity: 0.4 }} />
                                <stop offset="100%" style={{ stopColor: 'rgb(29, 29, 29)' }} />
                            </radialGradient>
                        </defs>
                        <g id="hexs" fill="url(#polygonGradient)">
                            <polygon points="-34.2 38.5 -34.2 0.5 -1.3 -18.5 31.6 0.5 31.6 38.5 -1.3 57.5 -34.2 38.5" />
                            <polygon points="35.2 38.5 35.2 0.5 68.1 -18.5 101.1 0.5 101.1 38.5 68.1 57.5 35.2 38.5" />
                            <polygon points="104.7 38.5 104.7 0.5 137.6 -18.5 170.5 0.5 170.5 38.5 137.6 57.5 104.7 38.5" />
                            <polygon points="174.1 38.5 174.1 0.5 207 -18.5 240 0.5 240 38.5 207 57.5 174.1 38.5" />
                            <polygon points="243.6 38.5 243.6 0.5 276.5 -18.5 309.4 0.5 309.4 38.5 276.5 57.5 243.6 38.5" />
                            <polygon points="313 38.5 313 0.5 345.9 -18.5 378.9 0.5 378.9 38.5 345.9 57.5 313 38.5" />
                        </g>
                        <circle id="redDot" cx="0" cy="0" r="3" fill="red"></circle>
                    </svg>
                </div>

                <div className="container-fuild">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="logo-wrapper">
                                <Link href="/">
                                    <img className="lazy"
                                        src="/assets/images/logo.svg"
                                        alt="*" />
                                </Link>
                            </div>
                            <a href="javascript:;" className="close-menu">X</a>
                        </div>
                    </div>
                    <div className="row" style={{ borderTop: '1px solid #fff' }}>
                        <div className="col-lg-3 col-md-3">
                            <div className="menu-list-wrapper">
                                <h3>Quick Links</h3>
                                <ul className="list-item">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/our-process">Our Process</Link></li>
                                    <li><Link href="/portfolio">Our Portfolio</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                    <li><Link href="/resource-packs">Resource Packs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="menu-list-wrapper">
                                <h3>Game Art</h3>
                                <ul className="list-item">
                                    <li><Link href="/2d-art">2D art</Link></li>
                                    <li><Link href="/3d-art">3D art</Link></li>
                                    <li><Link href="/3d-character-modeling">3D Character Design</Link></li>
                                    <li><Link href="/3d-environment-design">3D Environment Design</Link></li>
                                    <li><Link href="/3d-game-modeling">3D Game Model</Link></li>
                                    <li><Link href="/3d-illustration-services">3D Illustration Services</Link></li>
                                    <li><Link href="/character-design">Character Design</Link></li>
                                    <li><Link href="/environment-design">Environment design</Link></li>
                                    <li><Link href="/game-level-design">Game Level Design</Link></li>
                                    <li><Link href="/ui-ux-design">UIUX Design</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="menu-list-wrapper">
                                <h3>Game Development</h3>
                                <ul className="list-item">
                                    <li><Link href="/3d-game-development">3D Game Development</Link></li>
                                    <li><Link href="/game-prototyping">Game Prototyping</Link></li>
                                    <li><Link href="/game-testing">Game Testing</Link></li>
                                    <li><Link href="/mobile-game-development">Mobile Game</Link></li>
                                    <li><Link href="/play-to-earn-game">Play to Earn Games</Link></li>
                                    <li><Link href="/unity-game-development">Unity game</Link></li>
                                    <li><Link href="/unreal-engine-game-development">Unreal engine game</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="menu-list-wrapper">
                                <h3>Game Animation</h3>
                                <ul className="list-item">
                                    <li><Link href="/2d-animation">2D Animation</Link></li>
                                    <li><Link href="/3d-animation">3D Animation</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ borderTop: '1px solid #fff' }}>
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-wraper">
                                <h4>Call Us</h4>
                                <span>
                                    <i className="fas fa-phone-volume"></i>
                                    <a href="tel:+18557731064">+1-855-773-1064</a>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-wraper">
                                <h4>Email Us</h4>
                                <span>
                                    <i className="fas fa-envelope"></i>
                                    <a href="mailto:support@cobwebgames.com">support@cobwebgames.com</a>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-wraper">
                                <h4>Address</h4>
                                <span>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <a href="javascript:;" className="addres">580 California Street San Francisco CA 94104</a>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-wraper">
                                <h4>Follow Us</h4>
                                <ul className="ssm-icons d-flex align-items-center">
                                    <li><a href="https://www.youtube.com/@cobweb-games" className="icon-dri"><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=61563748882713" className="icon-fb" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/cobweb-games1" className="icon-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.instagram.com/cobweb.games/" className="icon-inst" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
