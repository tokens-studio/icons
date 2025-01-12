import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPcNoEntry = ({
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
			d='M4.66667 14.6666H11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33333 11.3334V2.66671C1.33333 1.93033 1.93028 1.33337 2.66666 1.33337H13.3333C14.0697 1.33337 14.6667 1.93033 14.6667 2.66671V11.3334C14.6667 12.0698 14.0697 12.6667 13.3333 12.6667H2.66666C1.93028 12.6667 1.33333 12.0698 1.33333 11.3334Z'
			stroke='currentColor'
		/>
		<path
			d='M9.90439 5.13337C9.42039 4.63968 8.74599 4.33337 7.99999 4.33337C6.52723 4.33337 5.33333 5.52728 5.33333 7.00004C5.33333 7.72684 5.62408 8.38571 6.09561 8.86671M9.90439 5.13337C10.3759 5.61437 10.6667 6.27325 10.6667 7.00004C10.6667 8.47277 9.47273 9.66671 7.99999 9.66671C7.25399 9.66671 6.57959 9.36037 6.09561 8.86671M9.90439 5.13337L6.09561 8.86671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPcNoEntry;
