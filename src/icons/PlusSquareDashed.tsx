import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPlusSquareDashed = ({
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
			d='M5.333 8H8m0 0h2.667M8 8V5.333M8 8v2.667M4.667 2.667h-2v2M2.667 7.333v1.334M7.333 2.667h1.334M7.333 13.333h1.334M13.333 7.333v1.334M11.333 2.667h2v2M4.667 13.333h-2v-2M11.333 13.333h2v-2'
		/>
	</svg>
);
export default SvgPlusSquareDashed;
