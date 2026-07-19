'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function MobileGameDevelopment() {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const initSlick = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).$;
        $('.mob-slider').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: false,
          autoplay: true,
          responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } }
          ]
        });
      } else {
        timer = setTimeout(initSlick, 100);
      }
    };
    initSlick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mobile-game-development-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/2d-game/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Mobile Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Design, Develop, and Dominate in <b>2D</b>` }} />
              <p>Cobweb is your go-to company for the best in mobile game development, delivering outstanding user
                        experiences on both native and cross-platform apps!</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Mobile Game Development <b>*</b> Mobile Game Development <b>*</b></span>
          <span>Mobile Game Development <b>*</b> Mobile Game Development <b>*</b></span>
          <span>Mobile Game Development <b>*</b> Mobile Game Development <b>*</b></span>
          <span>Mobile Game Development <b>*</b> Mobile Game Development <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Mobile Game Development <b class="c-green">services</b>` }} />
              <p>Step into a world of mobile gaming excellence with Cobweb. With a focus on quality and
                        innovation, our games are designed to stand out and succeed.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-01.webp" alt="*" />
                  <h3>Android Game Development</h3>
                </div>
                <p>We breathe life into your gaming concepts, customizing them to integrate seamlessly with the
                            Android ecosystem. Our dedicated team guarantees a fluid and captivating user experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-02.webp" alt="*" />
                  <h3>iPhone Game Development</h3>
                </div>
                <p>Our iPhone app development services provide smooth and engaging user experiences, positioning
                            us as a frontrunner in iOS game development.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-03.webp" alt="*" />
                  <h3>Web Game Development</h3>
                </div>
                <p>Utilizing cutting-edge technologies, we guarantee a seamless and immersive gaming encounter,
                            pushing the limits of what web-based games can accomplish.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-04.webp" alt="*" />
                  <h3>AR/VR Game Development</h3>
                </div>
                <p>Emphasizing seamless interactivity and immersive storytelling, Cobweb turns your gaming
                            concepts into virtual realities that captivate audiences.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-05.webp" alt="*" />
                  <h3>LiveOps</h3>
                </div>
                <p>Our expert LiveOps services leverage real-time data from players to design engaging gaming
                            experiences, optimize in-game economics, and build player communities.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-06.webp" alt="*" />
                  <h3>Mobile Game Prototyping</h3>
                </div>
                <p>We turn your game idea into a functional prototype, allowing assessment of your core features
                            and mechanics. We quickly create prototypes using industry-leading tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaTwo />
      <Platform />

      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      <Technologies />
      <Reviews />
      <Faqs />
      <FooterForm />
    </div>
  );
}
