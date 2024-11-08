import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCoinsSwap = ({
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
			d='M6.013 6A4.333 4.333 0 1 1 10 9.987'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.667 14.667a4.333 4.333 0 1 1 0-8.667 4.333 4.333 0 0 1 0 8.667M14.667 11.333a2 2 0 0 1-2 2h-1.334m0 0L12.667 12m-1.334 1.333 1.334 1.334M1.333 4.667a2 2 0 0 1 2-2h1.334m0 0L3.333 4m1.334-1.333L3.333 1.333'
		/>
	</svg>
);
export default SvgCoinsSwap;
