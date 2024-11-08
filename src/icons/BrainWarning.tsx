import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrainWarning = ({
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
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.667 9.333a2 2 0 1 0 .666 3.887'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2.843 10.403A2.667 2.667 0 0 1 2.26 5.98M2.28 5.925a1.667 1.667 0 0 1 2.386-2.259M8 3a1.667 1.667 0 1 0-3.175.71M5.333 13.333a1.333 1.333 0 1 0 2.667 0M11.333 9.333a2 2 0 1 1-.666 3.887'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.158 10.403a2.667 2.667 0 0 0 .582-4.424M13.72 5.925a1.667 1.667 0 0 0-2.386-2.259M8 3a1.667 1.667 0 1 1 3.175.71M10.667 13.333a1.333 1.333 0 0 1-2.667 0M8 5.333V8M8 10.673l.007-.007'
		/>
	</svg>
);
export default SvgBrainWarning;
