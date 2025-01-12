import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHexagonPlus = ({
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
			d='M6 9H8M8 9H10M8 9V7M8 9V11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.80002 1.7821C7.92376 1.71065 8.07629 1.71065 8.20002 1.78211L14.1509 5.21783C14.2746 5.28928 14.3509 5.42133 14.3509 5.56424V12.4357C14.3509 12.5786 14.2746 12.7106 14.1509 12.7821L8.20002 16.2178C8.07629 16.2893 7.92376 16.2893 7.80002 16.2178L1.84917 12.7821C1.72541 12.7106 1.64917 12.5786 1.64917 12.4357V5.56424C1.64917 5.42133 1.72541 5.28928 1.84917 5.21783L7.80002 1.7821Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHexagonPlus;
