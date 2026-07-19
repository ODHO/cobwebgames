'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function GameLevelDesign() {
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
    <div className="game-level-design-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/game-level/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Game Level Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Gripping Levels That Keep Players <b>Hooked</b>` }} />
              <p>We oversee all aspects of game-level design, including documentation development, to create a perfect blend of visuals and mechanics, resulting in a memorable project release.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Game Level Design <b>*</b> Game Level Design <b>*</b></span>
          <span>Game Level Design <b>*</b> Game Level Design <b>*</b></span>
          <span>Game Level Design <b>*</b> Game Level Design <b>*</b></span>
          <span>Game Level Design <b>*</b> Game Level Design <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Game Level Design <b class="c-green">services</b>` }} />
              <p>Our specialists bring expertise in different game genres and styles and can offer the best-level designs to captivate different audiences.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-level/level-design.webp" alt="*" />
                  <h3>Level Design Documentation</h3>
                </div>
                <p>We compile detailed documents outlining game mechanics, limitations, rules, and other elements to clarify the game concept, story, and structure.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-level/level-constraint.webp" alt="*" />
                  <h3>Level Constraint Analysis</h3>
                </div>
                <p>We analyze essential game variables, conditions, and limitations to align with the game&apos;s style and narrative, ensuring a coherent gameplay experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-level/preproduction.webp" alt="*" />
                  <h3>Preproduction Blueprint Development</h3>
                </div>
                <p>We outline the game&apos;s structure and create a plan that defines all aspects, from level pacing and objectives to the consistency of each element with the game&apos;s style.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-level/level-concept.webp" alt="*" />
                  <h3>Level Concept Art Creation</h3>
                </div>
                <p>During concept art creation, we consider gameplay elements, visuals, interfaces, storylines, and more to ensure a cohesive presentation at the game level.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-level/level-progression.webp" alt="*" />
                  <h3>Level Progression</h3>
                </div>
                <p>As part of this high-level design service, we develop level dynamics to provide a smooth user experience that allows players to progress seamlessly through the level.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/game-level/level-modelling.webp" alt="*" />
                  <h3>Level Modelling</h3>
                </div>
                <p>Our experts create level prototypes to check for consistency, optimization, and errors, ensuring a polished and cohesive gameplay experience.</p>
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
