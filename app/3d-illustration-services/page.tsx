'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function Page3dIllustrationServices() {
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
    <div className="3d-illustration-services-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/3d-illustration/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Illustration Services</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Your Vision, Our Expertise in Three <b>Dimensions!</b>` }} />
              <p>Our company provides custom 3D illustration services for games to shape your idea and bring it to life in a clear and polished form. Our game illustrations will grab the attention of your audience.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Illustration Services <b>*</b> 3D Illustration Services <b>*</b></span>
          <span>3D Illustration Services <b>*</b> 3D Illustration Services <b>*</b></span>
          <span>3D Illustration Services <b>*</b> 3D Illustration Services <b>*</b></span>
          <span>3D Illustration Services <b>*</b> 3D Illustration Services <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 3D Illustration <b class="c-green">services</b>` }} />
              <p>Our illustration services cover a wide range of styles and techniques, from 2D character and environment design to detailed stylized 3D illustrations.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-illustration/character-concepts.webp" alt="*" />
                  <h3>Character Concepts</h3>
                </div>
                <p>We work closely with you to conceptualize an array of compelling characters and creatures through an iterative process of drawing multiple concept sketches with varied poses, expressions, and costume/gear designs until the ideal look is achieved.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-illustration/environmental-concepting.webp" alt="*" />
                  <h3>Environmental Concepting</h3>
                </div>
                <p>Through fully rendered 3D scenes or painted 2D visuals, our concept artists will bring your game&apos;s worlds and levels to life in a realistic yet stylized way to establish mood, gameplay opportunities, and design direction before full development begins.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-illustration/ui-ux.webp" alt="*" />
                  <h3>UI/UX Concepts</h3>
                </div>
                <p>From intricate menus and heads-up displays to innovative item collections or crafting interfaces, our team will rapidly prototype a variety of usable and visually engaging UI/UX concepts leveraging 3D elements that complement your title&apos;s theme.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-illustration/mood-board.webp" alt="*" />
                  <h3>3D Mood Board Creation</h3>
                </div>
                <p>We can craft highly detailed yet representative 3D environment scenes featuring characters, effects, and more, packaged as an interactive mood board tool for your designers.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-illustration/scene-layouts.webp" alt="*" />
                  <h3>3D Scene Layouts</h3>
                </div>
                <p>Our artists will quickly block out 3D scenes, placing characters, objects, basic materials, and lighting to demonstrate level flow and prove out mechanics in a virtual space.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-illustration/visual-development.webp" alt="*" />
                  <h3>Visual Development</h3>
                </div>
                <p>We help bring game ideas to life through rapid yet polished 3D sketches and animations, from character abilities to mechanics demonstrations, geared toward fueling discussions and driving development in the right creative direction.</p>
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
