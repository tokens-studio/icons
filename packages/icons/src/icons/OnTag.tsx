import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOnTag = ({
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
			d='M1.66675 10V6C1.66675 3.79086 3.45761 2 5.66675 2H12.3334C14.5425 2 16.3334 3.79086 16.3334 6V10C16.3334 12.2091 14.5425 14 12.3334 14H5.66675C3.45761 14 1.66675 12.2091 1.66675 10Z'
			stroke='currentColor'
		/>
		<path
			d='M7 6C8.1046 6 9 6.8954 9 8C9 9.1046 8.1046 10 7 10C5.89543 10 5 9.1046 5 8C5 6.8954 5.89543 6 7 6Z'
			stroke='currentColor'
		/>
		<path
			d='M10.3333 10V6L12.9999 10V6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOnTag;
