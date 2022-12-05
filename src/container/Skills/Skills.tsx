import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
// import ReactTooltip from 'react-tooltip';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
	const experiences = [
		// {
		// 	works: [
		// 		{
		// 			name: 'Ausbildung zum Konstruktionsmechaniker',
		// 			company: 'Rösler Oberflächentechnik GmbH',
		// 			desc: '',
		// 		},
		// 	],
		// 	year: '2014',
		// },
		{
			works: [
				{
					name: 'Fachhochschulreife',
					company: 'FOS/BOS Coburg',
					desc: 'Ich habe die Fachhochschulreife im Technikzweig absolviert.',
				},
			],
			year: '2018',
		},
		{
			works: [
				{
					name: 'Informatikstudium',
					company: 'Hochschule Aalen',
					desc: 'Oktober 2020 begann mein Informatikstudium mit dem Schwerpunkt "Software Engineering".',
				},
			],
			year: '2020',
		},
		{
			works: [
				{
					name: 'Werkstudent - Frontend Development',
					company: 'Clickconcepts GmbH',
					desc: 'Components mit React, TypeScript und Frontastic erstellt. Zudem habe ich Storybook in das Projekt eingebunden, gepflegt und weiterentwickelt.',
				},
			],
			year: '2021',
		},
	];
	const skills = [
		{
			name: 'React',
			bgColor: '#edf2f8',
			icon: images.react,
		},
		{
			name: 'TypeScript',
			bgColor: '#edf2f8',
			icon: images.typescript,
		},
		{
			name: 'Sass',
			bgColor: '#edf2f8',
			icon: images.sass,
		},
		{
			name: 'CSS',
			bgColor: '#edf2f8',
			icon: images.css,
		},
		{
			name: 'HTML',
			bgColor: '#edf2f8',
			icon: images.html,
		},
		{
			name: 'Git',
			bgColor: '#edf2f8',
			icon: images.git,
		},
		{
			name: 'Storybook',
			bgColor: '#edf2f8',
			icon: images.storybook,
		},
		{
			name: 'TailwindCSS',
			bgColor: '#edf2f8',
			icon: images.tailwindcss,
		},
		{
			name: 'Frontastic',
			bgColor: '#edf2f8',
			icon: images.frontastic,
		},
	];

	return (
		<>
			<h2 className="head-text">Skills & Erfahrungen</h2>

			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}
						>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img
									src={skill.icon}
									alt={skill.name}
								/>
							</div>

							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div className="app__skills-exp">
					{experiences.map((experience) => (
						<motion.div
							className="app__skills-exp-item"
							key={experience.year}
						>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{experience.works.map((work: any) => (
									<>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tip
											data-for={work.name}
											key={work.name}
										>
											<h4 className="bold-text">{work.name}</h4>
											<p className="p-text">{work.company}</p>
											<p className="p-text app__skills-work-description">{work.desc}</p>
										</motion.div>

										{/* <ReactTooltip
											id={work.name}
											effect="solid"
											arrowColor="#fff"
											className="skills-tooltip"
										>
											{work.desc}
										</ReactTooltip> */}
									</>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

// export default AppWrap(Skills, 'skills');
export default AppWrap(MotionWrap(Skills, 'app__skills'), 'erfahrung', 'app__whitebg');
