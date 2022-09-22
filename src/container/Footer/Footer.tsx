import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { client } from '../../client';
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
			name: formData.name,
			email: formData.email,
			message: formData.message,
		};

		// client
		// 	.create(contact)
		// 	.then(() => {
		// 		setLoading(false);
		// 		setIsFormSubmitted(true);
		// 	})
		// 	.catch((error) => console.log(error));

		setTimeout(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		}, 500);
	};

	let navigate = useNavigate();

	function handleClickDatenschutz() {
		navigate('/datenschutz');
		// window.scrollTo({
		// 	top: 0,
		// 	left: 0,
		// 	behavior: 'smooth',
		// });
	}

	const handleClickImpressum = () => {
		navigate('/impressum');
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
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
				{/* <div className="app__footer-card">
					<img
						src={images.mobile}
						alt="mobile"
					/>
					<a href="tel:+01743461407">+0174 3461407</a>
				</div> */}
			</div>
			{!isFormSubmitted ? (
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
					<h3 className="head_text">Die Nachricht wurde erfolgreich versendet!</h3>
				</div>
			)}
			<div className="app__footer-legal">
				<ul>
					<li onClick={handleClickImpressum}>Impressum</li>
					<li onClick={handleClickDatenschutz}>Datenschutz</li>
				</ul>
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
