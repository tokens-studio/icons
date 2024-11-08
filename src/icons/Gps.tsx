import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGps = ({
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
			d='M15.667 5.667h-1.5a1.167 1.167 0 1 0 0 2.333h1a1.167 1.167 0 0 1 0 2.333H13M8 10.333V8.467m0 0h1.905c.476 0 1.428 0 1.428-1.4s-.952-1.4-1.428-1.4H8zM5.333 6.085A2.333 2.333 0 1 0 4 10.333c1.289 0 2.333-1 2.333-2.333h-2'
		/>
	</svg>
);
export default SvgGps;
