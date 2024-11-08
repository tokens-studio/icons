import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDisplay4K = ({
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
			d='M9 6v2.667m0 0V10m0-1.333.914-1.045m0 0L11.334 6m-1.42 1.622L11.334 10M6.333 6l-2 3h2.334v1'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 12.267V3.733c0-.22.18-.4.4-.4h12.534c.22 0 .4.18.4.4v8.534a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgDisplay4K;
