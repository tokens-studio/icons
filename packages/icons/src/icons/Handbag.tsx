import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHandbag = ({
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
			d='M6.00001 5.33333H2.66668C1.9303 5.33333 1.33334 5.93029 1.33334 6.66667V12.6667C1.33334 13.4031 1.9303 14 2.66668 14H13.3333C14.0697 14 14.6667 13.4031 14.6667 12.6667V6.66667C14.6667 5.93029 14.0697 5.33333 13.3333 5.33333H10M6.00001 5.33333V2.4C6.00001 2.17909 6.1791 2 6.40001 2H9.60001C9.82094 2 10 2.17909 10 2.4V5.33333M6.00001 5.33333H10M6.00001 5.33333V9.33333M10 5.33333V9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHandbag;
