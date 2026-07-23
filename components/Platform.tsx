'use client';

interface PlatformData {
  title: string;
  description: string;
  image: string;
}

interface PlatformProps {
  heading?: string;
  highlightText?: string;
  subheading?: string;
  platforms?: PlatformData[];
}

const defaultPlatforms: PlatformData[] = [
  {
    title: "PC Game",
    description: "Steam, Epic Games Store, and proprietary distribution. Scalable graphics settings for the hardware range that PC players actually run.",
    image: "/assets/images/h-sec-4-img-01.webp"
  },
  {
    title: "VR Game",
    description: "Oculus Quest, HTC Vive, Valve Index, and PS VR. The frame budget is sacred.",
    image: "/assets/images/h-sec-4-img-02.webp"
  },
  {
    title: "Mobile Game",
    description: "iOS and Android. Performance-calibrated for the mid-range device the median player actually owns.",
    image: "/assets/images/h-sec-4-img-03.webp"
  }
];

export default function Platform({ 
  heading = "Key Devices",
  highlightText = "We",
  subheading = "Develop Games For",
  platforms = defaultPlatforms
}: PlatformProps) {
  return (
    <>
      <section className="h-sec-3">
        <svg className="bg" width="1440" height="2194" viewBox="0 0 1440 2194" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g style={{ mixBlendMode: "color-dodge" }} opacity="0.8" filter="url(#filter0_f_12_1176)">
            <path
              d="M1539 597.872C1335.12 878.653 962.175 979.363 576.834 1047.61C95.1584 1132.91 -168.31 1524.42 -146.5 1651.5"
              stroke="#5339F8" strokeWidth="265" />
          </g>
          <defs>
            {/* <filter id="filter0_f_12_1176" x="-800.244" y="0.0192871" width="2966.46" height="2193.89"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="260" result="effect1_foregroundBlur_12_1176" />
            </filter> */}
          </defs>
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center relative">
              <div className="text-outline">
                {/* <svg className="txt">
                  <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    Cobweb
                  </text>
                </svg> */}
              </div>
              <h6>PLATFORMS</h6>
              <h2 className="main-heading">
                <span dangerouslySetInnerHTML={{ __html: heading }} />
                <b className="c-green" dangerouslySetInnerHTML={{ __html: highlightText }} />
                <span dangerouslySetInnerHTML={{ __html: subheading }} />
              </h2>
            </div>
          </div>
          <div className="row">
            {platforms.map((platform, index) => (
              <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <div className="box-wrap">
                  <div className="img-wrap">
                    <img className="lazy"
                      src={platform.image}
                      data-src={platform.image} alt="*" />
                  </div>
                  <div className="content">
                    <h3>{platform.title}</h3>
                    <p>{platform.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}