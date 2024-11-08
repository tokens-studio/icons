import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShareIos = ({
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
			d='M13.333 8.667v4c0 .736-.597 1.333-1.333 1.333H4a1.333 1.333 0 0 1-1.333-1.333v-4M8 10V2m0 0L5.667 4.333M8 2l2.333 2.333'
		/>
	</svg>
);
export default SvgShareIos;
