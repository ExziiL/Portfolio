import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../components';
// import { SocialMedia } from './components/SocialMedia';
import { About, Datenschutz, Footer, Header, Impressum, Skills, Testimonial, Work } from '../../container';

const App = () => {
	return (
		<div className="app">
			<Header />
			{/* <About /> */}
			<Skills />
			<Work />
			{/* <Testimonial /> */}
			<Footer />
		</div>
	);
};

export default App;
