import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPanoramaEnlarge = ({
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
			d='M8 3.333c1.997 0 4.824.462 5.718.617.17.03.298.164.32.335.086.686.295 2.461.295 3.715s-.209 3.03-.296 3.715a.39.39 0 0 1-.32.335c-.893.155-3.72.617-5.717.617s-4.823-.462-5.718-.617a.39.39 0 0 1-.32-.335C1.877 11.03 1.668 9.254 1.668 8s.209-3.03.296-3.715a.39.39 0 0 1 .32-.335c.894-.155 3.72-.617 5.717-.617'
		/>
	</svg>
);
export default SvgPanoramaEnlarge;
