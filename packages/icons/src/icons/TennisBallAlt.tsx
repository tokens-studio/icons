import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTennisBallAlt = ({
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
			d='M13.7734 4.66672C15.6144 7.85537 14.5219 11.9326 11.3333 13.7736C8.14463 15.6145 4.06738 14.522 2.22643 11.3334C0.38548 8.14477 1.47798 4.0675 4.6666 2.22656C7.85523 0.385603 11.9325 1.4781 13.7734 4.66672Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3066 10.1612C10.9826 7.95965 9.25171 4.96147 9.28151 1.45752'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.71836 14.5424C6.4737 10.5629 4.74264 7.5648 1.69324 5.83862'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTennisBallAlt;
