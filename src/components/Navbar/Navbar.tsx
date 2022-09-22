import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const links = ['home', 'skills', 'work', 'contact'];
	let navigate = useNavigate();

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">{/* <img src={images.logo} alt="images" /> */}</div>
			<ul className="app__navbar-links">
				{location.pathname === '/'
					? links.map((item) => (
							<li
								className="app__flex p-text"
								key={`link-${item}`}
							>
								<div />
								<a href={`#${item}`}>{item}</a>
							</li>
					  ))
					: ['Startseite'].map((item) => (
							<li
								className="app__flex p-text"
								key={`link-${item}`}
							>
								<div />
								<a
									onClick={() => {
										navigate('/');
									}}
								>
									{item}
								</a>
							</li>
					  ))}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: 'easeOut' }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{location.pathname === '/'
								? links.map((item) => (
										<li key={item}>
											<a
												href={`#${item}`}
												onClick={() => setToggle(false)}
											>
												{item}
											</a>
										</li>
								  ))
								: ['Startseite'].map((item) => (
										<li key={item}>
											<a
												onClick={() => {
													setToggle(false);
													navigate('/');
												}}
											>
												{item}
											</a>
										</li>
								  ))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
