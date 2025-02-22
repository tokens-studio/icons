import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenConnectWifi = ({
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
			d='M5.33334 6.50667L5.34001 6.49927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 4.16658C3.66667 2.16664 7 2.16663 8.66667 4.16664'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 5.50002C4.33334 4.16666 6.33334 4.16666 7.33334 5.50002'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6667 4.33332L12.3333 3.66666C12.8856 3.11437 13.7811 3.11437 14.3333 3.66666C14.8856 4.21894 14.8856 5.11437 14.3333 5.66666L13.6667 6.33332M11.6667 4.33332L4.46393 11.5361C4.37849 11.6215 4.31788 11.7285 4.28858 11.8457L3.66666 14.3333L6.15418 13.7115C6.2714 13.6821 6.37845 13.6215 6.46389 13.5361L13.6667 6.33332M11.6667 4.33332L13.6667 6.33332'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPenConnectWifi;
