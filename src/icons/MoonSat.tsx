import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMoonSat = ({
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
			strokeWidth={1.5}
			d='M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M5.088 2.045a2 2 0 1 1-2.41 2.168M14.667 8.7a2.333 2.333 0 1 0-2 3.943'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m9.667 5.673.006-.007M6.667 11.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666'
		/>
	</svg>
);
export default SvgMoonSat;
