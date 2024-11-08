import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCommodity = ({
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
			strokeWidth={1.5}
			d='m8.098 12.187.789-3.867A.4.4 0 0 1 9.279 8h4.109a.4.4 0 0 1 .392.32l.789 3.867a.4.4 0 0 1-.392.48H8.49a.4.4 0 0 1-.392-.48Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m4.765 7.52.789-3.867a.4.4 0 0 1 .392-.32h4.108a.4.4 0 0 1 .392.32l.79 3.867a.4.4 0 0 1-.393.48H5.156a.4.4 0 0 1-.391-.48Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m1.431 12.187.79-3.867A.4.4 0 0 1 2.611 8h4.109a.4.4 0 0 1 .392.32l.79 3.867a.4.4 0 0 1-.393.48H1.823a.4.4 0 0 1-.392-.48Z'
		/>
	</svg>
);
export default SvgCommodity;
