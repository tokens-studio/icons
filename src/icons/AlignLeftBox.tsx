import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignLeftBox = ({
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
			d='m10.67 2.663-.008.007M13.336 2.663l-.007.007M13.336 5.33l-.007.007M13.336 7.997l-.007.006M13.336 10.663l-.007.007M13.336 13.33l-.007.007M10.67 13.33l-.008.007M8.004 2.663H2.671V13.33h5.333z'
		/>
	</svg>
);
export default SvgAlignLeftBox;
