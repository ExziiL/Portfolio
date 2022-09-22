import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
// import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export const SocialMedia = (style: any) => {
	const openInNewTab = (url: string): void => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	const onClickUrl =
		(url: string): (() => void) =>
		() =>
			openInNewTab(url);

	return (
		<div
			className="app__social"
			style={style}
		>
			<div onClick={onClickUrl('https://github.com/ExziiL')}>
				<SiGithub />
			</div>
			<div onClick={onClickUrl('https://www.linkedin.com/in/andre-derjagin-94b0271a6/')}>
				<SiLinkedin />
			</div>
		</div>
	);
};
