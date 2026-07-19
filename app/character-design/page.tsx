'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';

export default function CharacterDesign() {
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
    <div className="character-design-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/character-design/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8">
              <h5>Character Design</h5>
              <h1 dangerouslySetInnerHTML={{ __html: `Bringing Virtual Heroes to <b>Life</b>` }} />
              <p>We bring expertise and excellence to handle projects of varying complexity and create
						breathtaking game characters using advanced techniques and industry-leading practices in both 2D
						and 3D.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Character Design <b>*</b> Character Design <b>*</b></span>
          <span>Character Design <b>*</b> Character Design <b>*</b></span>
          <span>Character Design <b>*</b> Character Design <b>*</b></span>
          <span>Character Design <b>*</b> Character Design <b>*</b></span>
        </div>
      </section>

      <section
        className="team-sec4 inner-game-services"
        style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Our Character Design <b class="c-green">services</b>` }} />
              <p>Our character designs seamlessly fit into your game&apos;s aesthetic, from monochromatic and flat art
						to pixel art.</p>
            </div>
          </div>
          <div className="row align-items-center mob-slider">

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/character-design/character-concept .webp" alt="*" />
                  <h3>Character Concept Art Creation</h3>
                </div>
                <p>We create and refine characters using top-tier 2D and 3D art tools. Our commitment to
							excellence ensures we deliver exceptional services that bring your characters to life with
							stunning detail and creativity.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/character-design/2d-characters.webp" alt="*" />
                  <h3>2D Characters Design</h3>
                </div>
                <p>Our expert 2D Artist specializes in producing characters across various genres, meticulously
							crafting each one to meet your project&apos;s precise requirements. Expect nothing less than
							unique, captivating designs that perfectly align with your vision.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/character-design/3d-character.webp" alt="*" />
                  <h3>3D Characters Design</h3>
                </div>
                <p>Our team excels in creating highly realistic and customizable 3D models, enhancing the player
							experience and seamlessly fitting into the environment of your game. Our designs bring
							unparalleled depth and immersion to your project.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/character-design/isometric-art.webp" alt="*" />
                  <h3>Isometric Art</h3>
                </div>
                <p>We combine precision and creativity to produce engaging, three-dimensional visuals perfect
							for games, architectural designs, and detailed illustrations. Our isometric art captures
							intricate details and dynamic perspectives, creating immersive and visually appealing
							scenes.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/character-design/storyboarding.webp" alt="*" />
                  <h3>Storyboarding</h3>
                </div>
                <p>With a meticulously crafted storyboard, we make sure to give your character life. Each panel
							captures the essence of your story, illustrating key moments and character interactions in a
							visually compelling sequence.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box-wrap">
                <div className="head">
                  <img className="lazy" src="/assets/images/character-design/technical-debugging.webp" alt="*" />
                  <h3>Technical Debugging</h3>
                </div>
                <p>Our experts specialize in meticulous character visualization for your game, ensuring every
							detail is perfected without errors or faults. We employ advanced techniques to maintain high
							standards of quality in both 2D and 3D designs.</p>
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
