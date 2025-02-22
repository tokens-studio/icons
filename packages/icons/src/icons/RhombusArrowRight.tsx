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
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<mask
			id='mask0_1_2066'
			style={{
				maskType: 'luminance',
			}}
			maskUnits='userSpaceOnUse'
			x={0}
			y={0}
			width={16}
			height={16}
		>
			<path d='M16 0H0V16H16V0Z' fill='white' />
		</mask>
		<g mask='url(#mask0_1_2066)'>
			<path
				d='M10.6667 7.33333H6.66671C6.00004 7.33333 5.33337 8 5.33337 8.66667V9.33333M10.6667 7.33333L9.33337 6M10.6667 7.33333L9.33337 8.66667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M0.949552 7.71718L7.71718 0.949552C7.87345 0.793346 8.12665 0.793346 8.28291 0.949552L15.0505 7.71718C15.2068 7.87345 15.2067 8.12665 15.0505 8.28291L8.28291 15.0505C8.12665 15.2068 7.87345 15.2067 7.71718 15.0505L0.949552 8.28291C0.793346 8.12665 0.793346 7.87345 0.949552 7.71718Z'
				stroke='currentColor'
				strokeLinejoin='round'
			/>
		</g>
	</svg>
);
export default SvgRhombusArrowRight;
