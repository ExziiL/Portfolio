import { motion } from 'framer-motion';
import React from 'react';

const MotionWrap = (Component: any, classNames: any) =>
	function HOC() {
		return (
			<motion.div
				className={`${classNames} app__flex`}
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<Component />
			</motion.div>
		);
	};

export default MotionWrap;
