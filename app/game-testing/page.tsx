'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function GameTesting() {
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
    <div className="game-testing-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/game-testing/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Game Testing</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Get It Right, <b>First Time.</b>` }} />
              <p>Games are fun, but gaming software needs serious testing to meet high user standards. With our deep domain expertise and singular focus on testing, we’re not just another player.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Game Testing Services <b>*</b> Game Testing Services <b>*</b></span>
          <span>Game Testing Services <b>*</b> Game Testing Services <b>*</b></span>
          <span>Game Testing Services <b>*</b> Game Testing Services <b>*</b></span>
          <span>Game Testing Services <b>*</b> Game Testing Services <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Game Testing <b class="c-green">services</b>` }} />
              <p>We provide comprehensive game-testing solutions to identify bugs, optimize performance, and ensure compatibility across all devices and platforms through our expertise in functionality.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-testing/functionality.webp" alt="*" />
                  <h3>Game Functionality Testing</h3>
                </div>
                <p>We are committed to delivering high-quality gaming experiences for players across all platforms and devices. Our rigorous testing processes help ensure games "just work" everywhere without compatibility or functionality issues.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-testing/mobile-game.webp" alt="*" />
                  <h3>Mobile Game Testing</h3>
                </div>
                <p>We test games on all major mobile platforms, like iOS and Android. Our tests cover responsiveness, crashes, and compatibility with various devices and resolutions. Localization is tested across languages and regions.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-testing/game-compatibility.webp" alt="*" />
                  <h3>Game Compatibility Testing</h3>
                </div>
                <p>Our game compatibility testing focuses on validating games across all targeted platforms, devices, and their numerous software and hardware configurations. This involves extensive matrix testing using various devices and setups.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-testing/performance.webp" alt="*" />
                  <h3>Game Performance Testing</h3>
                </div>
                <p>We analyze frame rates, load times, memory usage, and other performance metrics. Stress tests are done to identify lag or crashes with high concurrency. Optimization tests are run to measure the impact of code and graphic changes.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-testing/console.webp" alt="*" />
                  <h3>Console Game Testing</h3>
                </div>
                <p>Compatibility is tested across PlayStation, Xbox, and Switch versions. Tests ensure controls, graphics, and achievements are properly functioning on each platform. Multiplayer and online features are pitted against network edge cases.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-testing/pc-game.webp" alt="*" />
                  <h3>PC Game Testing</h3>
                </div>
                <p>Games are tested on various hardware and software configurations. Compatibility issues are identified across OS, resolutions, and input devices. Localization testing validates all text and assets rendered properly.</p>
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
