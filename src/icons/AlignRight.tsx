import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignRight = ({
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
			d='M4.667 6.667H14M2 4h12M4.667 12H14M2 9.333h12'
		/>
	</svg>
);
export default SvgAlignRight;
