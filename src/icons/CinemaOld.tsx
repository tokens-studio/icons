import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCinemaOld = ({
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
			d='M4.667 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666M11.333 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666M8 6a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 8 6M8 12.667A1.333 1.333 0 1 0 8 10a1.333 1.333 0 0 0 0 2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 8a6.667 6.667 0 1 0 13.334 0A6.667 6.667 0 0 0 1.333 8m0 0v6.667'
		/>
	</svg>
);
export default SvgCinemaOld;
