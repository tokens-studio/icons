import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoccerBall = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M7.99992 5.33325L10.5361 7.17585M7.99992 5.33325L5.46378 7.17585M7.99992 5.33325V3.33325M10.5361 7.17585L9.56738 10.1573M10.5361 7.17585L12.3333 6.33325M5.46378 7.17585L6.43251 10.1573M5.46378 7.17585L3.66659 6.33325M7.99992 3.33325L5.74948 1.72265M7.99992 3.33325L10.2504 1.72265M9.56738 10.1573H6.43251M9.56738 10.1573L10.6666 11.6666M12.3333 6.33325L14.6337 8.66658M12.3333 6.33325L12.9999 3.59021M6.43251 10.1573L5.33325 11.6666M10.6666 11.6666L13.7747 11.3333M10.6666 11.6666L8.99992 14.5921M5.33325 11.6666L2.22513 11.3333M5.33325 11.6666L6.99992 14.5921M3.66659 6.33325L1.36617 8.66658M3.66659 6.33325L2.99992 3.59021M14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99992C1.33325 4.31802 4.31802 1.33325 7.99992 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSoccerBall;
