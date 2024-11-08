import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHdr = ({
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
			d='M1 5.667V8m0 0v2.333M1 8h3m0 0V5.667M4 8v2.333M11.667 10.333V8.467m0 0v-2.8h1.904c.477 0 1.429 0 1.429 1.4s-.952 1.4-1.429 1.4m-1.904 0h1.904m0 0L15 10.333M6.333 8V5.667c1.667 0 3.334 0 3.334 2.333S8 10.333 6.333 10.333z'
		/>
	</svg>
);
export default SvgHdr;
