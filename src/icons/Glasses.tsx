import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGlasses = ({
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
			d='M1.333 9.333a2.667 2.667 0 1 0 5.334 0 2.667 2.667 0 0 0-5.334 0m0 0V4M14.667 9.333a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0m0 0V4M9.333 9.333H6.667'
		/>
	</svg>
);
export default SvgGlasses;
