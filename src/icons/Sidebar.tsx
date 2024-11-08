import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSidebar = ({
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
			d='M8.62 2h3.725A1.655 1.655 0 0 1 14 3.655v8.69A1.655 1.655 0 0 1 12.345 14H8.62M2 12.345v-8.69A1.655 1.655 0 0 1 3.655 2h2.07v12h-2.07A1.655 1.655 0 0 1 2 12.345'
		/>
	</svg>
);
export default SvgSidebar;
