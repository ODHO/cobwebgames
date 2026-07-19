'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function GamePrototyping() {
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
    <div className="game-prototyping-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/prototyping-services/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Game Prototyping</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Test, Debug, Build &amp; <b>Repeat</b>` }} />
              <p>Our experts will test ideas and see how the game might work, figuring out what’s good and needs improvement before creating the final, balanced game.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Game Prototyping <b>*</b> Game Prototyping <b>*</b></span>
          <span>Game Prototyping <b>*</b> Game Prototyping <b>*</b></span>
          <span>Game Prototyping <b>*</b> Game Prototyping <b>*</b></span>
          <span>Game Prototyping <b>*</b> Game Prototyping <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Game Prototyping <b class="c-green">services</b>` }} />
              <p>We offer comprehensive solutions that provides a range of essential elements to facilitate the development and testing of video game concepts.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/prototyping-services/game_&_art_design_solutions.webp" alt="*" />
                  <h3>Game & Art Design Solutions</h3>
                </div>
                <p>Our talented team delivers exceptional game art and design services, crafting visually stunning and immersive environments, characters, and assets to captivate and engage players across various genres.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/prototyping-services/game_mechanics.webp" alt="*" />
                  <h3>Game Mechanics</h3>
                </div>
                <p>Our expert programmers focus on developing intuitive game mechanics, ensuring smooth gameplay, responsiveness, and an enjoyable experience for players while meeting the unique needs of each project.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/prototyping-services/multi_platform_prototype.webp" alt="*" />
                  <h3>Multi-platform Prototype</h3>
                </div>
                <p>Benefit from our ability to deploy game prototypes across multiple platforms, allowing for comprehensive testing, feedback, and optimization, ensuring your game&apos;s compatibility with diverse devices.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/prototyping-services/game_performance_testing.webp" alt="*" />
                  <h3>Backend Support Development</h3>
                </div>
                <p>Our engineers expertly build scalable backend infra to handle increasing loads. databases are optimized for performance. APIs are developed following standards. Continuous monitoring ensures uptime.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/prototyping-services/output_of_prototype.webp" alt="*" />
                  <h3>Output Of Prototype</h3>
                </div>
                <p>We provide working prototypes for review within committed timelines. Early prototypes test key features and workflows. Feedback is incorporated iteratively to refine experience and identify bugs early. Comprehensive documentation includes technical specs and edge case test results.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/prototyping-services/game_art_prototyping.webp" alt="*" />
                  <h3>Game Art Prototyping</h3>
                </div>
                <p>We create prototype art and are successful in rapid game prototyping, which gives you a sneak peek into the visual style of your game. Our team uses a mix of artistic expertise and, at times.</p>
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
