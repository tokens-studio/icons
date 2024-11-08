import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRulerCombine = ({
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
			d='M1.333 14.267V1.733c0-.22.18-.4.4-.4h12.534c.22 0 .4.18.4.4v4.534a.4.4 0 0 1-.4.4h-7.2a.4.4 0 0 0-.4.4v7.2a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4M10.667 6.667v-2M6.667 6.667v-2M6.667 10.667h-2M6.667 6.667h-2'
		/>
	</svg>
);
export default SvgRulerCombine;
