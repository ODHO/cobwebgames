'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function UnrealEngineGameDevelopment() {
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
    <div className="unreal-engine-game-development-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/unreal-engine/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Harness the Power of <b>Unreal Engine</b>` }} />
              <p>Experience the next level of game development with Cobweb&apos;s Unreal Engine services. Our expert team harnesses the power of Unreal Engine, bringing your vision to life with unparalleled graphics and immersive gameplay.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Unreal Engine Game Development <b>*</b> Unreal Engine Game Development <b>*</b></span>
          <span>Unreal Engine Game Development <b>*</b> Unreal Engine Game Development <b>*</b></span>
          <span>Unreal Engine Game Development <b>*</b> Unreal Engine Game Development <b>*</b></span>
          <span>Unreal Engine Game Development <b>*</b> Unreal Engine Game Development <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Unreal Engine Game Development<b class="c-green">services</b>` }} />
              <p>With a full suite of services tailored to meet your needs, from concept to launch and beyond, we are dedicated to bringing your vision to life with creativity and technical expertise.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unreal-engine/full-cycle.webp" alt="*" />
                  <h3>Full-Cycle Game Development</h3>
                </div>
                <p>We provide comprehensive game development services and manage every step of the process under one roof. This allows you to concentrate on growing your business while we handle the creation of your product.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unreal-engine/xr-based.webp" alt="*" />
                  <h3>XR-Based Game Development</h3>
                </div>
                <p>Our team leverages Unreal Engine for AR/VR game development and immersive experience. By expertly using specific UE tools, we create a realistic gameplay environment for players.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unreal-engine/nft-game.webp" alt="*" />
                  <h3>Metaverse/NFT Game Development</h3>
                </div>
                <p>Unreal Engine&apos;s robust capabilities are ideal for complex projects like Metaverse and NFT game development. With our extensive blockchain technology expertise, your project will be uniquely distinguished.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unreal-engine/multiplayer.webp" alt="*" />
                  <h3>Post-Launch Support</h3>
                </div>
                <p>Our team offers long-term support and maintenance services after a game&apos;s initial release. We help improve games over time through strategic updates, optimizations, and issue fixes to maximize player engagement and revenue.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unreal-engine/photo-realistic.webp" alt="*" />
                  <h3>Photo-Realistic Visuals</h3>
                </div>
                <p>We utilize the latest Unreal Engine technologies like Nanite and Lumen to create hyper-realistic in-game graphics, assets, and cinematic visual effects. Our focus is on high-fidelity visual quality.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/unreal-engine/next-gen.webp" alt="*" />
                  <h3>Next-Gen Optimizations</h3>
                </div>
                <p>As experts in Unreal Engine, we know how to fully optimize games for the latest-generation consoles and hardware. Our output meets the cutting-edge graphics and processing capabilities of platforms.</p>
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
