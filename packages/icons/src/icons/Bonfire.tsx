import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBonfire = ({
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
			d='M6 9.33334C6 10.4066 6.91807 10.6667 8.05053 10.6667C9.9774 10.6667 10.6137 9.55554 9.33213 7.33334C7.53793 9.33334 7.2816 6.22223 7.53793 5.33334C6.76893 6.66668 6 7.91901 6 9.33334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00002 10.6667C10.104 10.6667 11.3334 9.26827 11.3334 6.875C11.3334 4.48177 8.00002 2 8.00002 2C8.00002 2 4.66669 4.48177 4.66669 6.875C4.66669 9.26827 5.89608 10.6667 8.00002 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.84839 14.0469L13.1516 11.2861'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M2.84839 11.2861L8 12.6665'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M13.1516 14.0469L10.5758 13.3567'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgBonfire;
