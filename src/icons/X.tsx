import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgX = ({
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
			strokeWidth={1.5}
			d='m11.213 13.846-8.71-11.2A.4.4 0 0 1 2.817 2H4.47a.4.4 0 0 1 .316.154l8.71 11.2a.4.4 0 0 1-.315.646H11.53a.4.4 0 0 1-.316-.154Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M13.333 2 2.667 14'
		/>
	</svg>
);
export default SvgX;
