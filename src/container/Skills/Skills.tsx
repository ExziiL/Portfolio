import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { client, urlFor } from '../../client';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
	const experiences = [
		{
			works: [
				{
					name: 'Fachabitur',
					company: 'BOS Coburg',
					desc: 'Did my Fachabitur in Coburg',
				},
				{
					name: 'Learned to code on my own',
					company: 'quarantine',
					desc: 'as the name said, I learned to code on my own at that time',
				},
			],
			year: '2020',
		},
		{
			works: [
				{
					name: 'Frontend Developer',
					company: 'Clickconcepts',
					desc: 'Created Storybook for entire Project for Frontend Managers to use',
				},
			],
			year: '2021',
		},
	];
	const skills = [
		{
			name: 'HTML',
			bgColor: '#edf2f8',
			icon: images.html,
		},
		{
			name: 'CSS',
			bgColor: '#edf2f8',
			icon: images.css,
		},
		{
			name: 'Sass',
			bgColor: '#edf2f8',
			icon: images.sass,
		},
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
			name: 'Git',
			bgColor: '#edf2f8',
			icon: images.git,
		},
	];

	return (
		<>
			<h2 className="head-text">Skills & Experience</h2>

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
										</motion.div>

										<ReactTooltip
											id={work.name}
											effect="solid"
											arrowColor="#fff"
											className="skills-tooltip"
										>
											{work.desc}
										</ReactTooltip>
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
export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
