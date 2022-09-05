import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { client, urlFor } from '../../client';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = () => {
	const [filteredWorks, setFilteredWorks] = useState([]);
	const [activeFilter, setActiveFilter] = useState('Alle Projekte');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	const allWorks = [
		// TODO Java Uni Projekt auch einpflegen
		// 'React JS', 'HTML/CSS', 'Studium', 'Java', 'Alle Projekte'
		{
			imgUrl: images.besserTTScreenshot,
			name: 'BesserTischtennis',
			projectLink: 'https://bessertischtennis.de/',
			codeLink: 'https://github.com/ExziiL/besserTischtennis',
			title: 'BesserTischtennis.de',
			description: 'Ein Redesign der Homepage für BesserTischtennis.de',
			tags: ['React JS', 'Alle Projekte'],
		},
		{
			imgUrl: images.schiffeVersenken,
			name: 'Programmierpraktikum',
			projectLink: 'https://github.com/ExziiL/Programmierpraktikum',
			codeLink: 'https://github.com/ExziiL/Programmierpraktikum',
			title: 'Schiffe versenken',
			description: 'Programmierprojekt aus dem 3. Studiensemester',
			tags: ['Java', 'Studium', 'Alle Projekte'],
		},
		{
			imgUrl: images.autocenterLifScreenshot,
			name: 'Autocenter Lichtenfels',
			projectLink: 'https://exziil.github.io/Autocenter/index.html',
			codeLink: 'https://github.com/ExziiL/Autocenter',
			title: 'Autocenter-Lichtenfels.de',
			description: 'Redesign einer Homepage für eine Autowerkstatt',
			tags: ['HTML/CSS', 'Alle Projekte'],
		},
	];

	useEffect(() => {
		// @ts-ignore
		setFilteredWorks(allWorks);
	}, []);

	const handleWorkFilter = (item: any) => {
		setActiveFilter(item);
		setAnimateCard({ y: 100, opacity: 0 });

		setTimeout(() => {
			setAnimateCard({ y: 0, opacity: 1 });

			if (item == 'Alle Projekte') {
				// @ts-ignore
				setFilteredWorks(allWorks);
			} else {
				// @ts-ignore
				setFilteredWorks(allWorks.filter((_work) => _work['tags'].includes(item)));
			}
		}, 500);
	};

	return (
		<>
			<h2 className="head-text">
				Meine <span>Projekte</span>
			</h2>
			<div className="app__work-filter">
				{['React JS', 'HTML/CSS', 'Studium', 'Java', 'Alle Projekte'].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filteredWorks.map((work, index) => (
					<div
						className="app__work-item app__flex"
						key={index}
					>
						<div className="app__work-img app__flex">
							<img
								src={work['imgUrl']}
								alt={work['name']}
							/>

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
								className="app__work-hover app__flex"
							>
								<a
									href={work['projectLink']}
									target="_blank"
									rel="norefer"
								>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillEye />
									</motion.div>
								</a>
								<a
									href={work['codeLink']}
									target="_blank"
									rel="norefer"
								>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex"
									>
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className="app__work-content app__flex">
							<h4 className="bold-text">{work['title']}</h4>
							<p
								className="p-text"
								style={{ marginTop: 10 }}
							>
								{work['description']}
							</p>
							<div className="app__work-tag app__flex">
								<p className="p-text">{work['tags'][0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
