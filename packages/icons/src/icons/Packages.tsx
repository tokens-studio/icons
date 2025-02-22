import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPackages = ({
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
			d='M6.66669 9.99996L6.6667 12.6666C6.66671 13.403 6.06975 14 5.33337 14H2.66671C1.93033 14 1.33337 13.403 1.33337 12.6666V9.99996C1.33337 9.26356 1.93033 8.66663 2.66671 8.66663H5.33336C6.06974 8.66663 6.66669 9.26356 6.66669 9.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 3.33333V5.99999C10.6667 6.7364 10.0698 7.33333 9.33337 7.33333H6.66671C5.93033 7.33333 5.33337 6.7364 5.33337 6V3.33333C5.33337 2.59695 5.93033 2 6.66671 2H9.33337C10.0697 2 10.6667 2.59695 10.6667 3.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 9.99996V12.6666C14.6667 13.403 14.0698 14 13.3334 14H10.6667C9.93031 14 9.33337 13.403 9.33337 12.6666V9.99996C9.33337 9.26356 9.93031 8.66663 10.6667 8.66663H13.3334C14.0697 8.66663 14.6667 9.26356 14.6667 9.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 10.6666V8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 4V2'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 10.6666V8.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPackages;
