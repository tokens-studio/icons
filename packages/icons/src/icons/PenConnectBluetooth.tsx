import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenConnectBluetooth = ({
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
			d='M4.33336 11.6666L3.66666 14.3333L6.15418 13.7115C6.2714 13.6821 6.37845 13.6215 6.46389 13.5361L14.3333 5.66666C14.8856 5.11437 14.8856 4.21894 14.3333 3.66666C13.7811 3.11437 12.8856 3.11437 12.3333 3.66666L9.66666 6.33332'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6667 4.33337L13.6667 6.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 4.4L8.00001 7.8L5.55556 10V2L8.00001 4.2L3.33334 7.6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPenConnectBluetooth;
