import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const SocialMedia = (style: any) => {
	return (
		<div
			className="app__social"
			style={style}
		>
			<div>
				<BsGithub />
			</div>
			<div>
				<BsLinkedin />
			</div>
		</div>
	);
};
