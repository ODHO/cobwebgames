'use client';

import { useEffect } from 'react';

export default function GameDevelopment() {
  const categories = [
    { key: "3d-game", path: "3d-game-developmnt", title: "3D Game Development" },
    { key: "ai_game", path: "ai-game", title: "AI Game Development" },
    { key: "blockchain_game", path: "blockchain-game", title: "Blockchain Game" },
    { key: "game_prototyping", path: "game-prototyping", title: "Game Prototyping" },
    { key: "game_testing", path: "game-testing", title: "Game Testing" },
    { key: "mobile_game", path: "mobile-game", title: "Mobile Game" },
    { key: "earn_game", path: "earn-games", title: "Play to Earn Games" },
    { key: "unity_game", path: "unity-game", title: "Unity game" },
    { key: "unreal_game", path: "unreal-game", title: "Unreal engine game" }
  ];

  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).$;
        
        // Initialize dev thumbnail slider
        $('.dev-thumb-slider').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          asNavFor: '.dev-slider-content'
        });

        // Initialize dev main slider
        $('.dev-slider-content').slick({
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
          asNavFor: '.dev-thumb-slider'
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
    <section className="home-services game-animation">
      <div className="container serv-bg" style={{ backgroundImage: "url('/assets/images/game-animation-bg.webp')" }}>
        <div className="outline-head">
          <h3>Game <span>Development</span></h3>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content-wrap">
              <h2 className="main-heading">Game <b className="c-green">Development</b></h2>
              <p className="w-100 custom-height-scroll">
                We offer full-service game development from initial concept to worldwide launch. Our skilled
                teams have the expertise to bring any
                vision to life, whether it be for console, mobile, VR/AR, or other platforms. Through
                collaborative prototyping and an iterative polishing process,
                we focus on crafting immersive experiences that truly engage players. <br /><br /> Behind the
                scenes, our backend solutions seamlessly handle player data
                to enhance the gameplay. Global product releases are our specialty, as we can manage every
                stage of production from ideation to live operations and
                ensure your game delights audiences around the world.
              </p>
              <ul className="btn-wrap d-flex align-items-center">
                <li>
                  <a href="/game-development" className="btn-size btn-green popup">Read More</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-wrap">
              <img className="lazy img-01"
                src="/assets/images/game-animation-img.gif" alt="*" />
            </div>
          </div>
        </div>
      </div>
      <div className="container slider-sec">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="slider-content dev-slider-content">
              {categories.map((cat, i) => (
                <li key={i} data-targetit={cat.key} className={i === 0 ? "current" : ""}>
                  <h3>{cat.title}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="thumb-slider dev-thumb-slider">
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
