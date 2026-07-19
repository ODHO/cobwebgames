'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function PlayToEarnGame() {
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
    <div className="play-to-earn-game-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/2d-game/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Play To Earn Game</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Integrate Play-to-Earn in Your <b>Games!</b>` }} />
              <p>Cobweb helps you to develop a play-to-earn games platform integrated with fungible and non-fungible tokens. Get in touch today!</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Play to Earn Game Development <b>*</b> Play to Earn Game Development <b>*</b></span>
          <span>Play to Earn Game Development <b>*</b> Play to Earn Game Development <b>*</b></span>
          <span>Play to Earn Game Development <b>*</b> Play to Earn Game Development <b>*</b></span>
          <span>Play to Earn Game Development <b>*</b> Play to Earn Game Development <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Play to Earn Game Development <b class="c-green">services</b>` }} />
              <p>Experience the thrill of our play-to-earn games, where every move you make in our immersive 3D worlds earns you real rewards.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-01.webp" alt="*" />
                  <h3>NFT Game Development</h3>
                </div>
                <p>The NFT gaming platform is designed with a play-to-earn model, rewarding gamers for participating with an engaging gaming experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-02.webp" alt="*" />
                  <h3>Metaverse Game Development</h3>
                </div>
                <p>We provide comprehensive play-to-earn metaverse game development services that allow players to earn in-game assets with real-world value through gameplay.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-03.webp" alt="*" />
                  <h3>P2E Game Design Development</h3>
                </div>
                <p>Our talented designers create stunning P2E game platforms featuring creative 3D characters and unique NFT collections, enhancing your gaming platform and facilitating smooth transactions.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-04.webp" alt="*" />
                  <h3>Game Testing</h3>
                </div>
                <p>Our expert team meticulously identifies and resolves bugs and complexities. We conduct thorough evaluations to ensure a high-performing play-to-earn gaming platform.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-05.webp" alt="*" />
                  <h3>Game Maintenance and Support</h3>
                </div>
                <p>Ongoing maintenance and support are vital to enhancing your gaming platform with new features, designs, and customizations, ensuring seamless operation and user satisfaction.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-game/service-icon-06.webp" alt="*" />
                  <h3>Blockchain Integration</h3>
                </div>
                <p>We specialize in integrating blockchain technology into gaming platforms, ensuring secure transactions, ownership verification of in-game assets, and seamless interoperability across decentralized networks.</p>
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
