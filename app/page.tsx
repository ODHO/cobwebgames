'use client';

import { useEffect } from 'react';
import WhatIsDifferent from '../components/WhatIsDifferent';
import CtaOne from '../components/CtaOne';
import GameArt from '../components/GameArt';
import GameDevelopment from '../components/GameDevelopment';
import GameAnimation from '../components/GameAnimation';
import Platform from '../components/Platform';
import Technologies from '../components/Technologies';
import Reviews from '../components/Reviews';
import CtaTwo from '../components/CtaTwo';
import Faqs from '../components/Faqs';
import FooterForm from '../components/FooterForm';
import Link from 'next/link';
import imagemain from '@/public/assets/images/banner-img-icon-01.webp'
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.banner-tabs ul li');
    const images = document.querySelectorAll('.image-container .img-wrap');
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    function showImageAndHighlightButton(index: number) {
      images.forEach(img => img.classList.remove('active'));
      if (images[index]) images[index].classList.add('active');

      buttons.forEach(btn => {
        btn.classList.remove('active-button');
        const progress = btn.querySelector('.progress') as HTMLElement;
        if (progress) progress.style.height = '0';
      });
      
      if (buttons[index]) {
        buttons[index].classList.add('active-button');
        const progress = buttons[index].querySelector('.progress') as HTMLElement;
        if (progress) {
          // Force reflow
          progress.offsetWidth;
          // Start progress bar animation
          setTimeout(() => {
            progress.style.height = '100%';
          }, 100);
        }
      }
    }

    function startAutoLoop(startIndex: number) {
      currentIndex = startIndex;
      timer = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        resetProgressBars();
        showImageAndHighlightButton(currentIndex);
      }, 5000);
    }

    function resetProgressBars() {
      buttons.forEach(btn => {
        const progress = btn.querySelector('.progress') as HTMLElement;
        if (progress) progress.style.height = '0';
      });
    }

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        clearInterval(timer);
        resetProgressBars();
        showImageAndHighlightButton(index);
        startAutoLoop(index);
      });
    });

    // Initialize
    resetProgressBars();
    showImageAndHighlightButton(0);
    startAutoLoop(0);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* Hero Section - exact replica of PHP home-banner */}
      <section className="home-banner d-flex" style={{ backgroundImage: "url('/assets/images/home-banner.webp')" }}>
        <img className="banner-shadow" src="/assets/images/banner-img-shpe.webp" alt="*" />
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-6">
              <div className="content">
                <h5>Cobweb Games</h5>
                <h1>Game Art and <b>Development </b>Studio</h1>
                <p>We are a premier game development company dedicated to transforming concepts into fully playable games.</p>
                <ul className="btn-wrap d-flex align-items-center">
                  <li>
                    <a href="/contact-us" className="btn-size btn-purple popup">Get Started</a>
                  </li>
                  <li>
                    <a href="javascript:;" className="chat btn-size btn-green">Live Chat</a>
                  </li>
                </ul>
                <div className="play-btn">
                  <a href="https://youtu.be/MP_LpdaMPLg?si=kWwTNF17qsRtsJns" data-fancybox="iframe">
                    <span className="icon">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <span>Latest Showreel</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-tabs">
                <ul className="d-flex align-items-center">
                  <li id="btn1">
                    <Image className="lazy"
                      src={imagemain}
                      alt="*" />
                    <div className="progress"></div>
                  </li>
                  <li id="btn2">
                    <img className="lazy"
                      src="/assets/images/banner-img-icon-02.webp"
                      alt="*" />
                    <div className="progress"></div>
                  </li>
                  <li id="btn3">
                    <img className="lazy"
                      src="/assets/images/banner-img-icon-03.webp"
                      alt="*" />
                    <div className="progress"></div>
                  </li>
                  <li id="btn4">
                    <img className="lazy"
                      src="/assets/images/banner-img-icon-04.webp"
                      alt="*" />
                    <div className="progress"></div>
                  </li>
                </ul>
              </div>
              <div className="image-container">
                <div className="img-wrap" id="img1">
                  <img className="char-01 lazy"
                    src="/assets/images/banner-char-01.png"
                    alt="*" />
                  <img className="char-gif lazy"
                    src="/assets/images/banner-imgs-bg.gif"
                    alt="*" />
                </div>
                <div className="img-wrap" id="img2">
                  <img className="char-01 lazy"
                    src="/assets/images/banner-char-02.webp"
                    alt="*" />
                  <img className="char-gif lazy"
                    src="/assets/images/banner-imgs-bg.gif"
                    alt="*" />
                </div>
                <div className="img-wrap" id="img3">
                  <img className="char-01 lazy"
                    src="/assets/images/banner-char-03.webp"
                    alt="*" />
                  <img className="char-gif lazy"
                    src="/assets/images/banner-imgs-bg.gif"
                    alt="*" />
                </div>
                <div className="img-wrap" id="img4">
                  <img className="char-01 lazy"
                    src="/assets/images/banner-char-04.webp"
                    alt="*" />
                  <img className="char-gif lazy"
                    src="/assets/images/banner-imgs-bg.gif"
                    alt="*" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconstructed Homepage Sections */}
      <WhatIsDifferent />
      <CtaOne />
      <GameArt />
      <GameDevelopment />
      <GameAnimation />
      <Platform />

      {/* Marquee Banner */}
      <div className="py-4 bg-purple-600 text-white font-bold text-xl overflow-hidden flex whitespace-nowrap">
        <span className="mx-4">Technologies * Technologies * Technologies * Technologies *</span>
        <span className="mx-4">Technologies * Technologies * Technologies * Technologies *</span>
      </div>

      <Technologies />
      <Reviews />
      <CtaTwo />
      <Faqs />
      <FooterForm />
    </>
  );
}
