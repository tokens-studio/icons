import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrain = ({
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
			d='M6.406 4.667h3.188c.96 0 1.74.778 1.74 1.739a.26.26 0 0 1-.261.26H4.928a.26.26 0 0 1-.261-.26c0-.96.778-1.74 1.739-1.74'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 2h4a4 4 0 0 1 4 4v2.667a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4M10.667 10.007l.006-.008M5.333 10.007l.007-.008'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m7 12.667-1.333 1.666M9 12.667l1.333 1.666M11 12.667l1.333 1.666M5 12.667l-1.333 1.666'
		/>
	</svg>
);
export default SvgTrain;
