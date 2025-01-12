import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOpenSelectHandGesture = ({
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
			d='M5.33332 9.71431L4.11809 8.55697C3.69013 8.14937 3.00885 8.18037 2.61967 8.62517C2.26796 9.02711 2.27831 9.63024 2.64361 10.0199L6.60491 14.2453C6.85699 14.5142 7.20845 14.6667 7.57699 14.6667C8.30032 14.6667 9.48952 14.6667 10.6667 14.6667C12.2667 14.6667 13.3333 13.3334 13.3333 12C13.3333 12 13.3333 7.42864 13.3333 6.28577'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 6.66664C11.3333 6.66664 11.3333 6.58322 11.3333 6.28568C11.3333 4.76187 13.3333 4.76187 13.3333 6.28568'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33334 6.6667C9.33334 6.6667 9.33334 6.11892 9.33334 5.52384C9.33334 4.00003 11.3333 4.00003 11.3333 5.52384C11.3333 5.67261 11.3333 6.13697 11.3333 6.28574C11.3333 6.58329 11.3333 6.6667 11.3333 6.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33334 6.66673C7.33334 6.66673 7.33334 5.74389 7.33334 5.00003C7.33334 3.47623 9.33334 3.47623 9.33334 5.00003C9.33334 5.00003 9.33334 5.37507 9.33334 5.52385C9.33334 6.11893 9.33334 6.66673 9.33334 6.66673'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33334 9.71431V2.33337C5.33334 1.78109 5.78106 1.33337 6.33334 1.33337C6.88561 1.33337 7.33334 1.78041 7.33334 2.3327C7.33334 3.12649 7.33334 4.22775 7.33334 5.00004C7.33334 5.74389 7.33334 6.66671 7.33334 6.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOpenSelectHandGesture;
