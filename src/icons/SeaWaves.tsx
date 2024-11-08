import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSeaWaves = ({
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
			d='M2 6.667c1.655 0 2.897-2 2.897-2s1.24 2 2.896 2 3.31-2 3.31-2 1.656 2 2.897 2M2 11.333c1.655 0 2.897-2 2.897-2s1.24 2 2.896 2 3.31-2 3.31-2 1.656 2 2.897 2'
		/>
	</svg>
);
export default SvgSeaWaves;
