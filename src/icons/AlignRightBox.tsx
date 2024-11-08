import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignRightBox = ({
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
			d='m5.337 13.337.008-.007M2.67 13.337l.008-.007M2.67 10.67l.008-.007M2.67 8.003l.008-.006M2.67 5.337l.008-.007M2.67 2.67l.008-.007M5.337 2.67l.008-.007M8.004 13.337h5.333V2.67H8.004z'
		/>
	</svg>
);
export default SvgAlignRightBox;
