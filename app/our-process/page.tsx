import { Metadata } from 'next';
import Link from 'next/link';
import Platform from '@/components/Platform';
import Reviews from '@/components/Reviews';
import Faqs from '@/components/Faqs';
import FooterForm from '@/components/FooterForm';

export const metadata: Metadata = {
  title: 'Our process | Cob Web',
  description: 'Our process',
};

export default function OurProcess() {
  return (
    <>
      <section 
        className="game-banner about-banner d-flex relative"
        style={{ backgroundImage: "url('/assets/images/process/main-banner.webp')", backgroundPosition: "top" }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5>Our Process</h5>
              <h1>Process with a Human<b> Touch</b></h1>
              <p>See how our personalized and careful approach molds bold concepts into games people love.</p>
              <ul className="btn-wrap d-flex align-items-center justify-content-center mt-5">
                <li>
                  <Link href="/contact-us" className="btn-size btn-purple popup">Get Started</Link>
                </li>
                <li>
                  <a href="javascript:;" className="chat btn-size btn-green">Live Chat</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="marquee">
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
          <span>Our Process <b>*</b> Our Process <b>*</b></span>
        </div>
      </section>

      <section className="process-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h6>Our Process</h6>
              <h2 className="main-heading">Our Step-by-Step <br /> Development <b className="c-green">Process</b></h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="process-slider-lft">
                <li><h4>Initial Consultation</h4></li>
                <li><h4>Pre-Production & Planning</h4></li>
                <li><h4>Production & Development</h4></li>
                <li><h4>Quality Assurance & Testing</h4></li>
                <li><h4>Launch & Post-Launch Support</h4></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="process-slider-rht">
                <li>
                  <div className="box-wrap">
                    <span>01</span>
                    <h2>Initial Consultation & Conceptualization</h2>
                    <p>Our process begins with an in-depth initial consultation to understand your vision
                      and project requirements. We discuss your game concept, target audience, platform
                      preferences, and desired art style. Our team collaborates with you during this phase
                      to brainstorm ideas and refine the concept. <br /><br /> We also conduct market research
                      to ensure your game idea is unique and viable. This stage culminates in a
                      comprehensive project proposal outlining the scope, timeline, and budget. </p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>02</span>
                    <h2>Pre-Production and Planning</h2>
                    <p>In the pre-production phase, we lay the groundwork for your game by creating detailed
                      design documents and project plans. Our team develops storyboards, concept art, and
                      initial prototypes to visualize the game&apos;s look and feel. We establish a solid
                      technical foundation by selecting appropriate tools, technologies, and platforms.
                      <br /><br /> Milestones and deliverables are defined to ensure the project stays on
                      track. We also assemble a dedicated team of developers, artists, and designers
                      tailored to your project&apos;s needs. </p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>03</span>
                    <h2>Production and Development</h2>
                    <p>The production phase is where our team of skilled developers, artists, and animators
                      work collaboratively to build the game according to the design documents. We focus
                      on creating high-quality assets, coding the game mechanics, and integrating
                      features. Regular playtesting and feedback sessions are conducted to identify and
                      address issues early on. <br /><br /> This iterative process ensures that the game is
                      polished and meets your expectations. Throughout production, we maintain transparent
                      communication and provide regular updates on progress. </p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>04</span>
                    <h2>Quality Assurance and Testing</h2>
                    <p>Quality assurance is a critical phase where we rigorously test the game to ensure it
                      is bug-free and runs smoothly. Our QA team performs various types of testing,
                      including functionality, performance, and compatibility tests across different
                      devices and platforms. We gather feedback from beta testers to gain insights into
                      player experiences and make necessary adjustments. <br /><br /> Any identified issues
                      are promptly addressed by our development team. This phase helps us refine the game
                      to provide an optimal player experience. </p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <span>05</span>
                    <h2>Launch and Post-Launch Support</h2>
                    <p>The final phase involves preparing for the game&apos;s launch and providing post-launch
                      support. We develop a marketing strategy to promote the game and ensure a successful
                      release. Our team handles the deployment process, making the game available on
                      various platforms as planned. Post-launch, we monitor the game&apos;s performance and
                      gather player feedback to identify areas for improvement. <br /><br /> We offer ongoing
                      support and updates to keep the game engaging and address any emerging issues. This
                      commitment ensures your game remains successful and captivates players long after
                      release. </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-sec3 process-offer" style={{ backgroundImage: "url('/assets/images/process/offer-bg.webp')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="main-heading">Why We&apos;re Your <b className="c-green">Best Choice</b></h2>
              <p>Choosing Cobweb Games means partnering with a dedicated team that excels in transforming your
                vision into engaging, high-quality games.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="box-wrap">
                <h3>Expertise and Experience</h3>
                <p>With years of experience in the gaming industry, our team brings unparalleled expertise to
                  every project. We have a proven track record of delivering successful games across various
                  platforms.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box-wrap">
                <h3>Creative Excellence</h3>
                <p>Our artists and designers are renowned for their creativity and attention to detail. We craft
                  visually stunning and immersive gaming experiences that captivate players.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box-wrap">
                <h3>Client-Centric Approach</h3>
                <p>We prioritize our client&apos;s needs and maintain transparent communication throughout
                  development. Our focus on building long-term relationships ensures your project receives
                  personalized attention and support.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box-wrap">
                <h3>Comprehensive Services</h3>
                <p>From concept to launch, we offer a full suite of game development services. Our holistic
                  approach ensures a seamless and cohesive development process tailored to your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-sec4 process-team" style={{ backgroundImage: "url('/assets/images/about/about-sec4-bg.webp')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Our Team</h4>
              <h2 className="main-heading">The Talent Behind <br /> <b className="c-green">Our Games</b></h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="img-wrap">
                <img className="char-gif lazy" src="/assets/images/mens-charc.gif" alt="*" />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row mob-slider">
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Game Designer</h3>
                      <span>01</span>
                    </div>
                    <p>Our Game designers oversee all design aspects, from mechanical systems and rules to
                      interactive levels and worlds. Their job is to ensure the cohesive design vision is
                      realized across a game and facilitate discussions between departments. <br /><br /> They
                      translate ideas into captivating gameplay designs that balance challenge,
                      progression, and fun. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>3D Artist</h3>
                      <span>02</span>
                    </div>
                    <p>Our 3D Artists generate the immersive, photorealistic digital worlds built within
                      games. Textures, rigging, lighting, and animations are added to truly bring these
                      virtual assets to life. <br /><br />3D Artists must collaborate closely with other roles
                      to capture the aesthetic style set out by concept art. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Concept Artist</h3>
                      <span>03</span>
                    </div>
                    <p>Our concept Artists imagine numerous ideas and options early on through sketches and
                      paintings. They guide the overall artistic direction by establishing a visual
                      language to communicate ideas before 3D production begins. <br /><br /> Concept Artists
                      channel their creativity and descriptive skills to convey the intended atmosphere
                      effectively. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Programmer</h3>
                      <span>04</span>
                    </div>
                    <p>Our programmers implement the technical infrastructure and code that combines the
                      various designs, assets, and systems into an interactive experience. <br /><br /> They
                      work closely with designers to realize technical specifications and ensure cohesive
                      integration. Their code serves as the foundation that binds all elements. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>UI/UX Designer</h3>
                      <span>05</span>
                    </div>
                    <p>Our UI/UX designers create intuitive user interfaces that allow players to navigate
                      through menus, heads-up displays, and other screen elements effortlessly. <br /><br />
                      They carefully consider the player experience and usability when designing how
                      systems will be displayed and interacted with. Graphic implementation is then led
                      into the game under their direction. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="box-wrap">
                    <div className="head">
                      <h3>Audio Designer</h3>
                      <span>06</span>
                    </div>
                    <p>Our Audio designers are responsible for creating intricate soundscapes that bring
                      games to life. <br /><br /> They aim to establish an audio identity as cohesive as the
                      visual style to fully immerse players. Varied music sets the right mood and tones,
                      while realistic sound effects provide authentic feedback. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Platform />
      <Reviews />
      <Faqs />
      <FooterForm />
    </>
  );
}
