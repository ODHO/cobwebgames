'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function Page2dArt() {
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
    <div className="2d-art-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/2d-art/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>2D Game Art Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `2D Game Art <b>Studio</b>` }} />
              <p>With dynamic VFX, immersive surroundings, and appealing character designs, our 2D artists and
						designers will elevate your idea to a whole new level.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `our 2d <b class="c-green">services</b>` }} />
              <p>We produce game content for all popular 2D game art genres, including monochromatic, flat, and
						pixel art.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-art/service-icon-01.webp" alt="*" />
                  <h3>2D Concept Art for Games</h3>
                </div>
                <p>Our 2D artists quickly grasp the heart of your game while refining concepts, providing you
							with a visual blueprint that paves the road for future commercial success.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-art/service-icon-02.webp" alt="*" />
                  <h3>2D Game Characters</h3>
                </div>
                <p>Your game&apos;s cast will make a lasting impact on players thanks to our outstanding 2D character
							designs, making them an unforgettable and enticing aspect of the experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-art/service-icon-03.webp" alt="*" />
                  <h3>2D Game Environments</h3>
                </div>
                <p>Our 2D game environments are skillfully designed to transport players to new realms and
							immerse them in vibrant settings that enhance gameplay and tell a story.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-art/service-icon-04.webp" alt="*" />
                  <h3>2D Game Art Animation</h3>
                </div>
                <p>To keep players engaged, our 2D game art animation goes beyond basic movement, bringing your
							game&apos;s landscapes and characters to life with stunning visuals.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-art/service-icon-05.webp" alt="*" />
                  <h3>Game Icons and Items</h3>
                </div>
                <p>Our 2D game elements and icons are created to be aesthetically pleasing, memorable, and
							functional, enhancing the usability of your game and setting it apart from others.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/2d-art/service-icon-06.webp" alt="*" />
                  <h3>2D Game Assets</h3>
                </div>
                <p>Our services for creating 2D art assets provide a variety of beautiful and functional game
							graphics that enhance gameplay and elevate your game to new heights.</p>
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
