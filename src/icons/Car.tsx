import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCar = ({
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
			d='M5.333 6.667h5.334M4.667 9.333h.666M10.667 9.333h.666'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 12V7.607c0-.18.037-.36.108-.525l1.546-3.607c.21-.49.692-.808 1.225-.808h6.242c.533 0 1.015.318 1.225.808l1.546 3.607c.071.166.108.344.108.525V12M2 12v1.6c0 .22.18.4.4.4h1.867a.4.4 0 0 0 .4-.4V12M2 12h2.667M14 12v1.6a.4.4 0 0 1-.4.4h-1.867a.4.4 0 0 1-.4-.4V12M14 12h-2.667m-6.666 0h6.666'
		/>
	</svg>
);
export default SvgCar;
