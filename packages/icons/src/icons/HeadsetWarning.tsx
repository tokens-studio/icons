import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHeadsetWarning = ({
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
			d='M8 8.66663V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14.0068L8.00667 13.9994'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66665 8.99983L2.34327 9.08069C1.74971 9.22909 1.33331 9.76243 1.33331 10.3742V11.6255C1.33331 12.2373 1.74971 12.7706 2.34327 12.919L3.50297 13.209C3.75543 13.272 3.99998 13.0811 3.99998 12.8209V9.17883C3.99998 8.91863 3.75543 8.72769 3.50297 8.79076L2.66665 8.99983ZM2.66665 8.99983V8.66663C2.66665 5.35292 5.05446 2.66663 7.99998 2.66663C10.9455 2.66663 13.3333 5.35292 13.3333 8.66663V8.99996M13.3333 8.99996L13.6567 9.08069C14.2502 9.22909 14.6666 9.76243 14.6666 10.3742V11.6255C14.6666 12.2373 14.2502 12.7706 13.6567 12.919L12.497 13.209C12.2445 13.272 12 13.0811 12 12.8209V9.17883C12 8.91863 12.2445 8.72769 12.497 8.79076L13.3333 8.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHeadsetWarning;
