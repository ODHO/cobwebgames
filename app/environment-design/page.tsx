'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function EnvironmentDesign() {
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
    <div className="environment-design-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/environment-design/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Environment Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Set the Stage for an <b>Adventure</b>` }} />
              <p>Environments play a vital role in shaping player experience, and we work with you to design captivating digital backdrops that enhance every aspect of your game.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Environment Design <b>*</b> Environment Design <b>*</b></span>
          <span>Environment Design <b>*</b> Environment Design <b>*</b></span>
          <span>Environment Design <b>*</b> Environment Design <b>*</b></span>
          <span>Environment Design <b>*</b> Environment Design <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Environment Design <b class="c-green">services</b>` }} />
              <p>Whether expanding upon existing lore or pioneering something new, our tailored environment services shape any virtual landscape.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/environment-design/concept-design.webp" alt="*" />
                  <h3>Concept Design</h3>
                </div>
                <p>We&apos;ll craft conceptual sketches and reference assets to flesh out your vision. Feedback is gathered to refine concepts into fully realized 3D models. Initial designs guide look, feel, and technical considerations before full production.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/environment-design/art-modeling.webp" alt="*" />
                  <h3>3D Art & Modeling</h3>
                </div>
                <p>Using industry-leading software, our artists sculpt meticulous 3D models and textures. Environments are composed of reusable sets and props for flexibility. Modular-level design streamlines development. Assets are optimized to minimize cost and maximize performance.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/environment-design/modular.webp" alt="*" />
                  <h3>Modular Level Design</h3>
                </div>
                <p>We create modular environmental components like buildings, trees, and terrain pieces. Reusable assets are efficiently adapted to various regions. Complex interconnected zones are simplified. Unique locales emerge from systematic remixing of common elements.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/environment-design/lighting-materials.webp" alt="*" />
                  <h3>Lighting & Materials</h3>
                </div>
                <p>Atmospheric lighting and reflective materials bring spaces to life. Baked lighting and shadow maps promote real-time performance. Surfaces age and wear for realism. Shaders evoke the intended look through any hardware or conditions.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/environment-design/animation-vfx.webp" alt="*" />
                  <h3>Animation & VFX</h3>
                </div>
                <p>Strategic animations of plants, creatures, and objects are deployed. Scripted events unfold to accentuate narrative moments. Particle systems simulate weather, magic, and damage—cinematics immerse players in scripted scenarios.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/environment-design/optimization.webp" alt="*" />
                  <h3>Optimization & Performance</h3>
                </div>
                <p>Our multi-platform optimized flow minimizes polygon counts, draw calls, and loading times. The level of detail scaling ensures that the textures remain crisp on any device. Framerates maintain smooth gameplay on all intended platforms.</p>
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
