import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShieldBroken = ({
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
			d='M7.66667 4.66663L6 7.99996H8H10L8.33333 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33339 12L2.08696 3.27501C2.03769 2.93015 2.26265 2.6083 2.60271 2.53273L7.71079 1.39759C7.90132 1.35526 8.09879 1.35526 8.28932 1.39759L13.3974 2.53273C13.7375 2.6083 13.9624 2.93015 13.9131 3.275L12.6667 12C12.6196 12.33 12.3334 14.3333 8.00005 14.3333C3.66672 14.3333 3.38053 12.33 3.33339 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShieldBroken;
