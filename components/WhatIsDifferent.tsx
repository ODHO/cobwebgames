export default function WhatIsDifferent() {
  return (
    <section className="h-sec-2">
      <svg className="bg" width="1440" height="1042" viewBox="0 0 1440 1042" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_234_493)">
          <path d="M1447.5 821.5C1313 688 837.299 613.9 544.499 565.5C178.499 505 -60.5006 268 -33.0006 213"
            stroke="#5339F8" strokeWidth="55" />
        </g>
        <defs>
          <filter id="filter0_f_234_493" x="-262.656" y="0.70166" width="1929.53" height="1040.32"
            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_234_493" />
          </filter>
        </defs>
      </svg>
      <div className="text-outline">
        <svg className="txt">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Cobweb
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="main-heading">What is Different About Cobweb Games?</h2>
          </div>
          <div className="col-lg-4">
            <p>Cobweb Games excels in crafting thrilling gaming worlds with exceptional projects and vibrant
              art, acclaimed by top-tier video game companies.</p>
          </div>
          <div className="col-lg-2">
            <a href="about-us">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
        <div className="row mob-slider">
          <div className="col-lg-3 col-md-6">
            <div className="box-wraper">
              <div className="img-wrap">
                <img className="lazy"
                  src="/assets/images/long-term.webp" alt="*" />
              </div>
              <div className="content">
                <h3>Long-Term Partnership</h3>
                <p>We prioritize long-term partnerships, fostering enduring relationships with clients to
                  consistently deliver exceptional game development services that evolve with industry
                  trends and client needs.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="box-wraper">
              <div className="img-wrap">
                <img className="lazy"
                  src="/assets/images/holistic.webp" alt="*" />
              </div>
              <div className="content">
                <h3>Holistic Solutions</h3>
                <p>Our holistic solutions encompass every aspect of game development, from concept to
                  launch, ensuring a seamless and comprehensive approach tailored to your unique project
                  requirements.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="box-wraper">
              <div className="img-wrap">
                <img className="lazy"
                  src="/assets/images/pro-team.webp" alt="*" />
              </div>
              <div className="content">
                <h3>Pro 3D Modelers</h3>
                <p>Our exceptional 3D modelers, and animators collaborates closely to create cutting edge
                  games, blending expertise and creativity for the extraordinary results.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="box-wraper">
              <div className="img-wrap">
                <img className="lazy"
                  src="/assets/images/premium.webp" alt="*" />
              </div>
              <div className="content">
                <h3>Premium Edition Games</h3>
                <p>We specialize in creating games that captivate players, offering immersive experiences
                  and innovative gameplay that sets new industry standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
