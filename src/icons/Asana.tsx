import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAsana = ({
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
			d='M8 7.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M4.667 13.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M11.333 13.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334'
		/>
	</svg>
);
export default SvgAsana;
