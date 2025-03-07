import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRhombus = ({
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
		<path
			d='M7.71712 0.949552C7.87332 0.793346 8.12659 0.793346 8.28285 0.949552L15.0505 7.71718C15.2067 7.87338 15.2067 8.12665 15.0505 8.28291L8.28285 15.0505C8.12665 15.2067 7.87338 15.2068 7.71712 15.0505L0.949491 8.28291C0.793285 8.12671 0.793285 7.87345 0.949491 7.71718L7.71712 0.949552Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRhombus;
