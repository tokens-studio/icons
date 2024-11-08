import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCart = ({
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
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13 14.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.333 14.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 2.667h11.334L13.333 10H4.667zm0 0c-.11-.445-.666-1.334-2-1.334M13.333 10H3.487c-1.19 0-1.82.52-1.82 1.333s.63 1.334 1.82 1.334H13'
		/>
	</svg>
);
export default SvgCart;
