import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTemperatureDown = ({
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
			d='M3.33333 7.99976C2.5237 8.60789 2 9.57616 2 10.6667C2 12.5076 3.49239 14 5.33333 14C7.17427 14 8.66667 12.5076 8.66667 10.6667C8.66667 9.57616 8.14293 8.60789 7.33333 7.99976'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33331 8V2H7.33331V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 2H8.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 4H8.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 6H8.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33333 9.33333C4.59695 9.33333 4 9.93027 4 10.6667C4 11.4031 4.59695 12 5.33333 12C6.06971 12 6.66667 11.4031 6.66667 10.6667C6.66667 9.93027 6.06971 9.33333 5.33333 9.33333ZM5.33333 9.33333V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 4V12M12.6667 12L14.3333 10.3333M12.6667 12L11 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTemperatureDown;
