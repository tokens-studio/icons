import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTemperatureUp = ({
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
			d='M2.66671 7.99976C1.85707 8.60789 1.33337 9.57616 1.33337 10.6667C1.33337 12.5076 2.82576 14 4.66671 14C6.50765 14 8.00004 12.5076 8.00004 10.6667C8.00004 9.57616 7.47631 8.60789 6.66671 7.99976'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66663 8V2H6.66663V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66663 2H7.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66663 4H7.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66663 6H7.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66671 9.33333C3.93033 9.33333 3.33337 9.93027 3.33337 10.6667C3.33337 11.4031 3.93033 12 4.66671 12C5.40309 12 6.00004 11.4031 6.00004 10.6667C6.00004 9.93027 5.40309 9.33333 4.66671 9.33333ZM4.66671 9.33333V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 12V4M12.6667 4L14.3333 5.66667M12.6667 4L11 5.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTemperatureUp;
