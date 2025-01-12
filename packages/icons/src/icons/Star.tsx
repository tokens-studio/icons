import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStar = ({
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
			d='M5.72496 5.49073L7.45664 2.00259C7.67891 1.5548 8.32118 1.5548 8.54344 2.00259L10.2751 5.49073L14.1477 6.05353C14.6446 6.12573 14.8426 6.73301 14.4829 7.08135L11.6812 9.79462L12.3424 13.6277C12.4273 14.1199 11.9076 14.4953 11.463 14.2628L8.00004 12.4521L4.53702 14.2628C4.09244 14.4953 3.57277 14.1199 3.65768 13.6277L4.31888 9.79462L1.51721 7.08135C1.15749 6.73301 1.35552 6.12573 1.85239 6.05353L5.72496 5.49073Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgStar;
