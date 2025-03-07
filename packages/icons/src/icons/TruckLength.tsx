import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTruckLength = ({
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
			d='M4.66671 10.6667C5.40309 10.6667 6.00004 10.0697 6.00004 9.33333C6.00004 8.59693 5.40309 8 4.66671 8C3.93033 8 3.33337 8.59693 3.33337 9.33333C3.33337 10.0697 3.93033 10.6667 4.66671 10.6667Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 10.6667C12.0697 10.6667 12.6667 10.0697 12.6667 9.33333C12.6667 8.59693 12.0697 8 11.3333 8C10.5969 8 10 8.59693 10 9.33333C10 10.0697 10.5969 10.6667 11.3333 10.6667Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33337 9.33333V2.4C9.33337 2.17909 9.15431 2 8.93337 2H1.73337C1.51246 2 1.33337 2.17909 1.33337 2.4V8.93333C1.33337 9.15427 1.51246 9.33333 1.73337 9.33333H3.10004'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.33329 9.33325H6.03333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.33337 4H13.0734C13.2315 4 13.3748 4.09309 13.439 4.23755L14.6322 6.9224C14.655 6.9736 14.6667 7.02893 14.6667 7.08487V8.93333C14.6667 9.15427 14.4876 9.33333 14.2667 9.33333H13'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M9.33337 9.33325H10' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M2 13.3334H13.8333M2 13.3334L3.16667 14.5001M2 13.3334L3.16667 12.1667M13.8333 13.3334L12.6667 14.5001M13.8333 13.3334L12.6667 12.1667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTruckLength;
