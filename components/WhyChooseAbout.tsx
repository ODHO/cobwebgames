'use client';

import { useEffect } from 'react';


export default function WhyChooseUsAbout() {
  useEffect(() => {
    let slickTimer: NodeJS.Timeout;

    const initSlick = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
        const $ = (window as any).$;
        
        $('.services-slider').not('.slick-initialized').slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                centerMode: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '20px'
              }
            }
          ]
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

  const slides = [
    {
      title: "Memorable 2D Experiences",
      description: "Our team of veteran 2D artists and directors works closely with you to understand your genre and vision. We then apply our extensive experience and proven design solutions to craft artwork that polishes."
    },
    {
      title: "Unparalleled Quality",
      description: "With years of experience in the industry, our artists have contributed to dozens of titles, from casual games to major console releases. Each member of our team has a minimum of 2 years of experience. Skilled art."
    },
    {
      title: "Innovation",
      description: "While our design solutions are proven, we stay at the forefront of trends. This allows us to deliver fresh yet authentic aesthetics to the genre. More than just meeting expectations, we aim to make a lasting impression with every."
    },
    {
      title: "Flexibility",
      description: "Whether conceptualizing or finalizing assets, our artists have access to the latest software and hardware. We also adapt seamlessly to changing project needs. This scalable, optimized workflow ensures you get the highest quality."
    }
  ];

  return (
    <section className="services-slider-sec inner-services-sec relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-left">
            <h3 className="sm-head">Why Choose Us</h3>
            <h2 className="main-heading">Benefits of <b>Working </b>with Us</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-12">
            <ul className="services-slider">
              {slides.map((slide, index) => (
                <li key={index}>
                  <div className="item-wrap">
                    <div className="content">
                      <h4>{slide.title}</h4>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}