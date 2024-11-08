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
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M3.333 13V3.333C3.333 2.597 3.93 2 4.667 2h7.6a.4.4 0 0 1 .4.4V14M6 4.667h4M4.333 10h8.334M4.333 12h8.334M4.333 14h8.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.333 12c-.666 0-1-.448-1-1s.334-1 1-1M4.333 14c-.666 0-1-.448-1-1s.334-1 1-1'
		/>
	</svg>
);
export default SvgBookStack;
