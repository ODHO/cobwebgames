'use client';

import { useEffect } from 'react';

export default function GameDevelopment() {
  const categories = [
    { 
      key: "3d-game", 
      path: "3d-game-developmnt", 
      title: "3D Game Development",
      description: "Three-dimensional game development across PC, console, and VR. Full production pipeline from design through platform-ready build."
    },
    { 
      key: "ai_game", 
      path: "ai-game", 
      title: "AI Game Development",
      description: "AI game development for NPC behavior, procedural content generation, adaptive difficulty, and AI-driven game systems that change the player experience."
    },
    { 
      key: "blockchain_game", 
      path: "blockchain-game", 
      title: "Blockchain Game",
      description: "Blockchain game development and web3 game development for on-chain ownership, NFT integration, and the infrastructure that makes decentralized game economies work at scale."
    },
    { 
      key: "game_prototyping", 
      path: "game-prototyping", 
      title: "Game Prototyping",
      description: "Rapid game prototyping to validate the core loop before full production investment. The prototype answers whether the game is fun. Everything else is implementation."
    },
    { 
      key: "game_testing", 
      path: "game-testing", 
      title: "Game Testing",
      description: "QA and game testing across platforms and devices. Manual, automated, and platform certification testing for approved listings."
    },
    { 
      key: "mobile_game", 
      path: "mobile-game", 
      title: "Mobile Game",
      description: "Mobile game development for iOS and Android, performance-calibrated from the first line of code. App store submission and post-launch support are included in scope."
    },
    { 
      key: "earn_game", 
      path: "earn-games", 
      title: "Play to Earn Games",
      description: "Play-to-earn game development with smart contract integration, token economy design, and the technical architecture that separates functional P2E from vaporware."
    },
    { 
      key: "unity_game", 
      path: "unity-game", 
      title: "Unity game",
      description: "Unity game development across 2D, 3D, AR, VR, and mobile platforms. Custom Unity3D game development with the full engine feature set applied to your project."
    },
    { 
      key: "unreal_game", 
      path: "unreal-game", 
      title: "Unreal engine game",
      description: "Unreal Engine game development for projects where Lumen, Nanite, or the Unreal pipeline's advantages justify the engine choice. We recommend the engine that fits the project."
    }
  ];

  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).$;
        
        // Initialize dev thumbnail slider
        $('.dev-thumb-slider').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          asNavFor: '.dev-slider-content'
        });

        // Initialize dev main slider
        $('.dev-slider-content').not('.slick-initialized').slick({
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
              <h2 className="main-heading">Cobweb Game <b className="c-green">Development</b> Services</h2>
              <p className="w-100 custom-height-scroll">
               Full-cycle game development from concept through platform submission. Unity and Unreal Engine. Mobile, PC, VR, and everything the brief calls for.
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