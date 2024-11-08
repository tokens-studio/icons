import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVehicleGreen = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={17}
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
			d='M4.667 6.667H10M4 9.333h.667M10 9.333h.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M4 12H1.333v1.6c0 .22.18.4.4.4H3.6a.4.4 0 0 0 .4-.4zm0 0h4.667M1.333 12V7.607c0-.18.037-.36.108-.525l1.546-3.607c.21-.49.692-.808 1.226-.808h6.241c.534 0 1.016.318 1.226.808l1.546 3.607c.07.166.107.345.107.525v.726'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.333 15.333s.6-2.078 2-3.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m13.202 14.283-.09.008a2.063 2.063 0 0 1-2.244-1.849 2.04 2.04 0 0 1 1.841-2.233l1.99-.187a.233.233 0 0 1 .254.21l.17 1.72a2.13 2.13 0 0 1-1.921 2.331'
		/>
	</svg>
);
export default SvgVehicleGreen;
