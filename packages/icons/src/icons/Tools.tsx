import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTools = ({
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
			d='M6.70027 7.07104L1.98623 11.7851C1.46553 12.3058 1.46553 13.15 1.98623 13.6707C2.50692 14.1914 3.35114 14.1914 3.87184 13.6707L8.58587 8.95671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.4618 9.19971L14.0473 11.7852C14.568 12.3059 14.568 13.1502 14.0473 13.6708C13.5266 14.1916 12.6824 14.1916 12.1617 13.6708L8.02271 9.53191'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.48834 3.93585L3.07413 4.40726L1.65991 2.05024L2.60272 1.10742L4.95975 2.52164L4.48834 3.93585ZM4.48834 3.93585L6.37516 5.82267'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.70012 7.07117C6.13758 5.63583 6.24756 3.75251 7.40725 2.59284C8.56692 1.43316 10.7071 1.17863 11.8856 1.88573L9.85845 3.91285L9.67005 5.98687L11.744 5.79847L13.7712 3.77135C14.4783 4.94986 14.2238 7.09004 13.0641 8.24971C11.9044 9.40937 10.0211 9.51937 8.58578 8.95677'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTools;
