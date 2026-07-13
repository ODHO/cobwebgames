export default function CtaOne() {
	return (
		<>
			<section className="cta-sec-n" style={{ backgroundImage: "url('/assets/images/cta1-bg.webp')" }}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6">
							<h4 className="sm-head">Cobweb Studios</h4>
							<h2 className="main-heading">Have A Great Idea? <b className="c-green">Let&apos;s Begin!</b></h2>
							<p>Ready to take your game to the next level? Contact us now, and let&apos;s get started!</p>
							<ul className="btn-wrap d-flex align-items-center">
								<li>
									<a href="javascript:;" className="chat btn-size btn-white">Live Chat</a>
								</li>
								<li>
									<a href="contact-us" className="btn-size btn-green popup">Get Started</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-6">
							<div className="img-wrap">
								<img className="lazy"
									src="/assets/images/cta-char-01.gif"
									data-src="/assets/images/cta-char-01.gif" alt="*" />




							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
