import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDiscord = ({
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
			d='M3.66666 10.6667C6.99999 12.3334 8.99999 12.3334 12.3333 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 11.6667L11 13C11 13 13.7809 12.1145 14.6667 10.6667C14.6667 10 15.0201 5.23561 12.6667 3.66669C11.6667 3.00002 10 2.66669 10 2.66669L9.33333 4.00002H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.68556 11.6667L5.01889 13C5.01889 13 2.23801 12.1145 1.35223 10.6667C1.35223 10 0.998832 5.23561 3.35223 3.66669C4.35223 3.00002 6.01889 2.66669 6.01889 2.66669L6.68555 4.00002H8.01888'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66666 9.33335C5.11437 9.33335 4.66666 8.73642 4.66666 8.00002C4.66666 7.26362 5.11437 6.66669 5.66666 6.66669C6.21894 6.66669 6.66666 7.26362 6.66666 8.00002C6.66666 8.73642 6.21894 9.33335 5.66666 9.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 9.33335C9.78108 9.33335 9.33334 8.73642 9.33334 8.00002C9.33334 7.26362 9.78108 6.66669 10.3333 6.66669C10.8856 6.66669 11.3333 7.26362 11.3333 8.00002C11.3333 8.73642 10.8856 9.33335 10.3333 9.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDiscord;
