import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframeMinusIn = ({
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
			d='M6 8h4M13.851 8.897l-4.864 5.351a1.333 1.333 0 0 1-1.974 0L2.15 8.897a1.333 1.333 0 0 1 0-1.794l4.864-5.351a1.333 1.333 0 0 1 1.974 0l4.864 5.351a1.333 1.333 0 0 1 0 1.794'
		/>
	</svg>
);
export default SvgKeyframeMinusIn;
