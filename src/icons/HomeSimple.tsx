import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeSimple = ({
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
			d='M11.333 14H4.667A2.667 2.667 0 0 1 2 11.333V7.138c0-.932.487-1.797 1.285-2.28l3.333-2.02a2.67 2.67 0 0 1 2.764 0l3.334 2.02A2.67 2.67 0 0 1 14 7.138v4.195A2.667 2.667 0 0 1 11.333 14M6 11.333h4'
		/>
	</svg>
);
export default SvgHomeSimple;
