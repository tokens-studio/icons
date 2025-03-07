import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTwoPointsCircle = ({
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
			d='M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33329 4.00008C3.70148 4.00008 3.99996 3.7016 3.99996 3.33341C3.99996 2.96523 3.70148 2.66675 3.33329 2.66675C2.96511 2.66675 2.66663 2.96523 2.66663 3.33341C2.66663 3.7016 2.96511 4.00008 3.33329 4.00008Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 13.3333C13.0349 13.3333 13.3333 13.0349 13.3333 12.6667C13.3333 12.2985 13.0349 12 12.6667 12C12.2985 12 12 12.2985 12 12.6667C12 13.0349 12.2985 13.3333 12.6667 13.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 12.6667L11.6666 11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 10.3334L9.66663 9.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33329 8.33341L7.66663 7.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33329 6.33341L5.66663 5.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33337 4.33325L3.33337 3.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTwoPointsCircle;
