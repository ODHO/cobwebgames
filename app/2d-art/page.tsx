'use client';

import { useEffect } from 'react';
import CtaTwo from '../../components/CtaTwo';
import Platform from '../../components/Platform';
import Technologies from '../../components/Technologies';
import Reviews from '../../components/Reviews';
import Faqs from '../../components/Faqs';
import FooterForm from '../../components/FooterForm';
import WhyChooseUsAbout from '@/components/WhyChooseAbout';

const platforms2D = [
  {
    title: "Mobile Game Art",
    description: "Sprite atlases optimized for texture memory. UI elements tested at 375-point width. Art direction that reads at a glance because the player does not have a manual.",
    image: "/assets/images/h-sec-4-img-01.webp"
  },
  {
    title: "PC Game Art",
    description: "Higher texture resolution budgets, more complex parallax layers, and art direction that rewards the player who looks closely. We scale asset specification to the actual hardware the player runs.",
    image: "/assets/images/h-sec-4-img-02.webp"
  },
  {
    title: "VR Game Art",
    description: "2D art for VR needs different spatial thinking than flat-screen art. UI elements readable at fixed world-space distance. Sprite art that holds up at the stereoscopic viewing distance the headset creates.",
    image: "/assets/images/h-sec-4-img-03.webp"
  }
];

export default function Page2dArt() {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const initSlick = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const $ = (window as any).$;
        $('.mob-slider').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          arrows: false,
          autoplay: true,
          responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } }
          ]
        });
      } else {
        timer = setTimeout(initSlick, 100);
      }
    };
    initSlick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="2d-art-page">
      <section
        className="game-banner game-inner-banner d-flex"
        style={{ backgroundImage: "url('/assets/images/2d-art/main-banner.webp')" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-8 mt-5">
              <h5>2D Game Art Development</h5>
             <h1 dangerouslySetInnerHTML={{ __html: `2D Game Art Studio for High-Quality Game Assets & Design.` }} />   
              <p>We are a dedicated 2D game art development studio working across mobile, PC, and VR projects for indie developers, mid-size studios, and enterprise publishers. Custom 2D game art from concept through final deliverable, by a team that understands what game engines actually do with the files they receive.</p>
              <ul className="btn-wrap d-flex align-items-center mt-4">
                <li><a href="/contact-us" className="btn-size btn-purple popup">Get Started</a></li>
                <li><a href="javascript:;" className="chat btn-size btn-green">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
          <span>2d game art <b>*</b> 2d game art <b>*</b></span>
        </div>
      </section>

      <section
  className="team-sec4 inner-game-services"
  style={{ backgroundImage: "url('/assets/images/game-art/team-bg.webp')", backgroundPosition: 'center' }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="main-heading" dangerouslySetInnerHTML={{ __html: `Professional 2D <b class="c-green">Game Art Services</b>` }} />
        <p>Bad 2D game art outsourcing creates debt. Not the financial kind, the kind where your tech team spends three sprints fixing UV mismatches, inconsistent sprite anchor points, and style drift that appeared somewhere between asset 40 and asset 41 and nobody noticed until the build broke. Studios come to Cobweb Games because they are tired of paying twice: once for the art and once for the fixes. Our 2D game art services are built around production pipelines, not just production output. Every asset is properly named, correctly sized, export-ready for your target engine, and consistent with the style guide the project started with. Every 2D game art service we provide is production-pipeline aware. The assets are built for the build, not just the preview render.</p>
      </div>
    </div>
    <div className="row align-items-center mob-slider">

      <div className="col-lg-4 col-md-6">
        <div className="box-wrap">
          <div className="head">
            <img className="lazy" src="/assets/images/2d-art/service-icon-01.webp" alt="*" />
            <h3>2D Concept Art for Games</h3>
          </div>
          <p>Concept art that is useful downstream. Character sheets with front, side, and three-quarter views. Environment mood boards with lighting callouts. Prop references with proportional accuracy. The downstream team does not have to interpret the concept. It gives them everything they need to build from it.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="box-wrap">
          <div className="head">
            <img className="lazy" src="/assets/images/2d-art/service-icon-02.webp" alt="*" />
            <h3>2D Character Design Services</h3>
          </div>
          <p>Game character design built for the animation rig it will run on. Expression sheets. Costume variation references. Joint-friendly design decisions that mean the 2D character art does not fight the animator at the rigging stage. Stylized, realistic, and everything between.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="box-wrap">
          <div className="head">
            <img className="lazy" src="/assets/images/2d-art/service-icon-03.webp" alt="*" />
            <h3>2D Environment and Background Design</h3>
          </div>
          <p>Background art with correct parallax layer separation. Tileable terrain assets that actually tile. Level art that gives the player the visual cues they need to navigate. Built for Unity and Unreal Engine integration from the first file.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="box-wrap">
          <div className="head">
            <img className="lazy" src="/assets/images/2d-art/service-icon-04.webp" alt="*" />
            <h3>2D Game Asset Creation</h3>
          </div>
          <p>Props, items, collectibles, hazards, interactive objects. Our game asset creation process handles naming conventions, consistent scale, and correct pivot placement from the start. Not as an afterthought in the delivery package.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="box-wrap">
          <div className="head">
            <img className="lazy" src="/assets/images/2d-art/service-icon-05.webp" alt="*" />
            <h3>Game Icons, Items and UI Art</h3>
          </div>
          <p>Game UI art design that communicates at a glance under the cognitive load of active gameplay. Icon sets with consistent visual language. Inventory item design with a clear read hierarchy. HUD elements that are visible at 40% screen brightness on a phone in direct sunlight. If that last one has never occurred to you, your UI artist has not shipped mobile.</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="box-wrap">
          <div className="head">
            <img className="lazy" src="/assets/images/2d-art/service-icon-06.webp" alt="*" />
            <h3>2D Game Animation Services</h3>
          </div>
          <p>Frame-by-frame animation built to the frame count and sprite sheet specifications your engine requires. Walk cycles, run cycles, idle animations, attack animations, and the transition frames that determine whether motion feels fluid or mechanical. Sprite sheets delivered with correct atlas packing and margin settings.</p>
        </div>
      </div>

    </div>
  </div>
</section>

      <CtaTwo />
      <Platform 
        heading="Custom 2D Game Art <br> For"
        highlightText="Every"
        subheading="Genre and Platform"
        platforms={platforms2D}
      />
      <WhyChooseUsAbout />

      <div className="marquee">
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
        <span>Technologies <b>*</b> Technologies <b>*</b></span>
      </div>

      <Technologies />
      <Reviews />
      <Faqs />
      <FooterForm />
    </div>
  );
}
