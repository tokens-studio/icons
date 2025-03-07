import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTruck = ({
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
			d='M4.66671 12.6667C5.40309 12.6667 6.00004 12.0697 6.00004 11.3333C6.00004 10.5969 5.40309 10 4.66671 10C3.93033 10 3.33337 10.5969 3.33337 11.3333C3.33337 12.0697 3.93033 12.6667 4.66671 12.6667Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 12.6667C12.0697 12.6667 12.6667 12.0697 12.6667 11.3333C12.6667 10.5969 12.0697 10 11.3333 10C10.5969 10 10 10.5969 10 11.3333C10 12.0697 10.5969 12.6667 11.3333 12.6667Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33337 11.3333V4.4C9.33337 4.17909 9.15431 4 8.93337 4H1.73337C1.51246 4 1.33337 4.17909 1.33337 4.4V10.9333C1.33337 11.1543 1.51246 11.3333 1.73337 11.3333H3.10004'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.33329 11.3333H6.03333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.33337 6H13.0734C13.2315 6 13.3748 6.09309 13.439 6.23755L14.6322 8.9224C14.655 8.9736 14.6667 9.02893 14.6667 9.08487V10.9333C14.6667 11.1543 14.4876 11.3333 14.2667 11.3333H13'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M9.33337 11.3333H10' stroke='currentColor' strokeLinecap='round' />
	</svg>
);
export default SvgTruck;
