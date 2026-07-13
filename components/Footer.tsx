import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="logo-wraper">
                        <img className="img-03 lazy"
                            src="/assets/images/logo-f.svg" alt="*" />
                        <p>We craft extraordinary, immersive games that captivate and inspire.</p>
                        <ul className="ssm-icons d-flex align-items-center">
                            <li><a href="https://www.youtube.com/@cobweb-games" className="icon-dri"><i
                                        className="fa-brands fa-youtube"></i></a></li>
                            <li><a href="javascript:;" className="icon-twt"><img
                                        src="/assets/images/twitterx.svg" alt="*" /></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=61563748882713" className="icon-fb"
                                    target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/cobweb-games1" className="icon-link"
                                    target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.instagram.com/cobweb.games/" className="icon-inst" target="_blank"><i
                                        className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-3 offset-lg-1 col-md-6">
                            <h3>Quick Links</h3>
                            <ul className="f-menu">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/portfolio">Portfolio</Link></li>
                                <li><Link href="/our-process">Our Process</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                                <li><Link href="/resource-packs">Resource Packs</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h3>Services</h3>
                            <ul className="f-menu">
                                <li><Link href="/game-art">Game Art</Link></li>
                                <li><Link href="/game-development">Game Development</Link></li>
                                <li><Link href="/game-animation">Game Animation</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h3>Contact Info</h3>
                            <ul className="contact-info">
                                <li>
                                    <i className="fas fa-phone-volume"></i>
                                    <a href="tel:(855) 773-1064">Call Now</a>
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <a href="mailto:support@cobwebgames.com">support@cobwebgames.com</a>
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <a href="javascript:;" className="addres">580 California Street San Francisco CA 94104 </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container copy-rights">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <p>&#169;{currentYear} Cobweb Games. All rights reserved.</p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <ul className="terms-menu d-flex align-items-center justify-content-end">
                        <li><Link href="/term-and-condition">Terms & Conditions</Link></li>
                        <li>-</li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
}
