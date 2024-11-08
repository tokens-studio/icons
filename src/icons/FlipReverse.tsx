import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFlipReverse = ({
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
			d='M6.333 8v1.333M3.833 8l-.625 1.333M5.083 13.333h1.25V12M2.583 13.333h-1.25L1.958 12M5.083 5.333l1.25-2.666v2.666M9.667 13.333h5l-5-10.666z'
		/>
	</svg>
);
export default SvgFlipReverse;
