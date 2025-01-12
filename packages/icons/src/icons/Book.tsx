import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBook = ({
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
			d='M2.66669 12.6667V3.33333C2.66669 2.59695 3.26364 2 4.00002 2H12.9334C13.1543 2 13.3334 2.17909 13.3334 2.4V11.1429'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M4 11.3333H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path d='M4 14H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M4.00002 14C3.26364 14 2.66669 13.4031 2.66669 12.6667C2.66669 11.9303 3.26364 11.3333 4.00002 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M6 4.66666H10' stroke='currentColor' strokeLinecap='round' />
	</svg>
);
export default SvgBook;
