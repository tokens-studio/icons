import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGamepad = ({
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
			d='M12.6668 11.6667C14.3335 14 16.9659 12.2768 16.3335 10C15.3837 6.58077 14.8669 4.67706 14.5981 3.67197C14.4399 3.08093 13.9043 2.66669 13.2924 2.66669H4.70782C4.096 2.66669 3.56279 3.08323 3.41402 3.67669C2.85445 5.90901 2.35519 7.86775 1.76289 10C1.13046 12.2768 3.76289 14 5.42955 11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 5.66669L13.0074 5.67335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9934 4.66669L12.0008 4.67335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9934 6.66669L12.0008 6.67335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 5.66669L11.0074 5.67335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66675 4.66669V6.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 5.66669H6.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33333 10.6667C7.06971 10.6667 7.66667 10.0697 7.66667 9.33333C7.66667 8.59693 7.06971 8 6.33333 8C5.59695 8 5 8.59693 5 9.33333C5 10.0697 5.59695 10.6667 6.33333 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6666 10.6667C12.403 10.6667 12.9999 10.0697 12.9999 9.33333C12.9999 8.59693 12.403 8 11.6666 8C10.9302 8 10.3333 8.59693 10.3333 9.33333C10.3333 10.0697 10.9302 10.6667 11.6666 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGamepad;
