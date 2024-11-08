import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMagnet = ({
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
			d='M2.667 2.667v5.53c0 2.837 2.388 5.136 5.333 5.136s5.333-2.3 5.333-5.136v-5.53'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2.667 2.667H6.42v4.545c0 .803.707 1.455 1.58 1.455s1.58-.652 1.58-1.455V2.667h3.753M6 5.333H2.667M13.333 5.333H10'
		/>
	</svg>
);
export default SvgMagnet;
