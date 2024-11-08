import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgZoomIn = ({
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
			d='M5.333 7.333h2m0 0h2m-2 0v-2m0 2v2M11.333 11.333 14 14M2 7.333a5.333 5.333 0 1 0 10.667 0A5.333 5.333 0 0 0 2 7.333'
		/>
	</svg>
);
export default SvgZoomIn;
