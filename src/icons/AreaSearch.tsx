import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAreaSearch = ({
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
			d='M13.416 13.412a2 2 0 1 0-2.832-2.825 2 2 0 0 0 2.832 2.825m0 0 1.25 1.255M4.667 1.333h-2v2M2.667 7.333v1.334M7.333 1.333h1.334M7.333 14.667h1.334M13.333 7.333v1.334M11.333 1.333h2v2M4.667 14.667h-2v-2'
		/>
	</svg>
);
export default SvgAreaSearch;
