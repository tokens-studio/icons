import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMouseButtonRight = ({
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
			d='M2.66675 6.66671V9.33337C2.66675 12.2789 5.05456 14.6667 8.00008 14.6667C10.9456 14.6667 13.3334 12.2789 13.3334 9.33337V6.00004C13.3334 3.42271 11.2441 1.33337 8.66675 1.33337H8.00008C5.05456 1.33337 2.66675 3.72119 2.66675 6.66671Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M8 1.33337V5.60004C8 5.82095 8.17907 6.00004 8.4 6.00004H13.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgMouseButtonRight;
