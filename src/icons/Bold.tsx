import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBold = ({
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
			d='M8 7.778H5.333m2.667 0s2.222 0 2.222-2.222S8 3.333 8 3.333H5.733a.4.4 0 0 0-.4.4v4.045m2.667 0s2.667 0 2.667 2.444S8 12.667 8 12.667H5.733a.4.4 0 0 1-.4-.4v-4.49'
		/>
	</svg>
);
export default SvgBold;
