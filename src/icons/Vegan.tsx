import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVegan = ({
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
			d='M10 7.375C8.353 9.1 6.706 13.333 6.706 13.333S4.353 7.375 2 6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m13.664 3.718.284 2.95c.184 1.913-1.25 3.616-3.163 3.8-1.878.181-3.578-1.191-3.76-3.068a3.415 3.415 0 0 1 3.073-3.727l3.144-.303a.387.387 0 0 1 .422.348'
		/>
	</svg>
);
export default SvgVegan;
