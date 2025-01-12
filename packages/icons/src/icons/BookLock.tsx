import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBookLock = ({
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
		<path
			d='M9.33333 6.66667H9.6C9.82093 6.66667 10 6.84573 10 7.06667V8.93333C10 9.15427 9.82093 9.33333 9.6 9.33333H6.4C6.17909 9.33333 6 9.15427 6 8.93333V7.06667C6 6.84573 6.17909 6.66667 6.4 6.66667H6.66667M9.33333 6.66667V5.33333C9.33333 4.88889 9.06667 4 8 4C6.93333 4 6.66667 4.88889 6.66667 5.33333V6.66667M9.33333 6.66667H6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M4 11.3333H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path d='M4 14H13.3333' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M4.00002 14C3.26364 14 2.66669 13.4031 2.66669 12.6667C2.66669 11.9303 3.26364 11.3333 4.00002 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBookLock;
