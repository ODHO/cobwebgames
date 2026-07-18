'use client';

import { useState } from 'react';

const faqs = [
	{
		id: 1,
		question: 'What services do you offer in-game art and development?',
		answer: 'We provide comprehensive game development services, including concept design, 2D and 3D art creation, animation, programming, and full game production. Our team ensures that each project meets industry standards and client expectations.',
	},
	{
		id: 2,
		question: 'How do you ensure the quality of your game art?',
		answer: 'Our experienced artists stay updated with the latest market trends and utilize cutting-edge tools. Rigorous quality control processes, client feedback integration, and iterative refinement ensure that the final artwork is unique and high-quality.',
	},
	{
		id: 3,
		question: 'Can you develop both mobile and PC games?',
		answer: 'We specialize in developing games for multiple platforms, including mobile (iOS and Android) and PC. Our team is adept at optimizing games for different devices, ensuring a seamless and engaging player experience.',
	},
	{
		id: 4,
		question: 'What is your typical project timeline?',
		answer: 'The project timeline varies based on scope and complexity. After an initial consultation, we provide a detailed timeline. Most projects range from a few months to a year, with regular updates and milestones throughout development.',
	},
];

export default function Faqs() {
	const [openId, setOpenId] = useState<number | null>(1);

	const toggle = (id: number) => {
		setOpenId(prev => (prev === id ? null : id));
	};

	return (
		<>
			<section className="faq-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<h3 className="sm-head">FAQ&apos;s</h3>
							<h2 className="main-heading">Frequently Asked <b className="c-green">Questions</b></h2>
							<div className="accordion">
								{faqs.map((faq) => {
									const isOpen = openId === faq.id;
									return (
										<div className="accordion-item" key={faq.id}>
											<button
												id={`accordion-button-${faq.id}`}
												aria-expanded={isOpen}
												onClick={() => toggle(faq.id)}
											>
												<span className="accordion-title">{faq.question}</span>
												<span className="icon" aria-hidden="true"></span>
											</button>
											<div className="accordion-content" style={{ display: isOpen ? 'block' : 'none' }}>
												<p>{faq.answer}</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className="col-lg-6">
							<div className="img-wrap">
								<img className="img-01 lazy" data-src="/assets/images/faq-img-01.webp" alt="*" src="/assets/images/faq-img-01.webp" />
								<img className="img-02 lazy" data-src="/assets/images/faq-img-02.webp" alt="*" src="/assets/images/faq-img-02.webp" />
								<img className="img-03 lazy" data-src="/assets/images/fire.gif" alt="*" src="/assets/images/fire.gif" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
