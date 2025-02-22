import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCoinSlash = ({
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
			d='M3.08207 3.49896C1.99597 4.68498 1.33325 6.26512 1.33325 8.00002C1.33325 11.682 4.31802 14.6667 7.99992 14.6667C9.69065 14.6667 11.2344 14.0373 12.4097 13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.2015 10.4516C14.5017 9.69278 14.6667 8.86565 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00008 1.33331C7.17921 1.33331 6.39297 1.48168 5.66675 1.75305'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 10C6.42965 10.5729 7.22853 10.8996 8 10.9273C8.74273 10.954 9.46007 10.7036 9.7982 10.1289'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 10.9273V12.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33325 6.33331C6.33325 7.12071 6.90159 7.44311 7.59072 7.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 5.66669C9.54333 5.21003 8.73913 4.89239 8 4.8725V3.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 2L14 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCoinSlash;
