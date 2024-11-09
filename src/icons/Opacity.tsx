import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOpacity = ({
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
			fill='currentColor'
			fillRule='evenodd'
			d='M9.47 4.363c.64.005 1.252.13 1.815.352.223.563.347 1.175.352 1.816zm-1.807.314a5 5 0 0 0-1.102.572l4.19 4.19q.351-.512.572-1.102zm2.064 5.86L5.463 6.273a5 5 0 0 0-.638 1.035l3.867 3.867a5 5 0 0 0 1.035-.638m-2.712 1.082L4.38 8.985a5.1 5.1 0 0 0 .182 1.855l.597.597a5.1 5.1 0 0 0 1.855.182M6.575.012a6.56 6.56 0 0 1 5.842 3.57 6.563 6.563 0 1 1-8.835 8.835A6.563 6.563 0 0 1 6.575.012m7.913 9.413a5.05 5.05 0 0 0-1.38-3.473q.03.308.03.623a6.563 6.563 0 0 1-7.186 6.533 5.063 5.063 0 0 0 8.536-3.683'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgOpacity;
