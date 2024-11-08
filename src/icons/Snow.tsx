import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSnow = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M9 8v3.333m0 0v3.334m0-3.334L6 9.667m3 1.666L12 13m-3-1.667 3-1.666m-3 1.666L6 13M14.333 11.738c.996-.39 2-1.279 2-3.071C16.333 6 14.111 5.333 13 5.333c0-1.333 0-4-4-4S5 4 5 5.333c-1.111 0-3.333.667-3.333 3.334 0 1.792 1.004 2.681 2 3.071'
		/>
	</svg>
);
export default SvgSnow;
