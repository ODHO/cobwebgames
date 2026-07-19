'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function Page3dGameDevelopment() {
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
    <div className="3d-game-development-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/3d-game-development/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Game Development</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Turning Concepts into <b>Immersive Games</b>` }} />
              <p>Cobweb is a premier provider of 3D game development services, specializing in cost-effective solutions. Utilizing the latest technology, we craft immersive 3D games customized to meet each client&apos;s unique requirements.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Game Development <b>*</b> 3D Game Development <b>*</b></span>
          <span>3D Game Development <b>*</b> 3D Game Development <b>*</b></span>
          <span>3D Game Development <b>*</b> 3D Game Development <b>*</b></span>
          <span>3D Game Development <b>*</b> 3D Game Development <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 3D Game Development <b class="c-green">services</b>` }} />
              <p>We deliver top-tier services aimed at crafting visually stunning and engaging games. Our comprehensive solutions are tailored to meet all your needs, ensuring a seamless and captivating gaming experience.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-development/top-of-the-line.webp" alt="*" />
                  <h3>Top-of-the-line</h3>
                </div>
                <p>Experience complete 3D game development with us. We utilize advanced 3D game development software to deliver a complete gaming solution.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-development/premium-art.webp" alt="*" />
                  <h3>Premium Art</h3>
                </div>
                <p>Our team excels in 3D game design, crafting both 2D and 3D visuals. Immerse players in beautifully designed worlds populated with striking characters and detailed props.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-development/blockchain.webp" alt="*" />
                  <h3>Blockchain & NFT Game Integration</h3>
                </div>
                <p>Harness the future of gaming with our expertise in blockchain and NFT integrations. Our team&apos;s proficiency ensures your game is at the forefront of this innovative technology.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-development/metaverse.webp" alt="*" />
                  <h3>3D Metaverse</h3>
                </div>
                <p>Our team offers long-term support and maintenance services after a game&apos;s initial release. We help improve games over time through strategic updates, optimizations, and issue fixes to maximize player engagement and revenue.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-development/animated-games.webp" alt="*" />
                  <h3>Animated Games</h3>
                </div>
                <p>Add vigor and life to your games. Our adept artists breathe life into 2D and 3D assets, crafting fluid, visually engaging, and self-selling animations.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-game-development/quality-testing.webp" alt="*" />
                  <h3>Quality Testing</h3>
                </div>
                <p>With years of expertise, we emphasize perfection. Our rigorous testing and quality assurance processes ensure that every game we develop meets the highest standards.</p>
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
