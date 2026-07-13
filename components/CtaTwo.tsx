
export default function CtaTwo() {
	return (
		<>
			<section className="cta-02">
				<img className="cta-bg" src="/assets/images/cta-02-bg.webp" alt="*" />
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="img-wrap">



								<img className="lazy"
									src="/assets/images/cta-car.gif"
									data-src="/assets/images/cta-car.gif" alt="*" />
							</div>
						</div>
						<div className="col-lg-7">
							<h2 className="main-heading">Bring Your Ideas to <b className="c-green">Playable Reality!</b></h2>
							<ul className="btn-wrap d-flex align-items-center">
								<li>
									<a href="contact-us" className="btn-size btn-white popup">Get Started</a>
								</li>
								<li>
									<a href="javascript:;" className="chat btn-size btn-green">Live Chat</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
