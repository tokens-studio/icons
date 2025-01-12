import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVegan = ({
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
			d='M10 7.375C8.35293 9.10047 6.70587 13.3333 6.70587 13.3333C6.70587 13.3333 4.35294 7.375 2 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6641 3.71798L13.9481 6.66723C14.1323 8.5805 12.6978 10.284 10.7846 10.4682C8.90725 10.649 7.20664 9.27676 7.02584 7.3995C6.84511 5.52216 8.22038 3.85376 10.0977 3.673L13.2422 3.37022C13.4548 3.34975 13.6436 3.50545 13.6641 3.71798Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgVegan;
