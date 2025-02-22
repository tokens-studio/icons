import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSquare3DCornerToCorner = ({
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
			d='M2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6Z'
			stroke='currentColor'
		/>
		<path
			d='M1.99998 2.66659C2.36817 2.66659 2.66665 2.36811 2.66665 1.99992C2.66665 1.63173 2.36817 1.33325 1.99998 1.33325C1.63179 1.33325 1.33331 1.63173 1.33331 1.99992C1.33331 2.36811 1.63179 2.66659 1.99998 2.66659Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 14.6666C14.3682 14.6666 14.6666 14.3681 14.6666 13.9999C14.6666 13.6317 14.3682 13.3333 14 13.3333C13.6318 13.3333 13.3333 13.6317 13.3333 13.9999C13.3333 14.3681 13.6318 14.6666 14 14.6666Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSquare3DCornerToCorner;
