import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

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
				<BsGithub />
			</div>
			<div onClick={onClickUrl('https://www.linkedin.com/in/andre-derjagin-94b0271a6/')}>
				<BsLinkedin />
			</div>
		</div>
	);
};
