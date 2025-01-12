import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWarningHexagon = ({
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
			d='M1.7821 8.20002C1.71065 8.07629 1.71065 7.92376 1.78211 7.80002L5.21783 1.84917C5.28928 1.72541 5.42133 1.64917 5.56424 1.64917H12.4357C12.5786 1.64917 12.7106 1.72541 12.7821 1.84917L16.2178 7.80002C16.2893 7.92376 16.2893 8.07629 16.2178 8.20002L12.7821 14.1509C12.7106 14.2746 12.5786 14.3509 12.4357 14.3509H5.56424C5.42133 14.3509 5.28928 14.2746 5.21783 14.1509L1.7821 8.20002Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 5.33325V7.99992'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 10.6734L9.00667 10.666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWarningHexagon;
