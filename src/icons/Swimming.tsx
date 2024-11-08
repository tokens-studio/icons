import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSwimming = ({
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
			d='M2 10c1.655 0 2.897-2 2.897-2s1.24 2 2.896 2 3.31-2 3.31-2S12.76 10 14 10M2 13.333c1.655 0 2.897-2 2.897-2s1.24 2 2.896 2 3.31-2 3.31-2 1.656 2 2.897 2M3.333 7 6 5.333l-.791-.989A.841.841 0 0 1 6.51 3.28l2.822 3.387M11 5.333A1.667 1.667 0 1 0 11 2a1.667 1.667 0 0 0 0 3.333'
		/>
	</svg>
);
export default SvgSwimming;
