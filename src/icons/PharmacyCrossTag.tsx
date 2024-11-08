import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPharmacyCrossTag = ({
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
			d='M14 5.333v5.334A3.333 3.333 0 0 1 10.667 14H5.333A3.333 3.333 0 0 1 2 10.667V5.333A3.333 3.333 0 0 1 5.333 2h5.334A3.333 3.333 0 0 1 14 5.333'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M9.267 12H6.733a.4.4 0 0 1-.4-.4v-1.533a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 1-.4-.4V6.733c0-.22.18-.4.4-.4h1.533a.4.4 0 0 0 .4-.4V4.4c0-.22.18-.4.4-.4h2.534c.22 0 .4.18.4.4v1.533c0 .221.179.4.4.4H11.6c.22 0 .4.18.4.4v2.534a.4.4 0 0 1-.4.4h-1.533a.4.4 0 0 0-.4.4V11.6a.4.4 0 0 1-.4.4Z'
		/>
	</svg>
);
export default SvgPharmacyCrossTag;
