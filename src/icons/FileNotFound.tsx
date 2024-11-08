import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFileNotFound = ({
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
			d='M8 5.333V8M8 10.673l.007-.007M6 2H2.667v2M2.667 7.333v1.334M13.333 7.333v1.334M10 2h3.333v2M6 14H2.667v-2M10 14h3.333v-2'
		/>
	</svg>
);
export default SvgFileNotFound;
