import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSleeperChair = ({
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
			d='M2.667 12v2M3.333 6.667V3.333C3.333 2.597 3.93 2 4.667 2h6.666c.737 0 1.334.597 1.334 1.333v3.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13 6.667c-.92 0-1.667.746-1.667 1.666v1H4.667v-1a1.667 1.667 0 1 0-2 1.634V12h10.666V9.967a1.667 1.667 0 0 0-.333-3.3M13.333 12v2'
		/>
	</svg>
);
export default SvgSleeperChair;
