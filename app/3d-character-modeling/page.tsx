'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function Page3dCharacterModeling() {
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
    <div className="3d-character-modeling-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/3d-character/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>3D Character Modeling Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Characters That Leap Off the <b>Screen</b>` }} />
              <p>Whether you need awe-inspiring creatures, robots, or lifelike humans, our 3D character modeling company can provide game, animation, photorealistic, and stylized character modeling.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>3D Character Modeling Design <b>*</b> 3D Character Modeling Design <b>*</b></span>
          <span>3D Character Modeling Design <b>*</b> 3D Character Modeling Design <b>*</b></span>
          <span>3D Character Modeling Design <b>*</b> 3D Character Modeling Design <b>*</b></span>
          <span>3D Character Modeling Design <b>*</b> 3D Character Modeling Design <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our 3D Character Modeling <b class="c-green">services</b>` }} />
              <p>You are welcome to take advantage of our 3D character modeling services and enliven your product with fantastic creatures, functional robots, or realistic humans.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-character/stylized.webp" alt="*" />
                  <h3>Stylized 3D Characters</h3>
                </div>
                <p>Our 3D artists will craft unique characters for you based on quality references. Equipped with a high level of detail, your 3D models will be stylized according to any specific needs as well as end-product characteristics.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-character/creatures.webp" alt="*" />
                  <h3>3D Creatures</h3>
                </div>
                <p>In our approach to designing creatures for your project, we proceed from researching the most appropriate style, form, and level of detail for each model to craft unique artwork that will impress your audience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-character/cartoon.webp" alt="*" />
                  <h3>Cartoon-style 3D Characters</h3>
                </div>
                <p>Artists at our studio will skillfully create 3D cartoonish characters that perfectly fit into your visual product. Thanks to flexibility and adaptability, they are capable of making 3D magic in any style.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-character/surface.webp" alt="*" />
                  <h3>Hard Surface 3D Robots</h3>
                </div>
                <p>Our 3D modeling professionals perfectly nail projects related to hard surface modeling. Robots are no exception. We can build unique and photorealistic 3D for an immersive experience.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-character/high-poly.webp" alt="*" />
                  <h3>High-Poly Modeling</h3>
                </div>
                <p>Our artists sculpt photo-real details and anatomical accuracy into character models at a high polygon level. This level of quality sculpting allows us to capture even the most subtle muscular definitions, skin wrinkles, and fine facial features.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/3d-character/unwrapping.webp" alt="*" />
                  <h3>UV Unwrapping and Texturing</h3>
                </div>
                <p>Characters are UV unwrapped and assigned texture maps like diffuse, normal, and specular for realistic rendering. Our texture artists skillfully bake detailed textures that maintain the lifelike qualities of the high-poly sculptures.</p>
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
