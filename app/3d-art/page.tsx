'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function Page3dArt() {
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
    <div className="3d-art-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/3d-art/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Art</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Your Virtual 3D  <b>Artists</b>` }} />
              <p>We combine technical expertise with artistic vision to create exceptional and customized 3D assets that elevate your visual storytelling and gameplay experience.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Art <b>*</b> 3D Art <b>*</b></span>
          <span>3D Art <b>*</b> 3D Art <b>*</b></span>
          <span>3D Art <b>*</b> 3D Art <b>*</b></span>
          <span>3D Art <b>*</b> 3D Art <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 3D Art <b class="c-green">services</b>` }} />
              <p>We produce immersive game content with our 3D Art Services, from detailed model environments to animations that bring your game world to life.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-art/hard-surface.webp" alt="*" />
                  <h3>3D Hard Surface Design</h3>
                </div>
                <p>The majority of the objects in the games are made of hard surfaces. To make them look realistic and stylized, we use textures to give them life.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-art/game-modelling.webp" alt="*" />
                  <h3>3D Game Modelling</h3>
                </div>
                <p>For high-quality creation, we think out of the box and challenge ourselves to create lifelike 3D game models that will surely catch the eyes.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-art/sculpting.webp" alt="*" />
                  <h3>3D Sculpting</h3>
                </div>
                <p>Our 3D sculpture teams will ensure your idea is beautifully and skillfully sculptured for marketing and advertising.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-art/character-animation.webp" alt="*" />
                  <h3>3D Characters Design</h3>
                </div>
                <p>Our 3D artists bring the expertise and skills to provide first-class character design 3D services and create high-quality and appealing 3D characters.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-art/environment-design.webp" alt="*" />
                  <h3>3D Environment Design</h3>
                </div>
                <p>By working with us, we can create realistic designs for your character according to your specific needs and requirements.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-art/vehicle-design.webp" alt="*" />
                  <h3>3D Vehicle Design</h3>
                </div>
                <p>Vehicles are important in video games, so we ensure they grab your attention as our artists create photorealistic vehicles for your projects.</p>
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
