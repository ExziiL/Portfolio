import React from 'react';

export const NavigationDots = ({ active }: any) => {
	const links = ['home', 'about', 'work', 'skills', 'testimonials', 'contact'];
	return (
		<div className="app__navigation">
			{links.map((item, index) => (
				<a
					href={`#${item}`}
					key={item + index}
					style={active === item ? { backgroundColor: '#313BAC' } : {}}
					className="app__navigation-dot"
				/>
			))}
		</div>
	);
};
