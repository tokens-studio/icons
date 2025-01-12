import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMouseButtonLeft = ({
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
			d='M13.3334 6.66671V9.33337C13.3334 12.2789 10.9456 14.6667 8.00008 14.6667C5.05456 14.6667 2.66675 12.2789 2.66675 9.33337V6.00004C2.66675 3.42271 4.75609 1.33337 7.33341 1.33337H8.00008C10.9456 1.33337 13.3334 3.72119 13.3334 6.66671Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M8.00008 1.33337V5.60004C8.00008 5.82095 7.82101 6.00004 7.60008 6.00004H2.66675'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgMouseButtonLeft;
