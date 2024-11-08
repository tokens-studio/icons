import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDrawer = ({
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
			d='M14 9.333H2M2 5.333h12M7.333 11.333h1.334M7.333 7.333h1.334M7.333 3.333h1.334M14 1.733v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4v-11.2c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4M11.667 13.333v1.334M4.333 13.333v1.334'
		/>
	</svg>
);
export default SvgDrawer;
