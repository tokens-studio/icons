import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUsb = ({
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
			d='M8.333 1.333v10M8.333 9.333 12 8V5.667M8.333 10.667l-3.666-1v-2M8.333 14.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334M11 3.667v2h2v-2zM7 2.667l1.333-1.334 1.334 1.334M4.667 7.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666'
		/>
	</svg>
);
export default SvgUsb;
