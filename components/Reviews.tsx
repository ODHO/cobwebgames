'use client';

import { useEffect } from 'react';

export default function Reviews() {
  useEffect(() => {
    const init = () => {
      const $ = (window as any).$;

      if (!$ || !$.fn?.slick) {
        setTimeout(init, 100);
        return;
      }

      const slider = $('.review-slider');

      if (!slider.length) return;

      if (!slider.hasClass('slick-initialized')) {
        slider.slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: false,
          autoplay: true,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                dots: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                dots: true,
              },
            },
          ],
        });
      }
    };

    const timer = setTimeout(init, 100);

    return () => {
      clearTimeout(timer);

      const $ = (window as any).$;

      if ($?.fn?.slick) {
        const slider = $('.review-slider');

        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
      }
    };
  }, []);

  return (
    <>
      <section className="review-sec">
        <svg width="1440" height="1481" viewBox="0 0 1440 1481" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_234_1175)">
            <path d="M1483 207C1348.47 441.749 872.655 572.048 579.785 657.156C213.699 763.541 -25.3582 1180.29 2.14835 1277" stroke="#5339F8" strokeWidth="25" />
          </g>
          <defs>
            <filter id="filter0_f_234_1175" x="-212.5" y="0.784668" width="1906.34" height="1479.63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_234_1175" />
            </filter>
          </defs>
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Testimonials</h4>
              <h2 className="main-heading">What Our <b className="c-green">Clients</b> Say <b className="c-green">About</b> Us!</h2>
            </div>
            <ul className="review-slider">
              <li>
                <div className="box-wraper">
                  <div className="box-child">
                    <p>We were extremely pleased with the character and environmental concepts created by the Cobweb Game art team. Their creative and skilled designers understood our vision for a fantasy RPG world. Not only did the art capture the aesthetic we envisioned, but it was also optimized beautifully for gameplay. We will definitely utilize their art services on future projects.</p>
                    <div className="bottom">
                      <span>
                        <img src="/assets/images/avatar-01.webp" alt="*" />
                      </span>
                      <span>
                        <h5>Jacob Shaw</h5>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="box-wraper">
                  <div className="box-child">
                    <p>The animations Cobweb Game developed took our game to the next level. Characters moved with realistic fluidity yet retained their intended graphic styles. Players particularly mentioned how immersive the animations made combat and exploration feel. It was also impressive to see how the team adhered to our tight schedules while maintaining high-quality work.</p>
                    <div className="bottom">
                      <span>
                        <img src="/assets/images/avatar-02.webp" alt="*" />
                      </span>
                      <span>
                        <h5>Sebastian Shane</h5>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="box-wraper">
                  <div className="box-child">
                    <p>From early prototyping through worldwide launch, Cobweb Game drove our indie game from idea to finished product. Their development expertise and detailed feedback helped refine our game design at every stage. Moreover, their professional project management and programming allowed us to realize our vision on an expedited timeline and budget. We could not be happier with the development services or the successful final product.</p>
                    <div className="bottom">
                      <span>
                        <img src="/assets/images/avatar-02.webp" alt="*" />
                      </span>
                      <span>
                        <h5>Linda Harris</h5>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="box-wraper">
                  <div className="box-child">
                    <p>Cobweb Games has been an absolute pleasure to work with! Their creativity and attention to detail are unmatched. The team was highly responsive to our feedback and delivered a game that exceeded our expectations. We can&apos;t wait to collaborate on our next project.</p>
                    <div className="bottom">
                      <span>
                        <img src="/assets/images/avatar-01.webp" alt="*" />
                      </span>
                      <span>
                        <h5>Thomas Riley</h5>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="box-wraper">
                  <div className="box-child">
                    <p>The game developed by Cobweb Games was fantastic and really captivated our audience. They delivered everything according to the requirements, and everything was on time. The quality of their work is superb, and their customer service is excellent.</p>
                    <div className="bottom">
                      <span>
                        <img src="/assets/images/avatar-01.webp" alt="*" />
                      </span>
                      <span>
                        <h5>David Keith.</h5>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}