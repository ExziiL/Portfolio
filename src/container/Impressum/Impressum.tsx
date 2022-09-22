import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Impressum.scss';

const Impressum = () => {
	return (
		<div style={{ paddingTop: '75px', height: '100vh' }}>
			<h1>Impressum</h1>

			<h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
			<p>
				Andre Derjagin
				<br />
				Rombacher Str. 91
				<br />
				73430 Aalen
			</p>

			<h2>Kontakt</h2>
			<p>E-Mail: andrederjagin@live.de</p>

			<p>
				Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a>
			</p>
		</div>
	);
};

export default Impressum;
