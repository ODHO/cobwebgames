'use client';

import { useEffect } from 'react';

export default function Technologies() {
	useEffect(() => {
		let slickTimer: NodeJS.Timeout;

		const initSlick = () => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if (typeof window !== 'undefined' && (window as any).$ && (window as any).$.fn.slick) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const $ = (window as any).$;
				$(".tech-mob-slider").not('.slick-initialized').slick({
					arrows: false,
					dots: true,
					autoplay: true,
					adaptiveHeight: true,
					responsive: [
						{
							breakpoint: 10000,
							settings: "unslick"
						},
						{
							breakpoint: 900,
							settings: {
								unslick: true,
								slidesToShow: 2
							}
						},
						{
							breakpoint: 700,
							settings: {
								slidesToShow: 1
							}
						}
					]
				});
			} else {
				slickTimer = setTimeout(initSlick, 100);
			}
		};

		initSlick();

		return () => {
			clearTimeout(slickTimer);
		};
	}, []);

	return (
		<>
			<section className="tech-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h4>Technologies</h4>
							<h2 className="main-heading">Our <b className="c-green">Technology</b> Stack</h2>
						</div>
					</div>
					<div className="row mob-slider tech-mob-slider">
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<img className="lazy" src="/assets/images/techs/logo-01.webp" data-src="/assets/images/techs/logo-01.webp" alt="*" />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<img className="lazy" src="/assets/images/techs/logo-02.webp" data-src="/assets/images/techs/logo-02.webp" alt="*" />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<img className="lazy" src="/assets/images/techs/logo-03.webp" data-src="/assets/images/techs/logo-03.webp" alt="*" />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<img className="lazy" src="/assets/images/techs/logo-04.webp" data-src="/assets/images/techs/logo-04.webp" alt="*" />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<img className="lazy" src="/assets/images/techs/logo-05.webp" data-src="/assets/images/techs/logo-05.webp" alt="*" />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<img className="lazy" src="/assets/images/techs/logo-09.webp" data-src="/assets/images/techs/logo-09.webp" alt="*" />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<img className="lazy" src="/assets/images/techs/logo-07.webp" data-src="/assets/images/techs/logo-07.webp" alt="*" />
							</div>
						</div>
						<div className="col-lg-3 col-md-4">
							<div className="logo-box-wrap">
								<img className="lazy" src="/assets/images/techs/logo-08.webp" data-src="/assets/images/techs/logo-08.webp" alt="*" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
