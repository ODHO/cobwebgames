
export default function Faqs() {
	return (
		<>
			<section className="faq-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<h3 className="sm-head">FAQ’s</h3>
							<h2 className="main-heading">Frequently Asked <b className="c-green">Questions</b></h2>
							<div className="accordion">
								<div className="accordion-item">
									<button id="accordion-button-1" aria-expanded="true"><span className="accordion-title">What services
										do you offer in-game art and development? </span><span className="icon"
											aria-hidden="true"></span></button>
									<div className="accordion-content">
										<p>We provide comprehensive game development services, including concept design, 2D and 3D
											art creation,
											animation, programming, and full game production. Our team ensures that each project
											meets industry standards
											and client expectations.</p>
									</div>
								</div>
								<div className="accordion-item">
									<button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">How do you
										ensure the quality of your game art?</span><span className="icon"
											aria-hidden="true"></span></button>
									<div className="accordion-content">
										<p>Our experienced artists stay updated with the latest market trends and utilize
											cutting-edge tools. Rigorous quality control processes, client feedback integration, and
											iterative refinement ensure that the final artwork is unique and high-quality.</p>
									</div>
								</div>
								<div className="accordion-item">
									<button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Can you
										develop both mobile and PC games?</span><span className="icon"
											aria-hidden="true"></span></button>
									<div className="accordion-content">
										<p>We specialize in developing games for multiple platforms, including mobile (iOS and
											Android) and PC. Our team is adept at optimizing games for different devices, ensuring a
											seamless and engaging player experience.</p>
									</div>
								</div>
								<div className="accordion-item">
									<button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">What is your
										typical project timeline?</span><span className="icon" aria-hidden="true"></span></button>
									<div className="accordion-content">
										<p>The project timeline varies based on scope and complexity. After an initial consultation,
											we provide a detailed timeline. Most projects range from a few months to a year, with
											regular updates and milestones throughout development.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="img-wrap">
								<img className="img-01 lazy"
									src="/assets/images/faq-img-01.webp"
									data-src="/assets/images/faq-img-01.webp" alt="*" />
								<img className="img-02 lazy"
									src="/assets/images/faq-img-02.webp"
									data-src="/assets/images/faq-img-02.webp" alt="*" />




								<img className="img-03 lazy"
									src="/assets/images/fire.gif"
									data-src="/assets/images/fire.gif" alt="*" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
