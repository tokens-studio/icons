import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSearchEngine = ({
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
			d='M2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2H12.6667C13.4031 2 14 2.59695 14 3.33333V12.6667C14 13.4031 13.4031 14 12.6667 14H3.33333C2.59695 14 2 13.4031 2 12.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M9.23748 9.23317C9.64981 8.81971 9.90474 8.24917 9.90474 7.61911C9.90474 6.35672 8.88141 5.33337 7.61908 5.33337C6.35669 5.33337 5.33334 6.35672 5.33334 7.61911C5.33334 8.88144 6.35669 9.90477 7.61908 9.90477C8.25134 9.90477 8.82368 9.64811 9.23748 9.23317ZM9.23748 9.23317L10.6667 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSearchEngine;
