import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCinemaOld = ({
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
			d='M4.66665 9.33335C5.40303 9.33335 5.99998 8.73642 5.99998 8.00002C5.99998 7.26362 5.40303 6.66669 4.66665 6.66669C3.93027 6.66669 3.33331 7.26362 3.33331 8.00002C3.33331 8.73642 3.93027 9.33335 4.66665 9.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 9.33335C12.0697 9.33335 12.6667 8.73642 12.6667 8.00002C12.6667 7.26362 12.0697 6.66669 11.3333 6.66669C10.5969 6.66669 10 7.26362 10 8.00002C10 8.73642 10.5969 9.33335 11.3333 9.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00002 5.99998C8.73642 5.99998 9.33335 5.40303 9.33335 4.66665C9.33335 3.93027 8.73642 3.33331 8.00002 3.33331C7.26362 3.33331 6.66669 3.93027 6.66669 4.66665C6.66669 5.40303 7.26362 5.99998 8.00002 5.99998Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00002 12.6667C8.73642 12.6667 9.33335 12.0697 9.33335 11.3333C9.33335 10.5969 8.73642 10 8.00002 10C7.26362 10 6.66669 10.5969 6.66669 11.3333C6.66669 12.0697 7.26362 12.6667 8.00002 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33331 7.99998C1.33331 11.6818 4.31808 14.6666 7.99998 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99998C14.6666 4.31808 11.6818 1.33331 7.99998 1.33331C4.31808 1.33331 1.33331 4.31808 1.33331 7.99998ZM1.33331 7.99998V14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCinemaOld;
