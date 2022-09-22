import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './App.scss';
import { Navbar } from './components';
import { SocialMedia } from './components/SocialMedia';
import { About, Datenschutz, Footer, Header, Impressum, Landingpage, Skills, Testimonial, Work } from './container';

const App = () => {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Landingpage />}
					/>
					<Route
						path="/datenschutz"
						element={<Datenschutz />}
					/>
					<Route
						path="/impressum"
						element={<Impressum />}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
