import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframeAlignCenter = ({
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
			d='m11.12 8.256-2.813 3.375a.4.4 0 0 1-.614 0L4.88 8.256a.4.4 0 0 1 0-.512l2.813-3.375a.4.4 0 0 1 .614 0l2.813 3.375a.4.4 0 0 1 0 .512M8 14.667v-1.334M8 2.667V1.333M2.667 8H1.333M14.667 8h-1.334'
		/>
	</svg>
);
export default SvgKeyframeAlignCenter;
