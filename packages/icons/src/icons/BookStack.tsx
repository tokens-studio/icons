import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBookStack = ({
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
			d='M3.33331 13V3.33333C3.33331 2.59695 3.93027 2 4.66665 2H12.2666C12.4876 2 12.6666 2.17909 12.6666 2.4V14'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M6 4.66666H10' stroke='currentColor' strokeLinecap='round' />
		<path d='M4.33331 10H12.6666' stroke='currentColor' strokeLinecap='round' />
		<path d='M4.33331 12H12.6666' stroke='currentColor' strokeLinecap='round' />
		<path d='M4.33331 14H12.6666' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M4.33331 12C3.66665 12 3.33331 11.5523 3.33331 11C3.33331 10.4477 3.66665 10 4.33331 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33331 14C3.66665 14 3.33331 13.5523 3.33331 13C3.33331 12.4477 3.66665 12 4.33331 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBookStack;
