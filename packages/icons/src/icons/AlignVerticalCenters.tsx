import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignVerticalCenters = ({
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
			d='M14.6666 8H1.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 12.6667V3.33333C5.33325 2.59695 5.93021 2 6.66659 2H9.33325C10.0697 2 10.6666 2.59695 10.6666 3.33333V12.6667C10.6666 13.4031 10.0697 14 9.33325 14H6.66659C5.93021 14 5.33325 13.4031 5.33325 12.6667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAlignVerticalCenters;
