import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRhombusArrowRight = ({
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
		<mask
			id='rhombus-arrow-right_svg__a'
			width={16}
			height={16}
			x={0}
			y={0}
			maskUnits='userSpaceOnUse'
			style={{
				maskType: 'luminance',
			}}
		>
			<path fill='#fff' d='M16 0H0v16h16z' />
		</mask>
		<g
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			mask='url(#rhombus-arrow-right_svg__a)'
		>
			<path
				strokeLinecap='round'
				d='M10.667 7.333h-4C6 7.333 5.333 8 5.333 8.667v.666m5.334-2L9.333 6m1.334 1.333L9.333 8.667'
			/>
			<path d='M.95 7.717 7.717.95a.4.4 0 0 1 .566 0l6.768 6.767a.4.4 0 0 1 0 .566L8.282 15.05a.4.4 0 0 1-.566 0L.95 8.282a.4.4 0 0 1 0-.566Z' />
		</g>
	</svg>
);
export default SvgRhombusArrowRight;
