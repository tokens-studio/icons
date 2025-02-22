import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHexagonDice = ({
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
			d='M7.80002 1.7821C7.92376 1.71065 8.07629 1.71065 8.20002 1.78211L14.1509 5.21783C14.2746 5.28928 14.3509 5.42133 14.3509 5.56424V12.4357C14.3509 12.5786 14.2746 12.7106 14.1509 12.7821L8.20002 16.2178C8.07629 16.2893 7.92376 16.2893 7.80002 16.2178L1.84917 12.7821C1.72541 12.7106 1.64917 12.5786 1.64917 12.4357V5.56424C1.64917 5.42133 1.72541 5.28928 1.84917 5.21783L7.80002 1.7821Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 11H4.66663L7.99996 5.66663L11.3333 11Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 5.33337L7.99996 5.66671'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 5.33337L4.66663 11'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3334 5.33337L11.3334 11'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3333 5.33329L8 5.66659V1.66663'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3334 12.6667L11.3334 11'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 12.6667L4.66663 11'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66663 11L7.99996 16.3333L11.3333 11'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHexagonDice;
