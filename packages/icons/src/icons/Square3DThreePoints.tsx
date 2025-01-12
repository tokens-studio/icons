import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSquare3DThreePoints = ({
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
		<path d='M2 14V2.4C2 2.17909 2.17909 2 2.4 2H14' stroke='currentColor' />
		<path
			d='M11.3333 13.9999H13.6C13.8209 13.9999 14 13.8209 14 13.5999V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 4.66675V6.00008'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 8V9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 14H6.00002'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14H9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.99998 2.66659C2.36817 2.66659 2.66665 2.36811 2.66665 1.99992C2.66665 1.63173 2.36817 1.33325 1.99998 1.33325C1.63179 1.33325 1.33331 1.63173 1.33331 1.99992C1.33331 2.36811 1.63179 2.66659 1.99998 2.66659Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.99998 14.6666C2.36817 14.6666 2.66665 14.3681 2.66665 13.9999C2.66665 13.6317 2.36817 13.3333 1.99998 13.3333C1.63179 13.3333 1.33331 13.6317 1.33331 13.9999C1.33331 14.3681 1.63179 14.6666 1.99998 14.6666Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 2.66659C14.3682 2.66659 14.6666 2.36811 14.6666 1.99992C14.6666 1.63173 14.3682 1.33325 14 1.33325C13.6318 1.33325 13.3333 1.63173 13.3333 1.99992C13.3333 2.36811 13.6318 2.66659 14 2.66659Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSquare3DThreePoints;
