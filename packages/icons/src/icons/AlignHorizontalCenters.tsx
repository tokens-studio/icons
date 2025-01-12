import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignHorizontalCenters = ({
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
			d='M8 14.6667V1.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 10.6667H3.33333C2.59695 10.6667 2 10.0697 2 9.33333V6.66666C2 5.93028 2.59695 5.33333 3.33333 5.33333H12.6667C13.4031 5.33333 14 5.93028 14 6.66666V9.33333C14 10.0697 13.4031 10.6667 12.6667 10.6667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAlignHorizontalCenters;
