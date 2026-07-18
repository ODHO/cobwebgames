'use client';

import { useEffect } from 'react';

export default function GameArt() {
  const categories = [
    { key: "2d_art", path: "2d-art", title: "2D art" },
    { key: "3d_art", path: "3d-art", title: "3D art" },
    { key: "3d_character", path: "3d-character", title: "3D Character Design" },
    { key: "3d_environment", path: "3d-environment", title: "3D Environment Design" },
    { key: "3d_game", path: "3d-game", title: "3D Game Model" },
    { key: "3d_illustration", path: "3d-illustration", title: "3D Illustration Services" },
    { key: "character_design", path: "character-design", title: "Character Design" },
    { key: "environment_design", path: "environment-design", title: "Environment design" },
    { key: "game_level", path: "game-level", title: "Game Level Design" },
    { key: "uiux", path: "uiux", title: "UIUX Design" }
  ];

  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).$;
        
        // Initialize art thumbnail slider
        $('.art-thumb-slider').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          asNavFor: '.art-slider-content'
        });

        // Initialize art main slider
        $('.art-slider-content').not('.slick-initialized').slick({
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
          asNavFor: '.art-thumb-slider'
        });

        // Tabbing logic
        const tabTargetElements = $('[data-targetit]');
        tabTargetElements.on('click', function (this: HTMLElement) {
          $(this).siblings().removeClass('current');
          $(this).addClass('current');
          const target = $(this).data('targetit');
          $('.' + target).siblings('[class*="my-tabs"]').removeClass('current');
          $('.' + target).addClass('current');
          $('.slick-slider').slick('setPosition', 0);
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
    <section className="home-services game-art">
      <h2 className="serv-main text-center"><span>our</span> Services</h2>
      <div className="container serv-bg" style={{ backgroundImage: "url('/assets/images/game-art-bg.webp')" }}>
        <div className="outline-head">
          <h3>Game <span>Art</span></h3>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-wrap">
              <img className="img-01 lazy"
                src="/assets/images/game-art-img-01.webp" alt="*" />
              <img className="img-02 lazy"
                src="/assets/images/banner-imgs-bg.gif" alt="*" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content-wrap">
              <h2 className="main-heading">Game <b className="c-green">Art</b></h2>
              <p>We provide expert game art outsourcing services for video games. Our artists create vibrant
                2D and detailed 3D graphics, including concept art, characters, environments, and more.
                Whether a match needs flashy AAA art or casual illustrations, their team delivers
                top-quality game assets. With experience in various styles and genres, we help indie studios
                and major publishers bring your visions to life through compelling visuals.</p>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <a href="/game-art" className="btn-size btn-green popup">Read More</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container slider-sec">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="slider-content art-slider-content">
              {categories.map((cat, i) => (
                <li key={i} data-targetit={cat.key} className={i === 0 ? "current" : ""}>
                  <h3>{cat.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="thumb-slider art-thumb-slider">
              {categories.map((cat, i) => (
                <li key={i} className={`${cat.key} my-tabs ${i === 0 ? "current" : ""}`}>
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
