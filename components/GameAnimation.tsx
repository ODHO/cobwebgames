'use client';

import { useEffect } from 'react';

export default function GameAnimation() {
  const categories = [
    { key: "2d_animation", path: "2d-animation", title: "2D Animation" },
    { key: "3d_animation", path: "3d-animation", title: "3D Animation" },
    { key: "2d_animation_repeat", path: "2d-animation", title: "2D Animation" }, // repeating per original PHP structure
    { key: "3d_animation_repeat", path: "3d-animation", title: "3D Animation" }
  ];

  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).$;
        
        // Initialize anim thumbnail slider
        $('.anim-thumb-slider').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          asNavFor: '.anim-slider-content'
        });

        // Initialize anim main slider
        $('.anim-slider-content').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          centerMode: true,
          arrows: false,
          vertical: true,
          autoplay: true,
          verticalSwiping: true,
          focusOnSelect: true,
          asNavFor: '.anim-thumb-slider'
        });
      } else {
        slickTimer = setTimeout(initSlick, 100);
      }
    };

    initSlick();

    return () => {
      clearTimeout(slickTimer);
    };
  }, []);

  return (
    <section className="home-services game-develp">
      <div className="container serv-bg" style={{ backgroundImage: "url('/assets/images/game-art-bg.webp')", backgroundSize: 'cover' }}>
        <div className="outline-head">
          <h3>Game <span>Animation</span></h3>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-wrap">
              <img className="lazy img-01"
                src="/assets/images/game-development-img-01.gif" alt="*" />
              <img className="lazy img-02"
                src="/assets/images/game-development-img-02.gif" alt="*" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content-wrap">
              <h2 className="main-heading">Game <b className="c-green">Animation</b></h2>
              <p>Let our animation expertise bring your game vision to life. As a leading animation studio, we
                can design breathtaking visual effects and animate characters with fluid realism. Whether
                you need 2D or 3D art, our professional animators will craft optimized animations to enhance
                gameplay and fulfill your creative goals. Outsource to our studio for top-quality character
                motions and spectacular scenes that captivate players from start to finish.</p>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <a href="/game-animation" className="btn-size btn-green popup">Read More</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container slider-sec">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="slider-content anim-slider-content">
              {categories.map((cat, i) => (
                <li key={i} data-targetit={cat.key} className={i === 0 ? "current" : ""}>
                  <h3>{cat.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="thumb-slider anim-thumb-slider">
              {categories.map((cat, i) => (
                <li key={i} className={`${cat.key.replace('_repeat', '')} my-tabs ${i === 0 ? "current" : ""}`}>
                  <div className="h-serv-inner-port">
                    <div className="row">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="col-md-4">
                          <a href={`/assets/images/portfolio/home-sliders/${cat.path}/${num}.webp`}
                            data-fancybox="" tabIndex={0}>
                            <img src={`/assets/images/portfolio/home-sliders/${cat.path}/${num}.webp`}
                              alt="*" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="fixed-content">
              <h3>Our Works</h3>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <a href="/contact-us" className="btn-size btn-purple popup">Get Started</a>
                </li>
                <li>
                  <a href="javascript:;" className="chat btn-size btn-green">Live Chat</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
