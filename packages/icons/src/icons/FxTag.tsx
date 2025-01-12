import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFxTag = ({
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
			d='M1.33325 10V6C1.33325 3.79086 3.12411 2 5.33325 2H10.6666C12.8757 2 14.6666 3.79086 14.6666 6V10C14.6666 12.2091 12.8757 14 10.6666 14H5.33325C3.12411 14 1.33325 12.2091 1.33325 10Z'
			stroke='currentColor'
		/>
		<path
			d='M4 10V6H7.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 8H6.38095'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66675 10L10.3334 8M10.3334 8L12.0001 6M10.3334 8L8.66675 6M10.3334 8L12.0001 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFxTag;
