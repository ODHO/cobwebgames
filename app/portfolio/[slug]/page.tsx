import React from 'react';
import { resourcePacksData } from '../../../components/resourcePacksData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return resourcePacksData.map((pack) => ({
    slug: pack.slug,
  }));
}

export default async function PortfolioItem(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const pack = resourcePacksData.find((p) => p.slug === params.slug);

  if (!pack) {
    notFound();
  }

  // Helper to correctly extract youtube ID for thumbnail (if needed) or fancybox link
  const ytVideo = pack.youtubeHref;

  return (
    <div className="resource-pack-page">
      <section
        className="resource-pack-inner-wrap-1"
        style={{ backgroundImage: `url(${pack.bannerImage})` }}
      >
        <div className="container align-self-center position-relative">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h5>{pack.packType}</h5>
              <img className="lazy" src="/assets/images/resource-pack/item-profile-1.webp" alt="*" />
              <h1 className='text-6xl md:text-3xl'>{pack.title1}</h1>
              <p>{pack.desc1}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-pack-inner-wrap-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{pack.title2}</h2>
              {pack.paragraphs2.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="resource-pack-inner-wrap-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="row justify-content-center">
                {/* First Image / Video */}
                {pack.itemImages.length > 0 && (
                  <div className="col-lg-8 col-md-7">
                    <a
                      className="resource-pack-inner-wrap-3-item resource-pack-inner-wrap-3-item-1"
                      href={ytVideo || pack.itemImages[0]}
                      data-fancybox="gallery"
                    >
                      <img className="lazy anchor-img" src={pack.itemImages[0]} alt="*" />
                      {ytVideo && (
                        <img className="lazy icon-img" src="/assets/images/resource-pack/play-icon.webp" alt="*" />
                      )}
                    </a>
                  </div>
                )}

                {/* Second and Third Images */}
                <div className="col-lg-4 col-md-5 col-12">
                  {pack.itemImages.length > 1 && (
                    <div className="resource-pack-inner-wrap-3-item resource-pack-inner-wrap-3-item-2 mb-4">
                      <img className="lazy anchor-img" src={pack.itemImages[1]} alt="*" />
                    </div>
                  )}
                  {pack.itemImages.length > 2 && (
                    <div className="resource-pack-inner-wrap-3-item resource-pack-inner-wrap-3-item-2">
                      <img className="lazy anchor-img" src={pack.itemImages[2]} alt="*" />
                    </div>
                  )}
                </div>

                {/* Fourth Image */}
                {pack.itemImages.length > 3 && (
                  <div className="col-lg-4 col-md-4 mt-4 col-6">
                    <div className="resource-pack-inner-wrap-3-item resource-pack-inner-wrap-3-item-3">
                      <img className="lazy anchor-img" src={pack.itemImages[3]} alt="*" />
                    </div>
                  </div>
                )}

                {/* Fifth Image */}
                {pack.itemImages.length > 4 && (
                  <div className="col-lg-4 col-md-4 mt-4 col-6">
                    <div className="resource-pack-inner-wrap-3-item resource-pack-inner-wrap-3-item-3">
                      <img className="lazy anchor-img" src={pack.itemImages[4]} alt="*" />
                    </div>
                  </div>
                )}

                {/* Sixth Image */}
                {pack.itemImages.length > 5 && (
                  <div className="col-lg-4 col-md-4 mt-4 col-12">
                    <div className="resource-pack-inner-wrap-3-item resource-pack-inner-wrap-3-item-3">
                      <img className="lazy anchor-img" src={pack.itemImages[5]} alt="*" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4 col-md-5 mt-4 mt-md-0">
              <div className="resource-pack-inner-wrap-3-content-item-main">
                <div className="resource-pack-inner-wrap-3-content-item">
                  <h4>
                    Exclusive <br />
                    for Premium users
                  </h4>
                  <ul className="list-unstyled">
                    {pack.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  {pack.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className={`resource-view-anchor ${i < pack.links.length - 1 ? 'me-2' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <div className="resource-pack-inner-wrap-3-content-item-2">
                  <h4>Specifications</h4>
                  {pack.specifications.map((spec, i) => (
                    <div className="row custom-row align-items-center" key={i}>
                      <div className="col-lg-6 col-6">
                        <p className="mb-0">{spec.label}</p>
                      </div>
                      <div className="col-lg-6 col-6">
                        <p className="mb-0">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
