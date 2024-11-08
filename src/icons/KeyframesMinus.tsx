import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframesMinus = ({
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
			d='M1.333 8h4M4.167 4l.163-.187a1.333 1.333 0 0 1 2.007 0l2.895 3.309c.44.503.44 1.253 0 1.756l-2.895 3.309a1.333 1.333 0 0 1-2.007 0L4.167 12'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m8.667 12.667 3.256-3.8c.428-.499.428-1.235 0-1.735L8.667 3.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11.333 12.667 3.257-3.8c.428-.499.428-1.235 0-1.735l-3.257-3.799'
		/>
	</svg>
);
export default SvgKeyframesMinus;
