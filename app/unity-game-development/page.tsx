'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function UnityGameDevelopment() {
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
    <div className="unity-game-development-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/unity-game/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Unity Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Design, Build, &amp; Scale Your <b>Games</b>` }} />
              <p>Cobweb Games has years of experience leveraging Unity&apos;s powerful 2D and 3D tools to craft
						immersive gaming experiences across all major platforms and devices.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Unity Game Development <b>*</b> Unity Game Development <b>*</b></span>
          <span>Unity Game Development <b>*</b> Unity Game Development <b>*</b></span>
          <span>Unity Game Development <b>*</b> Unity Game Development <b>*</b></span>
          <span>Unity Game Development <b>*</b> Unity Game Development <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Unity Game Development <b class="c-green">services</b>` }} />
              <p>Our team leverages Unity&apos;s powerful capabilities to deliver high-quality, engaging, visually
						stunning games. We provide comprehensive solutions to meet your needs.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unity-game/custom-game.webp" alt="*" />
                  <h3>Custom Game Development</h3>
                </div>
                <p>Our custom game development service focuses on creating unique, tailor-made games that align
							with your vision and requirements. We work closely with you throughout the process to ensure
							every detail is meticulously crafted.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unity-game/prototyping.webp" alt="*" />
                  <h3>Prototyping and Concept Development</h3>
                </div>
                <p>Our prototyping and concept development service helps you visualize and refine your game
							ideas before full-scale production. We create detailed prototypes that showcase key gameplay
							mechanics, art styles, and user interactions.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unity-game/2d-3d-game-development.webp" alt="*" />
                  <h3>2D and 3D Game Development</h3>
                </div>
                <p>Specializing in game development, we bring a range of visual styles and gameplay experiences
							to life. Our 2D games feature-rich, hand-drawn art and smooth animations, while our 3D games
							boast realistic environments, detailed models, and dynamic lighting.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unity-game/multiplayer.webp" alt="*" />
                  <h3>Multiplayer Game Development</h3>
                </div>
                <p>Our team focuses on creating engaging and robust multiplayer experiences that connect players
							worldwide. Utilizing Unity&apos;s networking capabilities, we design and implement systems for
							real-time multiplayer gameplay.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unity-game/vr-ar-game.webp" alt="*" />
                  <h3>VR and AR Game Development</h3>
                </div>
                <p>We are at the forefront of VR and AR game development, creating immersive experiences that
							blend the virtual and real worlds. Using Unity&apos;s advanced VR and AR tools, we develop games
							that provide a unique and interactive experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unity-game/post-launch.webp" alt="*" />
                  <h3>Post-Launch Support and Maintenance</h3>
                </div>
                <p>Our commitment to your game doesn&apos;t end at launch. We offer comprehensive post-launch support
							and maintenance to ensure your game remains stable, updated, and engaging for players.
							Cobweb ensures retention and success.</p>
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
