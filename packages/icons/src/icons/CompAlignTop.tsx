import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCompAlignTop = ({
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
			d='M14.6667 2H1.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33334 12.6667V6.00002C5.33334 5.26364 5.9303 4.66669 6.66668 4.66669H9.33334C10.0697 4.66669 10.6667 5.26364 10.6667 6.00002V12.6667C10.6667 13.4031 10.0697 14 9.33334 14H6.66668C5.9303 14 5.33334 13.4031 5.33334 12.6667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgCompAlignTop;
