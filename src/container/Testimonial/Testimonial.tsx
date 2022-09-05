import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { images } from '../../constants';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	// const brands = [
	// 	{
	// 		imgUrl: images.clickconcepts,
	// 		name: 'Asus',
	// 		id: 1,
	// 	},
	// 	{
	// 		imgUrl: images.besserTT,
	// 		name: 'Flutter',
	// 		id: 2,
	// 	},
	// 	{
	// 		imgUrl: images.spotify,
	// 		name: 'Spotify',
	// 		id: 3,
	// 	},
	// ];
	const testimonials = [
		{ name: 'Michael', company: 'Clickconcepts', imgUrl: images.css, feedback: 'ganz okay' },
		{ name: 'Thomas', company: 'Autocenter Lichtenfels', imgUrl: images.html, feedback: 'gut, die zusammenarbeit hat super funktioniert' },
	];

	const handleClick = (index: any) => {
		setCurrentIndex(index);
	};

	const test = testimonials[currentIndex];
	return (
		<>
			<h2 className="app__testimonial-header head-text">Kundenrezensionen</h2>

			{testimonials.length && (
				<>
					<div className="app__testimonial-item app__flex">
						<img
							src={test.imgUrl}
							alt="testimonial"
							className=""
						/>
						<div className="app__testimonial-content">
							<p className="p-text">{test.feedback}</p>
							<div>
								<h4 className="bold-text">{test.name}</h4>
								<h5 className="p-text">{test.company}</h5>
							</div>
						</div>
					</div>

					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
						>
							<HiChevronLeft />
						</div>
						<div
							className="app__flex"
							onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
						>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}

			{/* <div className="app__testimonial-brands app__flex">
				{brands.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: 'tween' }}
						key={brand.id}
					>
						<img
							src={brand.imgUrl}
							alt={brand.name}
						/>
					</motion.div>
				))}
			</div> */}
		</>
	);
};

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonials', 'app__primarybg');
