'use client';

import { useEffect } from 'react';

export default function GameAnimation() {
  const categories = [
    { 
      key: "2d_animation", 
      path: "2d-animation", 
      title: "2D Animation",
      description: "Our 2D Animation Services includes everything from character movement cycles, idle animations, attack sequences, and the transition frames that determine whether motion reads as fluid or mechanical. Delivered as correctly-packed sprite sheets."
    },
    { 
      key: "3d_animation", 
      path: "3d-animation", 
      title: "3D Animation",
      description: "3D animation services engineered for the animation state machine. Weight painting and joint limits handled so your character moves like a character and not a glitchy mess of vertices."
    },
    { 
      key: "cycle_animations", 
      path: "2d-animation", 
      title: "Cycle Animations",
      description: "Walk cycles, run cycles, idle cycles, and the full movement library a character needs to exist believably in a real-time environment."
    },
    { 
      key: "environment_animation", 
      path: "3d-animation", 
      title: "Environment Animation",
      description: "Foliage, water, atmospheric effects, and interactive world elements. The ambient motion that makes a world feel alive rather than rendered."
    },
    { 
      key: "game_trailer", 
      path: "2d-animation", 
      title: "Game Trailer Animation",
      description: "Cinematic trailer animation for announcements and launch campaigns. Built to create the feeling of playing the game rather than listing its features."
    },
    { 
      key: "vfx_cutscene", 
      path: "3d-animation", 
      title: "VFX and Cutscene Animation",
      description: "VFX and cutscene animation that holds the visual quality standard that the rest of the production has established. Not the place to cut the budget."
    },
    { 
      key: "character_animation", 
      path: "2d-animation", 
      title: "Character Animation",
      description: "Full character animation, including dialogue performance, combat systems, and the secondary motion that separates an inhabited character from one that appears to be operated."
    }
  ];

  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).$;
        
        // Initialize anim thumbnail slider
        $('.anim-thumb-slider').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          asNavFor: '.anim-slider-content'
        });

        // Initialize anim main slider
        $('.anim-slider-content').not('.slick-initialized').slick({
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
              <h2 className="main-heading">Cobweb Game <b className="c-green">Animation</b> Services</h2>
              <p>Game animation that serves the animation state machine, not the demo reel.</p>
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
                    {/* Description added here */}
                    <div className="category-description mt-3 p-3" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '8px', borderLeft: '3px solid #00ff88' }}>
                      <p className="text-white" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '0' }}>
                        {cat.description}
                      </p>
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