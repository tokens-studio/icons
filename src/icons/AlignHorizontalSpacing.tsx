import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignHorizontalSpacing = ({
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
			d='M2 14.667V1.333M14 14.667V1.333'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M10 10.667H6a1.333 1.333 0 0 1-1.333-1.334V6.667c0-.737.597-1.334 1.333-1.334h4c.736 0 1.333.597 1.333 1.334v2.666c0 .737-.597 1.334-1.333 1.334Z'
		/>
	</svg>
);
export default SvgAlignHorizontalSpacing;
