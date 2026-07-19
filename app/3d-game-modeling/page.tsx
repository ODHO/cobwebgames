'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function Page3dGameModeling() {
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
    <div className="3d-game-modeling-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/3d-game-modeling/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Game Modeling</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Photorealism Just Got <b>Better</b>` }} />
              <p>Be a part of a world where imagination becomes reality with our advanced 3D game modeling services. Take your gaming experience to new heights today!</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Game Modeling <b>*</b> 3D Game Modeling <b>*</b></span>
          <span>3D Game Modeling <b>*</b> 3D Game Modeling <b>*</b></span>
          <span>3D Game Modeling <b>*</b> 3D Game Modeling <b>*</b></span>
          <span>3D Game Modeling <b>*</b> 3D Game Modeling <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 3D Game Modeling <b class="c-green">services</b>` }} />
              <p>We offer top-tier 3D game modeling services, transforming your game concepts into immersive virtual realities.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-modeling/3d-weapon.webp" alt="*" />
                  <h3>3D Weapon Modeling For Games</h3>
                </div>
                <p>We craft a wide range of stylized or realistic weapons, including firearms, grenades, crossbows, axes, halberds, and magic wands, tailored to your game&apos;s genre and theme, giving lifelike textures.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-modeling/3d-props.webp" alt="*" />
                  <h3>3D Props Modeling For Game</h3>
                </div>
                <p>We create low-poly static scenery for backgrounds and high-poly interactive props to enhance player engagement, all tailored to the specific purpose of each model.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-modeling/3d-character.webp" alt="*" />
                  <h3>3D Character Modeling For Game</h3>
                </div>
                <p>Our creators create exceptional human-like and animal-like characters using advanced modeling techniques and modern tools. We deliver photorealistic, stylized, or cartoonish 3D characters to match your style.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-modeling/3d-concept.webp" alt="*" />
                  <h3>3D Modeling Concept</h3>
                </div>
                <p>The concept is where everything starts. When creating the concept, we offer you development from scratch in any way you prefer while keeping up with the trends.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-modeling/3d-vehicle.webp" alt="*" />
                  <h3>3D Vehicle Modeling For Games</h3>
                </div>
                <p>We design vehicles that provide an exciting driving experience, such as model high-poly and low-poly cars, motorcycles, spaceships, military vehicles, and more, ensuring smooth animations for each type.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-modeling/3d-environment.webp" alt="*" />
                  <h3>3D Environment Modeling for Games</h3>
                </div>
                <p>Our extensive 3D game design expertise creates breathtaking game backgrounds and scenery, from rocks and plants to buildings and structures, for both real-time rendering and pre-rendering to suit your needs.</p>
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
