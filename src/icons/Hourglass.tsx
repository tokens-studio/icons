import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHourglass = ({
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
			d='M8 8a4.667 4.667 0 0 0 4.667-4.667H3.333A4.667 4.667 0 0 0 8 8m0 0a4.667 4.667 0 0 1 4.667 4.667H3.333A4.667 4.667 0 0 1 8 8M3.333 1.333h9.334M3.333 14.667h9.334'
		/>
	</svg>
);
export default SvgHourglass;
