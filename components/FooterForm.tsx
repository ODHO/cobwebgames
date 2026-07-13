export default function FooterForm() {

	function updateBudget() {

	}

	function checkBudget() {
		updateBudget()
	}
	return (
		<>
			<section className="footer-form" id="footer-form">
				<div className="container">
					<div className="row relative">
						<div className="col-lg-6">
							<h2 className="main-heading c-dark">Looking for a game development team?</h2>
							<p>We would love to hear your game idea!</p>
							<ul className="btn-wrap d-flex align-items-center">
								<li>
									<a href="contact-us" className="btn-size btn-white popup">Get Started</a>
								</li>
								<li>
									<a href="javascript:;" className="chat btn-size btn-purple">Live Chat</a>
								</li>
							</ul>
							<h6>Awards & Achievements</h6>
							<ul>
								<li>
									<a href="https://www.bark.com/en/us/company/cobweb-games/LeAebK/" target="_blank">
										<img src="assets/images/badges-03.png" alt="" />
									</a>
								</li>

								<li>
									<a href="https://www.designrush.com/agency/software-development/gaming" target="_blank">
										<img src="assets/images/agency.png" alt="" />
										Design Rush
									</a>
								</li>

								<li>
									<a href="https://www.goodfirms.co/company/cobweb-games" target="_blank">
										<img src="assets/images/good-firms.png" alt="" />
									</a>
									<div className="goodfirm-widget"
										data-widget-type="goodfirms-widget-t6"
										data-widget-pattern="star-no-review"
										data-height="100"
										data-company-id="195811">
									</div>
								</li>
							</ul>
						</div>
						<div className="col-lg-6">
							<div className="form-wraper">
								<h5 className="sm-head text-uppercase">Lets Discuss </h5>
								<h2 className="main-heading">Your Project?</h2>
								<form action="mail" method="POST">
									<div className="field-wrap">
										<input type="text" name="name" placeholder="Your Name" />
									</div>
									<div className="field-wrap">
										<input type="email" name="email" placeholder="Email Address" />
									</div>
									<div className="field-wrap">
										<input type="tel" name="phone" id="phone_input" maxLength={11} placeholder="Phone Number" required />
										<span id="phone_error" className="error-message">Invalid Phone Number</span>
									</div>
									<div className="field-wrap">
										{/* <select name="service" required onChange={() => updateBudget()}>
											<option value="" disabled selected>Select Services</option>
											<option value="Mobile App Development">Mobile App Development</option>
											<option value="Web App Development">Web App Development</option>
											<option value="SaaS Platform">SaaS Platform</option>
											<option value="MVP Development">MVP Development</option>
											<option value="Game Development">Game Development</option>
											<option value="Blockchain Solutions">Blockchain Solutions</option>
											<option value="Business Proposal">Business Proposal</option>
										</select> */}
									</div>
									<div className="field-wrap">
										{/* <select name="budget" id="budget_dropdown" required onChange={checkBudget}>
											<option value="" disabled selected>Estimated Budget / Scope</option>
											<option value="$3,000 to $5,000">$3,000 to $5,000</option>
											<option value="$5,000 to $10,000">$5,000 to $10,000</option>
											<option value="$10,000 to $25,000">$10,000 to $25,000</option>
											<option value="$25,000 to $50,000">$25,000 to $50,000</option>
											<option value="Request a custom quote">Request a custom quote</option>
										</select> */}
									</div>
									<div className="field-wrap" id="custom_quote_field" style={{ display: 'none' }}>
										<input type="number" name="custom_quote" id="custom_quote_input" min="30000" placeholder="Enter Custom Quote (Min $30,000)" />
										<span id="quote_error" className="error-message">Minimum quote amount must be $30,000 or more.</span>
									</div>
									<div className="field-wrap">
										<textarea name="msg" placeholder="Message"></textarea>
									</div>
									<div className="button-wrap">
										<input type="submit" className="btn-size btn-white" value="Get Started" />
										<input type="hidden" name="pageurl" value="" />
										<input type="hidden" name="ip2loc_ip" value="" />
										<input type="hidden" name="ip2loc_isp" value="" />
										<input type="hidden" name="ip2loc_org" value="" />
										<input type="hidden" name="ip2loc_country" value="" />
										<input type="hidden" name="ip2loc_region" value="" />
										<input type="hidden" name="ip2loc_city" value="" />
										<input type="hidden" name="Form_name" value="Popup Form" />
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>





		</>
	);
}