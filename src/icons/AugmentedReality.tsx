import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAugmentedReality = ({
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
			d='m3.667 10.333.409-1.145m0 0 1.257-3.521 1.258 3.52m-2.515 0H6.59M7 10.334l-.41-1.145M8.667 10.333V8.467m0 0v-2.8h1.904c.477 0 1.429 0 1.429 1.4s-.952 1.4-1.429 1.4m-1.904 0h1.904m0 0L12 10.333'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 12.267V3.733c0-.22.18-.4.4-.4h12.534a.4.4 0 0 1 .4.4v8.534a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgAugmentedReality;
