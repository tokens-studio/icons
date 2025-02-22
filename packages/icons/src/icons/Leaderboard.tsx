import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLeaderboard = ({
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
			d='M10 12.6667H6V8.33337V5.73337C6 5.51246 6.17909 5.33337 6.4 5.33337H9.6C9.82093 5.33337 10 5.51246 10 5.73337V9.66671V12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 3.33337H6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6 12.6666H10V10.0666C10 9.84569 10.1791 9.66663 10.4 9.66663H13.6C13.8209 9.66663 14 9.84569 14 10.0666V12.2666C14 12.4876 13.8209 12.6666 13.6 12.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 12.6667V8.73337C6 8.51244 5.82091 8.33337 5.6 8.33337H2.4C2.17909 8.33337 2 8.51244 2 8.73337V12.2667C2 12.4876 2.17909 12.6667 2.4 12.6667H6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLeaderboard;
