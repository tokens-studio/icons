import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDivideThree = ({
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
			d='M8 14v-2.667A3.333 3.333 0 0 0 4.667 8H2M8 14v-2.667A3.333 3.333 0 0 1 11.333 8H14M8 1.333v13.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 5.333 1.333 8 4 10.667M10.667 4 8 1.333 5.333 4M12 5.333 14.667 8 12 10.667'
		/>
	</svg>
);
export default SvgDivideThree;
