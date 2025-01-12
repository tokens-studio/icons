import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEcologyBook = ({
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
			d='M2.66666 12.6667V3.33333C2.66666 2.59695 3.26361 2 3.99999 2H12.9333C13.1543 2 13.3333 2.17909 13.3333 2.4V11.1429'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M6.66666 9.33333C6.66666 9.33333 7.26666 7.25493 8.66666 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.53481 8.28301L8.44514 8.29148C7.31721 8.39741 6.31268 7.56941 6.20144 6.442C6.09019 5.31459 6.91434 4.31473 8.04228 4.20875L10.0327 4.02173C10.1604 4.00973 10.2741 4.10347 10.2867 4.2311L10.4565 5.95172C10.5726 7.12861 9.71221 8.17241 8.53481 8.28301Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M4 11.3333H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path d='M4 14H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M3.99999 14C3.26361 14 2.66666 13.403 2.66666 12.6666C2.66666 11.9302 3.26361 11.3333 3.99999 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEcologyBook;
