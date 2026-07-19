'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function Page3dEnvironmentDesign() {
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
    <div className="3d-environment-design-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/3d-environment/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Environment Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Shaping Virtual Worlds That Tell <b>Your Story.</b>` }} />
              <p>Our dynamic and efficient services can be molded according to the scale and style of your project. As a part of our 3D environment design services, we offer everything necessary to create unique and unforgettable digital worlds.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Environment Design <b>*</b> 3D Environment Design <b>*</b></span>
          <span>3D Environment Design <b>*</b> 3D Environment Design <b>*</b></span>
          <span>3D Environment Design <b>*</b> 3D Environment Design <b>*</b></span>
          <span>3D Environment Design <b>*</b> 3D Environment Design <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 3D Environment Design <b class="c-green">services</b>` }} />
              <p>Leveraging extensive experience and the industry&apos;s best practices in various gaming and non-gaming projects, our artists are experts in shaping any digital space in three dimensions.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-environment/3d-stylized.webp" alt="*" />
                  <h3>3D Stylized Environment</h3>
                </div>
                <p>If you need to convey a specific style, mood, or atmosphere, our team will certainly find a way to visualize it through custom environments.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-environment/3d-cartoon.webp" alt="*" />
                  <h3>3D Cartoon Environment</h3>
                </div>
                <p>Our 3D artists model cartoon environments: theme-based locations, conceptual scenery, and assets that ensure an unforgettable experience for a viewer or player.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-environment/environment-props.webp" alt="*" />
                  <h3>Environment Props</h3>
                </div>
                <p>Setting a stage for your 3D environment, our modeling artists will fill it out with conceptual props and assets aligned with a particular style as well as the level of detail, depending on your product specifications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-environment/3d-photorealistic.webp" alt="*" />
                  <h3>3D Photorealistic Environment</h3>
                </div>
                <p>Our studio creates stunningly lifelike virtual worlds using cutting-edge 3D modeling and photogrammetry. Transport clients to landscapes, cities, and buildings with photorealism rivaling physical reality in every breathtaking detail.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-environment/3d-character.webp" alt="*" />
                  <h3>3D Character</h3>
                </div>
                <p>Our team specializes in creating a wide range of character styles, from stylized and cartoonish to highly detailed and photorealistic, starting with initial sketches and refining them to perfection.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-environment/object.webp" alt="*" />
                  <h3>Object Design</h3>
                </div>
                <p>Whether you need vehicles, weapons, landscapes, or characters, we&apos;ll create 3D virtual worlds with an experiential depth, transporting clients into any fully immersive, hyper-detailed reality.</p>
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
