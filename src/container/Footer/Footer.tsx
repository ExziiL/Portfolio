import React, { useState } from 'react';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Footex.scss';

const Footer = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e: any) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message,
		};

		setLoading(false);
		setIsFormSubmitted(true);
	};

	return (
		<>
			<h2 className="head-text">Kontaktiere mich!</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img
						src={images.email}
						alt="email"
					/>
					<a href="mailto:derjagin.andre@gmail.com">derjagin.andre@gmail.com</a>
				</div>
				<div className="app__footer-card">
					<img
						src={images.mobile}
						alt="mobile"
					/>
					<a href="tel:+01743461407">+0174 3461407</a>
				</div>
			</div>

			{/* {!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							placeholder="Your Name"
							value={name}
							onChange={handleChangeInput}
							name="name"
						/>
					</div>
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							placeholder="Your Email"
							value={email}
							onChange={handleChangeInput}
							name="email"
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							name="message"
							value={message}
							onChange={handleChangeInput}
						></textarea>
					</div>

					<button
						className="p-text"
						onClick={handleSubmit}
						type="button"
					>
						{loading ? 'Sending' : 'Send Message'}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head_text">Thank you for getting in touch</h3>
				</div>
			)} */}
		</>
	);
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
