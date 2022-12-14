import { motion } from 'framer-motion';
import React from 'react';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Header.scss';

const Header = () => {
	const scaleVariants = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},
	};
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hi. Ich bin</p>
							<h1 className="head-text">Andre</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">Software Engineering Student</p>
						<p className="p-text">Junior Frontend Developer</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img
					className="app__header-profile_big"
					src={images.profile_big}
					alt="profile_bg"
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					className="overlay_circle"
					src={images.circle}
					alt="profile_circle"
				/>
			</motion.div>

			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[images.typescript, images.react, images.storybook].map((circle, index) => (
					<div
						className="circle-cmp app__flex"
						key={`circle-${index}`}
					>
						<img
							src={circle}
							alt="circle"
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'startseite', 'app__whitebg');
